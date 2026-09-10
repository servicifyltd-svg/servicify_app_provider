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

const bookings = [
    {
        id: "#BK1025",
        customer: "Rahul Sharma",
        initials: "RS",
        service: "AC Repair",
        date: "Today",
        time: "4:30 PM",
        price: "₹800",
        status: "Pending",
        icon: "air-conditioner",
        color: "#3B82F6",
    },
    {
        id: "#BK1024",
        customer: "Sneha Joshi",
        initials: "SJ",
        service: "Electrical Work",
        date: "Today",
        time: "6:00 PM",
        price: "₹900",
        status: "Confirmed",
        icon: "flash",
        color: "#F5B82E",
    },
    {
        id: "#BK1023",
        customer: "Michael Brown",
        initials: "MB",
        service: "Plumbing",
        date: "Yesterday",
        time: "11:30 AM",
        price: "₹650",
        status: "Completed",
        icon: "pipe",
        color: "#38BDF8",
    },
    {
        id: "#BK1022",
        customer: "Emily Davis",
        initials: "ED",
        service: "Home Cleaning",
        date: "Yesterday",
        time: "10:00 AM",
        price: "₹700",
        status: "Completed",
        icon: "broom",
        color: "#A855F7",
    },
    {
        id: "#BK1021",
        customer: "Amit Patil",
        initials: "AP",
        service: "Washing Machine Repair",
        date: "Aug 8",
        time: "2:00 PM",
        price: "₹550",
        status: "Cancelled",
        icon: "washing-machine",
        color: "#EF4444",
    },
    {
        id: "#BK1020",
        customer: "Priya Shah",
        initials: "PS",
        service: "AC Service",
        date: "Aug 7",
        time: "12:00 PM",
        price: "₹600",
        status: "Completed",
        icon: "air-conditioner",
        color: "#3B82F6",
    },
];

const filters = [
    "All",
    "Pending",
    "Confirmed",
    "Completed",
    "Cancelled",
];

const BookingsHistoryScreen = ({ navigation }) => {
    const [activeFilter, setActiveFilter] =
        useState("All");

    const filteredBookings =
        activeFilter === "All"
            ? bookings
            : bookings.filter(
                (booking) =>
                    booking.status === activeFilter
            );

    const openBooking = (booking) => {
        navigation.navigate("BookingDetails", {
            booking,
        });
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
                        style={styles.backButton}
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

                    <View style={styles.headerInfo}>

                        <Text style={styles.title}>
                            My Bookings
                        </Text>

                        <Text style={styles.subtitle}>
                            Manage all your bookings
                        </Text>

                    </View>

                    <View style={styles.totalBadge}>

                        <Text style={styles.totalNumber}>
                            {bookings.length}
                        </Text>

                        <Text style={styles.totalLabel}>
                            Total
                        </Text>

                    </View>

                </View>


                {/* FILTERS */}

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterContainer}
                >

                    {filters.map((filter) => {

                        const active =
                            activeFilter === filter;

                        const count =
                            filter === "All"
                                ? bookings.length
                                : bookings.filter(
                                    (booking) =>
                                        booking.status === filter
                                ).length;

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

                                <View
                                    style={[
                                        styles.filterCount,
                                        active &&
                                        styles.filterCountActive,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.filterCountText,
                                            active &&
                                            styles.filterCountTextActive,
                                        ]}
                                    >
                                        {count}
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        );
                    })}

                </ScrollView>


                {/* RESULTS */}

                <View style={styles.resultsHeader}>

                    <Text style={styles.resultsText}>
                        {filteredBookings.length}{" "}
                        {filteredBookings.length === 1
                            ? "booking"
                            : "bookings"}
                    </Text>

                    <TouchableOpacity>

                        <MaterialCommunityIcons
                            name="filter-variant"
                            size={19}
                            color={COLORS.textSecondary}
                        />

                    </TouchableOpacity>

                </View>


                {/* BOOKINGS */}

                {filteredBookings.map((booking) => (

                    <BookingCard
                        key={booking.id}
                        booking={booking}
                        onPress={() =>
                            openBooking(booking)
                        }
                    />

                ))}


                {/* EMPTY */}

                {filteredBookings.length === 0 && (

                    <View style={styles.empty}>

                        <View style={styles.emptyIcon}>

                            <MaterialCommunityIcons
                                name="calendar-remove-outline"
                                size={38}
                                color={COLORS.textSecondary}
                            />

                        </View>

                        <Text style={styles.emptyTitle}>
                            No bookings found
                        </Text>

                        <Text style={styles.emptyText}>
                            There are no {activeFilter.toLowerCase()} bookings.
                        </Text>

                    </View>

                )}

            </ScrollView>

        </View>
    );
};


/* BOOKING CARD */

