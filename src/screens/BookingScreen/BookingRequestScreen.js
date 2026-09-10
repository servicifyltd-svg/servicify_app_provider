import React from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import COLORS from "../../constants/colors";

const BookingRequestScreen = ({
    navigation,
    route,
}) => {
    const booking = route.params?.booking || {
        id: "#BK1025",
        customer: "Michael Brown",
        initials: "MB",
        service: "AC Repair",
        description:
            "My AC is not cooling properly. Please check the unit and repair it.",
        date: "Today",
        time: "2:00 PM - 3:30 PM",
        address: "Kothrud, Pune, Maharashtra",
        distance: "2.4 km away",
        price: "₹800",
        payment: "Cash",
        phone: "+91 98765 43210",
    };

    const acceptBooking = () => {
        Alert.alert(
            "Accept Booking",
            "Are you sure you want to accept this booking?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Accept",
                    onPress: () => {
                        Alert.alert(
                            "Booking Accepted",
                            "The customer has been notified.",
                            [
                                {
                                    text: "OK",
                                    onPress: () =>
                                        navigation.goBack(),
                                },
                            ]
                        );
                    },
                },
            ]
        );
    };

    const rejectBooking = () => {
        Alert.alert(
            "Reject Booking",
            "Are you sure you want to reject this request?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Reject",
                    style: "destructive",
                    onPress: () => {
                        navigation.goBack();
                    },
                },
            ]
        );
    };

    const contactCustomer = () => {
        Alert.alert(
            "Contact Customer",
            `Customer phone: ${booking.phone}`
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

                    <View style={styles.headerCenter}>

                        <Text style={styles.headerTitle}>
                            Booking Request
                        </Text>

                        <Text style={styles.bookingId}>
                            {booking.id}
                        </Text>

                    </View>

                    <View style={styles.newBadge}>

                        <View style={styles.newDot} />

                        <Text style={styles.newText}>
                            NEW
                        </Text>

                    </View>

                </View>


                {/* ALERT */}

                <View style={styles.alertCard}>

                    <View style={styles.alertIcon}>

                        <MaterialCommunityIcons
                            name="bell-ring-outline"
                            size={22}
                            color={COLORS.gold}
                        />

                    </View>

                    <View style={styles.alertInfo}>

                        <Text style={styles.alertTitle}>
                            New service request
                        </Text>

                        <Text style={styles.alertText}>
                            A customer nearby needs your service.
                        </Text>

                    </View>

                </View>


                {/* CUSTOMER */}

                <Text style={styles.sectionTitle}>
                    Customer
                </Text>

                <View style={styles.card}>

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

                            <View style={styles.ratingRow}>

                                <MaterialCommunityIcons
                                    name="star"
                                    size={14}
                                    color={COLORS.gold}
                                />

                                <Text style={styles.rating}>
                                    4.7
                                </Text>

                                <Text style={styles.reviews}>
                                    Customer
                                </Text>

                            </View>

                        </View>

                        <TouchableOpacity
                            style={styles.callButton}
                            onPress={contactCustomer}
                        >

                            <MaterialCommunityIcons
                                name="phone-outline"
                                size={20}
                                color={COLORS.green}
                            />

                        </TouchableOpacity>

                    </View>

                </View>


                {/* SERVICE */}

                <Text style={styles.sectionTitle}>
                    Service Details
                </Text>

                <View style={styles.card}>

                    <View style={styles.serviceRow}>

                        <View style={styles.serviceIcon}>

                            <MaterialCommunityIcons
                                name="air-conditioner"
                                size={27}
                                color="#3B82F6"
                            />

                        </View>

                        <View style={styles.serviceInfo}>

                            <Text style={styles.serviceName}>
                                {booking.service}
                            </Text>

                            <Text style={styles.serviceDescription}>
                                {booking.description}
                            </Text>

                        </View>

                    </View>


                    <View style={styles.divider} />


                    <DetailRow
                        icon="calendar-outline"
                        title="Date"
                        value={booking.date}
                    />

                    <DetailRow
                        icon="clock-outline"
                        title="Time"
                        value={booking.time}
                    />

                    <DetailRow
                        icon="map-marker-outline"
                        title="Distance"
                        value={booking.distance}
                    />

                </View>


                {/* LOCATION */}

                <Text style={styles.sectionTitle}>
                    Service Location
                </Text>

                <View style={styles.locationCard}>

                    <View style={styles.mapPlaceholder}>

                        <MaterialCommunityIcons
                            name="map-marker"
                            size={38}
                            color={COLORS.primaryLight}
                        />

                        <Text style={styles.mapText}>
                            Service Location
                        </Text>

                    </View>

                    <View style={styles.addressRow}>

                        <MaterialCommunityIcons
                            name="map-marker-outline"
                            size={21}
                            color={COLORS.primaryLight}
                        />

                        <Text style={styles.address}>
                            {booking.address}
                        </Text>

                    </View>

                    <TouchableOpacity
                        style={styles.mapButton}
                        onPress={() =>
                            Alert.alert(
                                "Maps",
                                "Maps integration will be connected later."
                            )
                        }
                    >

                        <MaterialCommunityIcons
                            name="navigation-variant-outline"
                            size={17}
                            color={COLORS.white}
                        />

                        <Text style={styles.mapButtonText}>
                            Open Maps
                        </Text>

                    </TouchableOpacity>

                </View>


                {/* PAYMENT */}

                <Text style={styles.sectionTitle}>
                    Payment
                </Text>

                <View style={styles.paymentCard}>

                    <View>

                        <Text style={styles.paymentLabel}>
                            Expected Earnings
                        </Text>

                        <Text style={styles.amount}>
                            {booking.price}
                        </Text>

                    </View>

                    <View style={styles.paymentMethod}>

                        <MaterialCommunityIcons
                            name={
                                booking.payment === "Cash"
                                    ? "cash"
                                    : "credit-card-outline"
                            }
                            size={19}
                            color={COLORS.green}
                        />

                        <Text style={styles.paymentText}>
                            {booking.payment}
                        </Text>

                    </View>

                </View>


                {/* ACTIONS */}

                <View style={styles.actionContainer}>

                    <TouchableOpacity
                        style={styles.rejectButton}
                        onPress={rejectBooking}
                    >

                        <MaterialCommunityIcons
                            name="close"
                            size={20}
                            color={COLORS.red}
                        />

                        <Text style={styles.rejectText}>
                            Reject
                        </Text>

                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.acceptButton}
                        onPress={acceptBooking}
                    >

                        <LinearGradient
                            colors={[
                                COLORS.primary,
                                "#8B5CF6",
                            ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.acceptGradient}
                        >

                            <MaterialCommunityIcons
                                name="check"
                                size={20}
                                color={COLORS.white}
                            />

                            <Text style={styles.acceptText}>
                                Accept Booking
                            </Text>

                        </LinearGradient>

                    </TouchableOpacity>

                </View>

            </ScrollView>

        </View>
    );
};


