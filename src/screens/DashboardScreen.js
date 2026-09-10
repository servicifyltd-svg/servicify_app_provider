import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import {
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import COLORS from "../constants/colors";

const DashboardScreen = ({ navigation }) => {

    const [isOnline, setIsOnline] = useState(true);
    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 12) {
            return "Good Morning 👋";
        }

        if (hour < 17) {
            return "Good Afternoon 👋";
        }

        if (hour < 21) {
            return "Good Evening 👋";
        }

        return "Good Night 👋";
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
                    <View>
                        <Text style={styles.greeting}>
                            {getGreeting()}
                        </Text>
                        <Text style={styles.name}>
                            Rahul Birajdar
                        </Text>

                        <TouchableOpacity
                            style={styles.onlineContainer}
                            onPress={() =>
                                setIsOnline(!isOnline)
                            }
                        >
                            <View
                                style={[
                                    styles.onlineDot,
                                    {
                                        backgroundColor: isOnline
                                            ? COLORS.green
                                            : COLORS.red,
                                    },
                                ]}
                            />
                            <Text style={styles.onlineText}>
                                {isOnline
                                    ? "You're Online"
                                    : "You're Offline"}
                            </Text>
                            <MaterialCommunityIcons
                                name="chevron-down"
                                size={17}
                                color={COLORS.textSecondary}
                            />
                        </TouchableOpacity>
                    </View>


                    {/* NOTIFICATION */}
                    <TouchableOpacity
                        style={styles.notificationButton}
                        onPress={() =>
                            navigation.navigate(
                                "Notifications"
                            )
                        }
                    >
                        <MaterialCommunityIcons
                            name="bell-outline"
                            size={23}
                            color={COLORS.white}
                        />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>


                {/* EARNINGS CARD */}
                <LinearGradient
                    colors={[
                        "#17102F",
                        "#2A164F",
                        "#161127",
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.earningsCard}
                >
                    <View style={styles.earningsHeader}>
                        <View>
                            <Text style={styles.earningsLabel}>
                                Today's Earnings
                            </Text>
                            <Text style={styles.earningsAmount}>
                                ₹0
                            </Text>
                        </View>
                        <View style={styles.walletIcon}>
                            <MaterialCommunityIcons
                                name="wallet-outline"
                                size={26}
                                color={COLORS.gold}
                            />
                        </View>
                    </View>
                    <View style={styles.earningsFooter}>
                        <View style={styles.growthContainer}>
                            <MaterialCommunityIcons
                                name="trending-up"
                                size={17}
                                color={COLORS.green}
                            />
                            <Text style={styles.growthText}>
                                0%
                            </Text>
                        </View>
                        <Text style={styles.fromText}>
                            from yesterday
                        </Text>

                    </View>

                </LinearGradient>


                {/* STATS */}

                <View style={styles.statsRow}>

                    <StatCard
                        icon="calendar-check-outline"
                        value="0"
                        label="Bookings"
                        color={COLORS.primary}
                    />

                    <StatCard
                        icon="check-circle-outline"
                        value="0"
                        label="Completed"
                        color={COLORS.green}
                    />

                    <StatCard
                        icon="clock-outline"
                        value="0"
                        label="Pending"
                        color={COLORS.orange}
                    />
                </View>

                {/* BOOKING REQUESTS */}
                <SectionHeader
                    title="Booking Requests"
                    action="View All"
                    onPress={() =>
                        navigation.navigate("Bookings")
                    }
                />
                <BookingRequest
                    icon="air-conditioner"
                    title="AC Repair"
                    customer="Rahul Sharma"
                    time="Today • 4:30 PM"
                    price="₹330"
                    distance="2.5 km"
                    status="New"
                />

                {/* TODAY'S SCHEDULE */}
                <SectionHeader
                    title="Today's Schedule"
                    action="View All"
                    onPress={() =>
                        navigation.navigate("Bookings")
                    }
                />
                <ScheduleItem
                    time="5:30 PM"
                    title="Plumbing Repair"
                    customer="Amit Patil"
                    location="2.4 km away"
                    icon="pipe"
                />
                <ScheduleItem
                    time="7:00 PM"
                    title="Electrical Work"
                    customer="Sneha Joshi"
                    location="4.1 km away"
                    icon="flash"
                />

                {/* QUICK ACTIONS */}
                <Text style={styles.sectionTitle}>
                    Quick Actions
                </Text>
                <View style={styles.quickActions}>
                    <QuickAction
                        icon="briefcase-plus-outline"
                        label="Add Service"
                        onPress={() =>
                            navigation.navigate("Services")
                        }
                    />
                    <QuickAction
                        icon="calendar-clock"
                        label="Availability"
                        onPress={() =>
                            navigation.navigate(
                                "Availability"
                            )
                        }
                    />
                    <QuickAction
                        icon="wallet-outline"
                        label="Earnings"
                        onPress={() =>
                            navigation.navigate(
                                "Earnings"
                            )
                        }
                    />
                    <QuickAction
                        icon="star-outline"
                        label="Reviews"
                        onPress={() =>
                            navigation.navigate(
                                "Reviews"
                            )
                        }
                    />
                </View>
            </ScrollView>
        </View>
    );
};


