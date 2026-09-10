import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../constants/colors";

const notificationData = [
    {
        id: "1",
        type: "booking",
        title: "New Booking Request",
        message:
            "Michael Brown requested an AC Repair service.",
        time: "5 min ago",
        icon: "calendar-plus",
        color: "#A855F7",
        unread: true,
    },
    {
        id: "2",
        type: "payment",
        title: "Payment Received",
        message:
            "₹800 payment received for AC Repair.",
        time: "1 hour ago",
        icon: "cash-check",
        color: "#39D98A",
        unread: true,
    },
    {
        id: "3",
        type: "booking",
        title: "Booking Confirmed",
        message:
            "Your plumbing booking with Rahul Sharma is confirmed.",
        time: "3 hours ago",
        icon: "calendar-check",
        color: "#3B82F6",
        unread: false,
    },
    {
        id: "4",
        type: "reminder",
        title: "Upcoming Service",
        message:
            "AC Repair is scheduled today at 2:00 PM.",
        time: "5 hours ago",
        icon: "clock-alert-outline",
        color: "#F5B82E",
        unread: false,
    },
    {
        id: "5",
        type: "payment",
        title: "Payout Completed",
        message:
            "₹4,850 has been transferred to your bank account.",
        time: "Yesterday",
        icon: "bank-transfer",
        color: "#39D98A",
        unread: false,
    },
    {
        id: "6",
        type: "system",
        title: "Profile Verified",
        message:
            "Your provider profile has been successfully verified.",
        time: "2 days ago",
        icon: "shield-check",
        color: "#A855F7",
        unread: false,
    },
];

const NotificationsScreen = ({ navigation }) => {
    const [notifications, setNotifications] =
        useState(notificationData);

    const [activeFilter, setActiveFilter] =
        useState("All");

    const filters = [
        "All",
        "Bookings",
        "Payments",
        "System",
    ];

    const unreadCount = notifications.filter(
        (item) => item.unread
    ).length;

    const filteredNotifications =
        activeFilter === "All"
            ? notifications
            : notifications.filter((item) => {

                if (
                    activeFilter === "Bookings"
                ) {
                    return item.type === "booking";
                }

                if (
                    activeFilter === "Payments"
                ) {
                    return item.type === "payment";
                }

                if (
                    activeFilter === "System"
                ) {
                    return (
                        item.type === "system" ||
                        item.type === "reminder"
                    );
                }

                return true;
            });

    const markAllRead = () => {
        setNotifications((previous) =>
            previous.map((item) => ({
                ...item,
                unread: false,
            }))
        );
    };

    const markRead = (id) => {
        setNotifications((previous) =>
            previous.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        unread: false,
                    }
                    : item
            )
        );
    };

    return (
        <View style={styles.container}>

            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.background}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
            >

                {/* HEADER */}

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() =>
                            navigation.goBack()
                        }
                    >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={23}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>

                    <View style={styles.headerTitleContainer}>

                        <Text style={styles.headerTitle}>
                            Notifications
                        </Text>

                        {unreadCount > 0 && (
                            <View style={styles.countBadge}>

                                <Text style={styles.countText}>
                                    {unreadCount}
                                </Text>

                            </View>
                        )}

                    </View>

                    <TouchableOpacity
                        onPress={markAllRead}
                    >
                        <Text style={styles.readText}>
                            Mark all read
                        </Text>
                    </TouchableOpacity>

                </View>


                {/* FILTER */}

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={
                        styles.filterContainer
                    }
                >

                    {filters.map((filter) => {

                        const active =
                            activeFilter === filter;

                        return (
                            <TouchableOpacity
                                key={filter}
                                style={[
                                    styles.filterButton,
                                    active &&
                                    styles.filterButtonActive,
                                ]}
                                onPress={() =>
                                    setActiveFilter(filter)
                                }
                            >

                                <Text
                                    style={[
                                        styles.filterText,
                                        active &&
                                        styles.filterTextActive,
                                    ]}
                                >
                                    {filter}
                                </Text>

                            </TouchableOpacity>
                        );
                    })}

                </ScrollView>


                {/* TODAY */}

                <Text style={styles.sectionTitle}>
                    Today
                </Text>

                {filteredNotifications
                    .filter(
                        (item) =>
                            item.time !== "Yesterday" &&
                            item.time !== "2 days ago"
                    )
                    .map((item) => (

                        <NotificationCard
                            key={item.id}
                            item={item}
                            onPress={() =>
                                markRead(item.id)
                            }
                        />

                    ))}


                {/* EARLIER */}

                {filteredNotifications.some(
                    (item) =>
                        item.time === "Yesterday" ||
                        item.time === "2 days ago"
                ) && (

                        <Text style={styles.sectionTitle}>
                            Earlier
                        </Text>

                    )}

                {filteredNotifications
                    .filter(
                        (item) =>
                            item.time === "Yesterday" ||
                            item.time === "2 days ago"
                    )
                    .map((item) => (

                        <NotificationCard
                            key={item.id}
                            item={item}
                            onPress={() =>
                                markRead(item.id)
                            }
                        />

                    ))}


                {/* EMPTY */}

                {filteredNotifications.length === 0 && (

                    <View style={styles.emptyContainer}>

                        <View style={styles.emptyIcon}>

                            <MaterialCommunityIcons
                                name="bell-off-outline"
                                size={38}
                                color={COLORS.textSecondary}
                            />

                        </View>

                        <Text style={styles.emptyTitle}>
                            No notifications
                        </Text>

                        <Text style={styles.emptyText}>
                            You're all caught up.
                        </Text>

                    </View>

                )}

            </ScrollView>

        </View>
    );
};