/* DETAIL ROW */

const DetailRow = ({
    icon,
    title,
    value,
}) => {

    return (
        <View style={styles.detailRow}>

            <View style={styles.detailIcon}>

                <MaterialCommunityIcons
                    name={icon}
                    size={18}
                    color={COLORS.textSecondary}
                />

            </View>

            <Text style={styles.detailTitle}>
                {title}
            </Text>

            <Text style={styles.detailValue}>
                {value}
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
        paddingBottom: 35,
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

    headerCenter: {
        alignItems: "center",
    },

    headerTitle: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
    },

    bookingId: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginTop: 2,
    },

    newBadge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5B82E15",
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8,
    },

    newDot: {
        width: 5,
        height: 5,
        borderRadius: 3,
        backgroundColor: COLORS.gold,
        marginRight: 4,
    },

    newText: {
        color: COLORS.gold,
        fontSize: 8,
        fontWeight: "800",
    },


    /* ALERT */

    alertCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F5B82E10",
        borderWidth: 1,
        borderColor: "#F5B82E30",
        borderRadius: 14,
        padding: 13,
        marginTop: 14,
    },

    alertIcon: {
        width: 43,
        height: 43,
        borderRadius: 12,
        backgroundColor: "#F5B82E18",
        alignItems: "center",
        justifyContent: "center",
    },

    alertInfo: {
        flex: 1,
        marginLeft: 10,
    },

    alertTitle: {
        color: COLORS.gold,
        fontSize: 12,
        fontWeight: "700",
    },

    alertText: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginTop: 3,
    },


    /* SECTION */

    sectionTitle: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "700",
        marginTop: 23,
        marginBottom: 10,
    },


    /* CARD */

    card: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 15,
    },


    /* CUSTOMER */

    customerRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 55,
        height: 55,
        borderRadius: 18,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },

    avatarText: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "800",
    },

    customerInfo: {
        flex: 1,
        marginLeft: 11,
    },

    customerName: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
    },

    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },

    rating: {
        color: COLORS.gold,
        fontSize: 10,
        fontWeight: "700",
        marginLeft: 3,
    },

    reviews: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginLeft: 6,
    },

    callButton: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: "#39D98A15",
        alignItems: "center",
        justifyContent: "center",
    },


    /* SERVICE */

    serviceRow: {
        flexDirection: "row",
    },

    serviceIcon: {
        width: 55,
        height: 55,
        borderRadius: 16,
        backgroundColor: "#3B82F615",
        alignItems: "center",
        justifyContent: "center",
    },

    serviceInfo: {
        flex: 1,
        marginLeft: 11,
    },

    serviceName: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
    },

    serviceDescription: {
        color: COLORS.textSecondary,
        fontSize: 10,
        lineHeight: 15,
        marginTop: 5,
    },

    divider: {
        height: 1,
        backgroundColor: "#FFFFFF08",
        marginVertical: 13,
    },


    /* DETAIL */

    detailRow: {
        flexDirection: "row",
        alignItems: "center",
        minHeight: 39,
    },

    detailIcon: {
        width: 32,
        alignItems: "center",
    },

    detailTitle: {
        color: COLORS.textSecondary,
        fontSize: 10,
        width: 70,
    },

    detailValue: {
        flex: 1,
        color: COLORS.white,
        fontSize: 11,
        fontWeight: "600",
        textAlign: "right",
    },


    /* LOCATION */

    locationCard: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        overflow: "hidden",
    },

    mapPlaceholder: {
        height: 130,
        backgroundColor: "#10192B",
        alignItems: "center",
        justifyContent: "center",
    },

    mapText: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 4,
    },

    addressRow: {
        flexDirection: "row",
        alignItems: "center",
        padding: 14,
        paddingBottom: 8,
    },

    address: {
        flex: 1,
        color: COLORS.white,
        fontSize: 11,
        lineHeight: 17,
        marginLeft: 8,
    },

    mapButton: {
        height: 40,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 14,
        marginBottom: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    mapButtonText: {
        color: COLORS.white,
        fontSize: 11,
        fontWeight: "700",
        marginLeft: 6,
    },


    /* PAYMENT */

    paymentCard: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    paymentLabel: {
        color: COLORS.textSecondary,
        fontSize: 9,
    },

    amount: {
        color: COLORS.green,
        fontSize: 22,
        fontWeight: "800",
        marginTop: 4,
    },

    paymentMethod: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#39D98A15",
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 9,
    },

    paymentText: {
        color: COLORS.green,
        fontSize: 9,
        fontWeight: "700",
        marginLeft: 5,
    },


    /* ACTIONS */

    actionContainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 25,
    },

    rejectButton: {
        width: "32%",
        height: 54,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#FF4D4D45",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    rejectText: {
        color: COLORS.red,
        fontSize: 11,
        fontWeight: "700",
        marginLeft: 5,
    },

    acceptButton: {
        flex: 1,
        borderRadius: 13,
        overflow: "hidden",
    },

    acceptGradient: {
        height: 54,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    acceptText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "700",
        marginLeft: 6,
    },

});

export default BookingRequestScreen;