/* STAT CARD */

const StatCard = ({
    icon,
    value,
    label,
    color,
}) => {

    return (
        <View style={styles.statCard}>

            <View
                style={[
                    styles.statIcon,
                    {
                        backgroundColor:
                            color + "20",
                    },
                ]}
            >

                <MaterialCommunityIcons
                    name={icon}
                    size={21}
                    color={color}
                />

            </View>

            <Text style={styles.statValue}>
                {value}
            </Text>

            <Text style={styles.statLabel}>
                {label}
            </Text>


        </View>
    );
};


/* SECTION HEADER */

const SectionHeader = ({
    title,
    action,
    onPress,
}) => {

    return (
        <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
                {title}
            </Text>

            <TouchableOpacity onPress={onPress}>

                <Text style={styles.viewAll}>
                    {action}
                </Text>

            </TouchableOpacity>

        </View>
    );
};


/* BOOKING REQUEST */

const BookingRequest = ({
    icon,
    title,
    customer,
    time,
    price,
    distance,
    status
}) => {

    return (
        <View style={styles.bookingCard}>

            <View style={styles.bookingTop}>

                <View style={styles.serviceIcon}>

                    <MaterialCommunityIcons
                        name={icon}
                        size={24}
                        color={COLORS.gold}
                    />

                </View>

                <View style={styles.bookingInfo}>

                    <Text style={styles.bookingTitle}>
                        {title}
                    </Text>

                    <Text style={styles.customer}>
                        {customer}
                    </Text>

                    <Text style={styles.bookingTime}>
                        {time}
                    </Text>

                </View>


                <View>
                    <Text style={styles.bookingPrice}>
                        {status}
                    </Text>
                    <Text style={styles.bookingDistance}>
                        {distance}
                    </Text>
                </View>

            </View>


            <View style={styles.bookingActions}>

                <TouchableOpacity
                    style={styles.declineButton}
                >

                    <Text style={styles.declineText} >
                        View Info
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.acceptButton}
                >

                    <Text style={styles.acceptText}>
                        Accept
                    </Text>

                </TouchableOpacity>

            </View>

        </View>
    );
};


/* SCHEDULE */

const ScheduleItem = ({
    time,
    title,
    customer,
    location,
    icon,
}) => {

    return (
        <View style={styles.scheduleCard}>

            <View style={styles.timeContainer}>

                <Text style={styles.time}>
                    {time}
                </Text>

            </View>

            <View style={styles.scheduleLine} />

            <View style={styles.scheduleIcon}>

                <MaterialCommunityIcons
                    name={icon}
                    size={21}
                    color={COLORS.gold}
                />

            </View>

            <View style={styles.scheduleInfo}>

                <Text style={styles.scheduleTitle}>
                    {title}
                </Text>

                <Text style={styles.scheduleCustomer}>
                    {customer}
                </Text>

                <View style={styles.locationRow}>

                    <MaterialCommunityIcons
                        name="map-marker-outline"
                        size={14}
                        color={COLORS.textSecondary}
                    />

                    <Text style={styles.location}>
                        {location}
                    </Text>

                </View>

            </View>

            <MaterialCommunityIcons
                name="chevron-right"
                size={21}
                color={COLORS.textSecondary}
            />

        </View>
    );
};


/* QUICK ACTION */

