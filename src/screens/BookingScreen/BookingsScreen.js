import React, { useMemo, useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../constants/colors";

const bookingsData = [
    {
        id: "C" + Math.floor(Math.random() * 1000000).toString(),
        service: "Home Cleaning",
        customer: {
            name: "John Doe",
            phone: "+91 98765 43210",
            rating: 4.5,
            reviews: 120,
        },
        date: "May 20, 2024",
        time: "10:00 AM",
        price: "₹60.00",
        status: "In Progress",
        icon: "broom",
        iconColor: "#A855F7",
    },
    {
        id: "C" + Math.floor(Math.random() * 1000000).toString(),
        service: "AC Repair",
        customer: {
            name: "Michael Brown",
            phone: "+91 98765 43210",
            rating: 4.0,
            reviews: 80,
        },
        date: "May 21, 2024",
        time: "2:00 PM",
        price: "₹80.00",
        status: "Upcoming",
        icon: "air-conditioner",
        iconColor: "#3B82F6",
    },
    {
        id: "C" + Math.floor(Math.random() * 1000000).toString(),
        service: "Plumbing Service",
        customer: {
            name: "David Wilson",
            phone: "+91 98765 43210",
            rating: 4.2,
            reviews: 95,
        },
        date: "May 22, 2024",
        time: "11:00 AM",
        price: "₹70.00",
        status: "Pending",
        icon: "pipe",
        iconColor: "#38BDF8",
    },
    {
        id: "C" + Math.floor(Math.random() * 1000000).toString(),
        service: "Electrical Work",
        customer: {
            name: "Emily Davis",
            phone: "+91 98765 43210",
            rating: 4.1,
            reviews: 85,
        },
        date: "May 18, 2024",
        time: "4:00 PM",
        price: "₹90.00",
        status: "Completed",
        icon: "flash",
        iconColor: "#F5B82E",
    },
    {
        id: "C" + Math.floor(Math.random() * 1000000).toString(),
        service: "Painting",
        customer: {
            name: "Sophia Johnson",
            phone: "+91 98765 43210",
            rating: 4.3,
            reviews: 90,
        },
        date: "May 17, 2024",
        time: "1:00 PM",
        price: "₹100.00",
        status: "Completed",
        icon: "format-paint",
        iconColor: "#F97316",
    },
];

const filters = [
    "All",
    "New",
    "Upcoming",
    "In Progress",
    "Completed",
];

const BookingsScreen = ({ navigation }) => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filteredBookings = useMemo(() => {
        let data = bookingsData;

        if (activeFilter !== "All") {
            data = data.filter(
                (booking) => booking.status === activeFilter
            );
        }

        if (search.trim()) {
            const query = search.toLowerCase();

            data = data.filter(
                (booking) =>
                    booking.service
                        .toLowerCase()
                        .includes(query) ||
                    booking.customer
                        .toLowerCase()
                        .includes(query)
            );
        }

        return data;
    }, [activeFilter, search]);

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

                        <Text style={styles.title}>
                            Bookings
                        </Text>

                        <Text style={styles.subtitle}>
                            Manage your customer bookings
                        </Text>

                    </View>

                    <TouchableOpacity
                        style={styles.notificationButton}
                    >
                        <MaterialCommunityIcons
                            name="bell-outline"
                            size={22}
                            color={COLORS.white}
                        />

                        <View style={styles.notificationDot} />
                    </TouchableOpacity>

                </View>


                {/* FILTER TABS */}

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterContainer}
                >

                    {filters.map((filter) => {

                        const active =
                            activeFilter === filter;

                        return (
                            <TouchableOpacity
                                key={filter}
                                onPress={() =>
                                    setActiveFilter(filter)
                                }
                                style={[
                                    styles.filterButton,
                                    active &&
                                    styles.filterButtonActive,
                                ]}
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


                {/* SEARCH */}

                <View style={styles.searchRow}>

                    <View style={styles.searchContainer}>

                        <MaterialCommunityIcons
                            name="magnify"
                            size={22}
                            color={COLORS.textSecondary}
                        />

                        <TextInput
                            value={search}
                            onChangeText={setSearch}
                            placeholder="Search bookings..."
                            placeholderTextColor="#697386"
                            style={styles.searchInput}
                        />

                        {search.length > 0 && (
                            <TouchableOpacity
                                onPress={() => setSearch("")}
                            >
                                <MaterialCommunityIcons
                                    name="close-circle"
                                    size={19}
                                    color={COLORS.textSecondary}
                                />
                            </TouchableOpacity>
                        )}

                    </View>


                    <TouchableOpacity
                        style={styles.filterIconButton}
                    >

                        <MaterialCommunityIcons
                            name="tune-variant"
                            size={21}
                            color={COLORS.white}
                        />

                    </TouchableOpacity>

                </View>


                {/* RESULT COUNT */}

                <View style={styles.resultHeader}>

                    <Text style={styles.resultText}>
                        {filteredBookings.length}{" "}
                        {filteredBookings.length === 1
                            ? "Booking"
                            : "Bookings"}
                    </Text>

                    <Text style={styles.dateText}>
                        May 2024
                    </Text>

                </View>


                {/* BOOKINGS */}

                {filteredBookings.length > 0 ? (

                    filteredBookings.map((booking) => (
                        <BookingCard
                            key={booking.id}
                            booking={booking}
                            navigation={navigation}
                        />
                    ))

                ) : (

                    <EmptyState />

                )}

            </ScrollView>

        </View>
    );
};


/* BOOKING CARD */

const BookingCard = ({ booking, navigation }) => {

    const statusStyle =
        getStatusStyle(booking.status);

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            style={styles.bookingCard}
            onPress={() =>
                navigation.navigate("BookingDetails", {
                    booking: booking,
                })
            }
        >

            {/* TOP */}
            <View style={styles.bookingTop}>
                <View
                    style={[
                        styles.serviceIcon,
                        {
                            backgroundColor:
                                booking.iconColor + "20",
                        },
                    ]}
                >
                    <MaterialCommunityIcons
                        name={booking.icon}
                        size={24}
                        color={booking.iconColor}
                    />
                </View>
                <View style={styles.bookingInfo}>
                    <Text style={styles.serviceName}>
                        {booking.service}
                    </Text>
                    <View style={styles.customerRow}>
                        <View style={styles.customerAvatar}>
                            <MaterialCommunityIcons
                                name="account"
                                size={14}
                                color={COLORS.textSecondary}
                            />
                        </View>
                        <Text style={styles.customerName}>
                            {booking.customer.name}
                        </Text>
                    </View>
                </View>
                <Text style={styles.price}>
                    {booking.price}
                </Text>
            </View>

            {/* DETAILS */}
            <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                    <MaterialCommunityIcons
                        name="calendar-outline"
                        size={16}
                        color={COLORS.textSecondary}
                    />
                    <Text style={styles.detailText}>
                        {booking.date}
                    </Text>
                </View>
                <View style={styles.detailItem}>
                    <MaterialCommunityIcons
                        name="clock-outline"
                        size={16}
                        color={COLORS.textSecondary}
                    />
                    <Text style={styles.detailText}>
                        {booking.time}
                    </Text>
                </View>
            </View>

            {/* BOTTOM */}
            <View style={styles.cardBottom}>
                <View
                    style={[
                        styles.statusBadge,
                        {
                            backgroundColor:
                                statusStyle.background,
                        },
                    ]}
                >
                    <View
                        style={[
                            styles.statusDot,
                            {
                                backgroundColor:
                                    statusStyle.color,
                            },
                        ]}
                    />
                    <Text
                        style={[
                            styles.statusText,
                            {
                                color: statusStyle.color,
                            },
                        ]}
                    >
                        {booking.status}
                    </Text>
                </View>
                <MaterialCommunityIcons
                    name="chevron-right"
                    size={21}
                    color={COLORS.textSecondary}
                />
            </View>
        </TouchableOpacity>
    );
};


/* STATUS STYLE */

const getStatusStyle = (status) => {

    switch (status) {

        case "Completed":
            return {
                color: COLORS.green,
                background: "#39D98A15",
            };

        case "In Progress":
            return {
                color: "#A855F7",
                background: "#A855F715",
            };

        case "Upcoming":
            return {
                color: COLORS.orange,
                background: "#FFB02015",
            };

        case "Pending":
            return {
                color: COLORS.blue,
                background: "#3B82F615",
            };

        default:
            return {
                color: COLORS.textSecondary,
                background: "#FFFFFF10",
            };
    }
};


/* EMPTY STATE */

const EmptyState = () => {

    return (
        <View style={styles.emptyContainer}>

            <View style={styles.emptyIcon}>

                <MaterialCommunityIcons
                    name="calendar-remove-outline"
                    size={40}
                    color={COLORS.textSecondary}
                />

            </View>

            <Text style={styles.emptyTitle}>
                No bookings found
            </Text>

            <Text style={styles.emptyText}>
                Try changing your filter or search.
            </Text>

        </View>
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

        paddingBottom: 100,
    },


    /* HEADER */

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        color: COLORS.white,
        fontSize: 25,
        fontWeight: "800",
    },

    subtitle: {
        color: COLORS.textSecondary,
        fontSize: 12,
        marginTop: 4,
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


    /* FILTER */

    filterContainer: {
        paddingVertical: 20,
        gap: 8,
    },

    filterButton: {
        height: 38,

        paddingHorizontal: 17,

        borderRadius: 11,

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
        fontSize: 12,
        fontWeight: "600",
    },

    filterTextActive: {
        color: COLORS.white,
    },


    /* SEARCH */

    searchRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    searchContainer: {
        flex: 1,

        height: 48,

        borderRadius: 12,

        backgroundColor: COLORS.card,

        borderWidth: 1,
        borderColor: COLORS.border,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 13,
    },

    searchInput: {
        flex: 1,

        color: COLORS.white,

        fontSize: 13,

        marginLeft: 8,

        paddingVertical: 0,
    },

    filterIconButton: {
        width: 48,
        height: 48,

        borderRadius: 12,

        backgroundColor: COLORS.card,

        borderWidth: 1,
        borderColor: COLORS.border,

        alignItems: "center",
        justifyContent: "center",
    },


    /* RESULT */

    resultHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        marginTop: 23,
        marginBottom: 11,
    },

    resultText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
    },

    dateText: {
        color: COLORS.textSecondary,
        fontSize: 11,
    },


    /* BOOKING CARD */

    bookingCard: {
        backgroundColor: COLORS.card,

        borderWidth: 1,
        borderColor: COLORS.border,

        borderRadius: 16,

        padding: 15,

        marginBottom: 11,
    },

    bookingTop: {
        flexDirection: "row",
        alignItems: "flex-start",
    },

    serviceIcon: {
        width: 48,
        height: 48,

        borderRadius: 13,

        alignItems: "center",
        justifyContent: "center",
    },

    bookingInfo: {
        flex: 1,
        marginLeft: 11,
    },

    serviceName: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
    },

    customerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
    },

    customerAvatar: {
        width: 21,
        height: 21,

        borderRadius: 11,

        backgroundColor: "#FFFFFF10",

        alignItems: "center",
        justifyContent: "center",
    },

    customerName: {
        color: COLORS.textSecondary,
        fontSize: 11,
        marginLeft: 6,
    },

    price: {
        color: "#66BB6A",
        fontSize: 15,
        fontWeight: "800",
    },


    /* DETAILS */

    detailsContainer: {
        flexDirection: "row",

        alignItems: "center",

        marginTop: 15,

        paddingTop: 13,

        borderTopWidth: 1,
        borderTopColor: "#FFFFFF08",
    },

    detailItem: {
        flexDirection: "row",
        alignItems: "center",

        marginRight: 20,
    },

    detailText: {
        color: COLORS.textSecondary,
        fontSize: 11,
        marginLeft: 5,
    },


    /* BOTTOM */

    cardBottom: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginTop: 13,
    },

    statusBadge: {
        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 9,
        paddingVertical: 6,

        borderRadius: 8,
    },

    statusDot: {
        width: 6,
        height: 6,

        borderRadius: 3,

        marginRight: 6,
    },

    statusText: {
        fontSize: 10,
        fontWeight: "700",
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
        fontSize: 12,
        marginTop: 5,
    },

});

export default BookingsScreen;