const BookingCard = ({
    booking,
    onPress,
}) => {

    const statusColor =
        booking.status === "Completed"
            ? COLORS.green
            : booking.status === "Cancelled"
                ? COLORS.red
                : booking.status === "Confirmed"
                    ? "#3B82F6"
                    : COLORS.gold;

    return (
        <TouchableOpacity
            style={styles.bookingCard}
            activeOpacity={0.8}
            onPress={onPress}
        >

            {/* TOP */}

            <View style={styles.cardTop}>

                <View
                    style={[
                        styles.serviceIcon,
                        {
                            backgroundColor:
                                booking.color + "20",
                        },
                    ]}
                >

                    <MaterialCommunityIcons
                        name={booking.icon}
                        size={24}
                        color={booking.color}
                    />

                </View>

                <View style={styles.serviceInfo}>

                    <Text style={styles.serviceName}>
                        {booking.service}
                    </Text>

                    <Text style={styles.bookingId}>
                        {booking.id}
                    </Text>

                </View>

                <View
                    style={[
                        styles.statusBadge,
                        {
                            backgroundColor:
                                statusColor + "18",
                        },
                    ]}
                >

                    <View
                        style={[
                            styles.statusDot,
                            {
                                backgroundColor:
                                    statusColor,
                            },
                        ]}
                    />

                    <Text
                        style={[
                            styles.statusText,
                            {
                                color: statusColor,
                            },
                        ]}
                    >
                        {booking.status}
                    </Text>

                </View>

            </View>


            <View style={styles.divider} />


            {/* CUSTOMER */}

            <View style={styles.customerRow}>

                <View style={styles.avatar}>

                    <Text style={styles.avatarText}>
                        {booking.initials}
                    </Text>

                </View>

                <View style={styles.customerInfo}>

                    <Text style={styles.customerName}>
                        {booking.customer}
                    </Text>

                    <Text style={styles.customerLabel}>
                        Customer
                    </Text>

                </View>

            </View>


            {/* DETAILS */}

            <View style={styles.detailsRow}>

                <View style={styles.detail}>

                    <MaterialCommunityIcons
                        name="calendar-outline"
                        size={16}
                        color={COLORS.textSecondary}
                    />

                    <Text style={styles.detailText}>
                        {booking.date}
                    </Text>

                </View>

                <View style={styles.detail}>

                    <MaterialCommunityIcons
                        name="clock-outline"
                        size={16}
                        color={COLORS.textSecondary}
                    />

                    <Text style={styles.detailText}>
                        {booking.time}
                    </Text>

                </View>

                <Text style={styles.price}>
                    {booking.price}
                </Text>

            </View>


            {/* VIEW */}

            <View style={styles.viewDetails}>

                <Text style={styles.viewText}>
                    View Booking Details
                </Text>

                <MaterialCommunityIcons
                    name="chevron-right"
                    size={18}
                    color={COLORS.primaryLight}
                />

            </View>

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
        minHeight: 55,
        flexDirection: "row",
        alignItems: "center",
    },

    backButton: {
        width: 42,
        height: 42,
        borderRadius: 13,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    headerInfo: {
        flex: 1,
        marginLeft: 11,
    },

    title: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "800",
    },

    subtitle: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 3,
    },

    totalBadge: {
        minWidth: 48,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
    },

    totalNumber: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "800",
    },

    totalLabel: {
        color: COLORS.textSecondary,
        fontSize: 7,
        marginTop: 1,
    },


    /* FILTER */

    filterContainer: {
        paddingVertical: 18,
        gap: 8,
    },

    filterButton: {
        height: 38,
        paddingHorizontal: 11,
        borderRadius: 11,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        flexDirection: "row",
        alignItems: "center",
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

    filterCount: {
        minWidth: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: "#FFFFFF08",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 6,
    },

    filterCountActive: {
        backgroundColor: "#FFFFFF20",
    },

    filterCountText: {
        color: COLORS.textSecondary,
        fontSize: 8,
        fontWeight: "700",
    },

    filterCountTextActive: {
        color: COLORS.white,
    },


    /* RESULTS */

    resultsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },

    resultsText: {
        color: COLORS.textSecondary,
        fontSize: 10,
    },


    /* CARD */

    bookingCard: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 14,
        marginBottom: 10,
    },

    cardTop: {
        flexDirection: "row",
        alignItems: "center",
    },

    serviceIcon: {
        width: 48,
        height: 48,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },

    serviceInfo: {
        flex: 1,
        marginLeft: 10,
    },

    serviceName: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: "700",
    },

    bookingId: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginTop: 4,
    },

    statusBadge: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8,
    },

    statusDot: {
        width: 5,
        height: 5,
        borderRadius: 3,
        marginRight: 5,
    },

    statusText: {
        fontSize: 8,
        fontWeight: "700",
    },

    divider: {
        height: 1,
        backgroundColor: "#FFFFFF08",
        marginVertical: 12,
    },


    /* CUSTOMER */

    customerRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 38,
        height: 38,
        borderRadius: 12,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },

    avatarText: {
        color: COLORS.white,
        fontSize: 11,
        fontWeight: "800",
    },

    customerInfo: {
        marginLeft: 9,
    },

    customerName: {
        color: COLORS.white,
        fontSize: 11,
        fontWeight: "600",
    },

    customerLabel: {
        color: COLORS.textSecondary,
        fontSize: 8,
        marginTop: 2,
    },


    /* DETAILS */

    detailsRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 13,
    },

    detail: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 14,
    },

    detailText: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginLeft: 4,
    },

    price: {
        marginLeft: "auto",
        color: COLORS.green,
        fontSize: 14,
        fontWeight: "800",
    },


    /* VIEW */

    viewDetails: {
        borderTopWidth: 1,
        borderTopColor: "#FFFFFF08",
        marginTop: 12,
        paddingTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    viewText: {
        color: COLORS.primaryLight,
        fontSize: 9,
        fontWeight: "700",
        marginRight: 3,
    },


    /* EMPTY */

    empty: {
        alignItems: "center",
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
        fontSize: 15,
        fontWeight: "700",
        marginTop: 14,
    },

    emptyText: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 5,
    },

});

export default BookingsHistoryScreen;