const QuickAction = ({
    icon,
    label,
    onPress,
}) => {

    return (
        <TouchableOpacity
            style={styles.quickAction}
            onPress={onPress}
        >

            <View style={styles.quickIcon}>

                <MaterialCommunityIcons
                    name={icon}
                    size={23}
                    color={COLORS.gold}
                />

            </View>

            <Text style={styles.quickLabel}>
                {label}
            </Text>

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
        paddingTop: StatusBar.currentHeight || 10,
        paddingBottom: 35,
    },


    /* HEADER */

    header: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },

    greeting: {
        color: COLORS.textSecondary,
        fontSize: 13,
    },

    name: {
        color: COLORS.white,
        fontSize: 25,
        fontWeight: "800",
        marginTop: 2,
    },

    onlineContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 7,
    },

    onlineDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 6,
    },

    onlineText: {
        color: COLORS.textSecondary,
        fontSize: 12,
    },

    notificationButton: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    notificationDot: {
        position: "absolute",
        top: 9,
        right: 10,
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: COLORS.red,
    },


    /* EARNINGS */

    earningsCard: {
        marginTop: 22,
        borderRadius: 18,
        padding: 20,
        borderWidth: 1,
        borderColor: "#3D2B62",
    },

    earningsHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    earningsLabel: {
        color: COLORS.textSecondary,
        fontSize: 13,
    },

    earningsAmount: {
        color: COLORS.white,
        fontSize: 31,
        fontWeight: "800",
        marginTop: 5,
    },

    walletIcon: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#FFFFFF10",
        alignItems: "center",
        justifyContent: "center",
    },

    earningsFooter: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
    },

    growthContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    growthText: {
        color: COLORS.green,
        fontSize: 12,
        fontWeight: "700",
        marginLeft: 4,
    },

    fromText: {
        color: COLORS.textSecondary,
        fontSize: 12,
        marginLeft: 6,
    },


    /* STATS */

    statsRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 14,
    },

    statCard: {
        flex: 1,
        backgroundColor: COLORS.card,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 12,
    },

    statIcon: {
        width: 38,
        height: 38,
        borderRadius: 11,
        alignItems: "center",
        justifyContent: "center",
    },

    statValue: {
        color: COLORS.white,
        fontSize: 21,
        fontWeight: "800",
        marginTop: 9,
    },

    statLabel: {
        color: COLORS.textSecondary,
        fontSize: 11,
        marginTop: 2,
    },


    /* SECTION */

    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 26,
        marginBottom: 11,
    },

    sectionTitle: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
    },

    viewAll: {
        color: COLORS.gold,
        fontSize: 12,
        fontWeight: "600",
    },


    /* BOOKING */

    bookingCard: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 15,
    },

    bookingTop: {
        flexDirection: "row",
        alignItems: "flex-start",
    },

    serviceIcon: {
        width: 48,
        height: 48,
        borderRadius: 13,
        backgroundColor: "#F5B82E15",
        alignItems: "center",
        justifyContent: "center",
    },

    bookingInfo: {
        flex: 1,
        marginLeft: 11,
    },

    bookingTitle: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
    },

    customer: {
        color: COLORS.textSecondary,
        fontSize: 12,
        marginTop: 3,
    },

    bookingTime: {
        color: COLORS.textSecondary,
        fontSize: 11,
        marginTop: 5,
    },

    bookingPrice: {
        color: COLORS.green,
        fontSize: 14,
        fontWeight: "800",
    },

    bookingDistance: {
        color: COLORS.textSecondary,
        fontSize: 14,
        fontWeight: "800",
    },

    bookingActions: {
        flexDirection: "row",
        gap: 10,
        marginTop: 15,
    },

    declineButton: {
        flex: 1,
        height: 42,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    declineText: {
        color: COLORS.textSecondary,
        fontSize: 13,
        fontWeight: "600",
    },

    acceptButton: {
        flex: 1,
        height: 42,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },

    acceptText: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: "700",
    },


    /* SCHEDULE */

    scheduleCard: {
        backgroundColor: COLORS.card,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 9,
    },

    timeContainer: {
        width: 55,
    },

    time: {
        color: COLORS.gold,
        fontSize: 11,
        fontWeight: "700",
    },

    scheduleLine: {
        width: 1,
        height: 40,
        backgroundColor: COLORS.border,
        marginRight: 10,
    },

    scheduleIcon: {
        width: 40,
        height: 40,
        borderRadius: 11,
        backgroundColor: "#F5B82E15",
        alignItems: "center",
        justifyContent: "center",
    },

    scheduleInfo: {
        flex: 1,
        marginLeft: 10,
    },

    scheduleTitle: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: "700",
    },

    scheduleCustomer: {
        color: COLORS.textSecondary,
        fontSize: 11,
        marginTop: 2,
    },

    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3,
    },

    location: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginLeft: 2,
    },


    /* QUICK ACTIONS */

    quickActions: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginTop: 12,
    },

    quickAction: {
        width: "48%",
        backgroundColor: COLORS.card,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
    },

    quickIcon: {
        width: 38,
        height: 38,
        borderRadius: 11,
        backgroundColor: "#F5B82E15",
        alignItems: "center",
        justifyContent: "center",
    },

    quickLabel: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "600",
        marginLeft: 9,
    },

});

export default DashboardScreen;