/* NOTIFICATION CARD */

const NotificationCard = ({
    item,
    onPress,
}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[
                styles.notificationCard,
                item.unread &&
                styles.unreadCard,
            ]}
            onPress={onPress}
        >

            <View
                style={[
                    styles.notificationIcon,
                    {
                        backgroundColor:
                            item.color + "20",
                    },
                ]}
            >

                <MaterialCommunityIcons
                    name={item.icon}
                    size={23}
                    color={item.color}
                />

            </View>


            <View style={styles.notificationInfo}>

                <View style={styles.titleRow}>

                    <Text
                        style={[
                            styles.notificationTitle,
                            item.unread &&
                            styles.unreadTitle,
                        ]}
                    >
                        {item.title}
                    </Text>

                    {item.unread && (
                        <View style={styles.unreadDot} />
                    )}

                </View>

                <Text style={styles.message}>
                    {item.message}
                </Text>

                <Text style={styles.time}>
                    {item.time}
                </Text>

            </View>

            <MaterialCommunityIcons
                name="chevron-right"
                size={19}
                color={COLORS.textSecondary}
            />

        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    scroll: {
        paddingHorizontal: 16,
        paddingTop:
            StatusBar.currentHeight || 10,
        paddingBottom: 40,
    },


    /* HEADER */

    header: {
        height: 52,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerButton: {
        width: 42,
        height: 42,
        borderRadius: 13,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    headerTitleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    headerTitle: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
    },

    countBadge: {
        minWidth: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: COLORS.red,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 7,
    },

    countText: {
        color: COLORS.white,
        fontSize: 9,
        fontWeight: "800",
    },

    readText: {
        color: COLORS.primaryLight,
        fontSize: 9,
        fontWeight: "600",
    },


    /* FILTER */

    filterContainer: {
        paddingVertical: 18,
        gap: 8,
    },

    filterButton: {
        height: 36,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    filterButtonActive: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },

    filterText: {
        color: COLORS.textSecondary,
        fontSize: 10,
        fontWeight: "600",
    },

    filterTextActive: {
        color: COLORS.white,
    },


    /* SECTION */

    sectionTitle: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
        marginTop: 7,
        marginBottom: 10,
    },


    /* CARD */

    notificationCard: {
        backgroundColor: COLORS.card,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 9,
    },

    unreadCard: {
        borderColor: "#7C3AED45",
        backgroundColor: "#17122A",
    },

    notificationIcon: {
        width: 46,
        height: 46,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
    },

    notificationInfo: {
        flex: 1,
        marginLeft: 11,
        marginRight: 7,
    },

    titleRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    notificationTitle: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "600",
    },

    unreadTitle: {
        fontWeight: "800",
    },

    unreadDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.primaryLight,
        marginLeft: 6,
    },

    message: {
        color: COLORS.textSecondary,
        fontSize: 10,
        lineHeight: 15,
        marginTop: 4,
    },

    time: {
        color: "#596276",
        fontSize: 9,
        marginTop: 5,
    },


    /* EMPTY */

    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 80,
    },

    emptyIcon: {
        width: 80,
        height: 80,
        borderRadius: 25,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    emptyTitle: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
        marginTop: 15,
    },

    emptyText: {
        color: COLORS.textSecondary,
        fontSize: 11,
        marginTop: 5,
    },

});

export default NotificationsScreen;