import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Alert,
    Linking,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BookingDetailsScreen = ({ route, navigation }) => {

    const { booking } = route.params;

    // --------------------------------
    // Data
    // --------------------------------

    const servicePrice = Number(
        booking.price.replace(/[^\d.]/g, "")
    );

    const platformFee = 5;

    const providerEarning =
        servicePrice - platformFee;


    // --------------------------------
    // Call Customer
    // --------------------------------

    const handleCall = () => {

        const phoneNumber =
            booking.customer.phone.replace(/\s/g, "");

        Linking.openURL(`tel:${phoneNumber}`);
    };


    // --------------------------------
    // Message Customer
    // --------------------------------

    const handleMessage = () => {

        Alert.alert(
            "Message Customer",
            `Message ${booking.customer.name}`
        );
    };


    // --------------------------------
    // View Map
    // --------------------------------

    const handleViewMap = () => {

        Alert.alert(
            "Service Location",
            "Opening customer location..."
        );
    };


    // --------------------------------
    // Complete Job
    // --------------------------------

    const handleCompleteJob = () => {

        Alert.alert(
            "Complete Job",
            "Are you sure you want to mark this booking as completed?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Complete",
                    onPress: () => {

                        console.log(
                            "Completed booking:",
                            booking.id
                        );

                        Alert.alert(
                            "Job Completed",
                            "The booking has been marked as completed."
                        );
                    },
                },
            ]
        );
    };


    // --------------------------------
    // Cancel Booking
    // --------------------------------

    const handleCancelBooking = () => {

        Alert.alert(
            "Cancel Booking",
            "Are you sure you want to cancel this booking?",
            [
                {
                    text: "No",
                    style: "cancel",
                },
                {
                    text: "Yes, Cancel",
                    style: "destructive",
                    onPress: () => {

                        console.log(
                            "Cancelled booking:",
                            booking.id
                        );

                    },
                },
            ]
        );
    };


    return (

        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#020814"
            />

            {/* =====================================
                HEADER
            ====================================== */}

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.headerButton}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.8}
                >
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={20}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    Booking Details
                </Text>
                <TouchableOpacity
                    style={styles.headerButton}
                    activeOpacity={0.8}
                >
                    <MaterialCommunityIcons
                        name="dots-vertical"
                        size={30}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
            </View>

            {/* =====================================
                SCROLL CONTENT
            ====================================== */}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={
                    styles.scrollContent
                }
            >
                {/* =================================
                    STATUS
                ================================== */}

                <View style={styles.statusSection}>

                    <View style={styles.statusIconBox}>

                        <MaterialCommunityIcons
                            name="calendar-check-outline"
                            size={58}
                            color="#A855F7"
                        />
                    </View>
                    <Text style={styles.statusText}>
                        {booking.status}
                    </Text>
                    <Text style={styles.bookingId}>
                        Booking ID #{booking.id}
                    </Text>
                </View>

                {/* SERVICE */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>
                        SERVICE
                    </Text>
                    <View style={styles.serviceRow}>
                        <View
                            style={[
                                styles.serviceIconBox,
                                {
                                    backgroundColor:
                                        "#271747",
                                },
                            ]}
                        >
                            <MaterialCommunityIcons
                                name={booking.icon || "broom"}
                                size={34}
                                color={
                                    booking.iconColor ||
                                    "#A855F7"
                                }
                            />
                        </View>
                        <View
                            style={styles.serviceInfo}
                        >
                            <Text style={styles.serviceName}>
                                {booking.service}
                            </Text>
                            <Text
                                style={
                                    styles.serviceDescription
                                }
                            >
                                General home cleaning service
                            </Text>
                        </View>
                        <Text style={styles.servicePrice}>
                            ₹{servicePrice.toFixed(2)}
                        </Text>
                    </View>
                </View>

                {/* CUSTOMER */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>
                        CUSTOMER
                    </Text>
                    <View style={styles.customerRow}>
                        {/* Avatar */}
                        <View style={styles.avatar}>
                            <MaterialCommunityIcons
                                name="account"
                                size={34}
                                color="#ffffff"
                            />
                        </View>
                        {/* Customer Info */}
                        <View style={styles.customerInfo}>
                            <Text style={styles.customerName}>
                                {booking.customer.name}
                            </Text>
                            <View
                                style={
                                    styles.phoneRow
                                }
                            >
                                <MaterialCommunityIcons
                                    name="phone-outline"
                                    size={18}
                                    color="#A855F7"
                                />
                                <Text
                                    style={
                                        styles.phoneText
                                    }
                                >
                                    {booking.customer.phone}
                                </Text>
                            </View>
                            <View
                                style={
                                    styles.ratingRow
                                }
                            >
                                <Text
                                    style={
                                        styles.star
                                    }
                                >
                                    ★
                                </Text>
                                <Text
                                    style={
                                        styles.ratingText
                                    }
                                >
                                    {booking.customer.rating}
                                </Text>
                                <View
                                    style={
                                        styles.ratingDivider
                                    }
                                />
                                <Text
                                    style={
                                        styles.ratingText
                                    }
                                >
                                    {booking.customer.reviews}
                                    {" Reviews"}
                                </Text>
                            </View>
                        </View>
                        {/* Call */}
                        <TouchableOpacity
                            style={styles.callButton}
                            onPress={handleCall}
                            activeOpacity={0.8}
                        >
                            <MaterialCommunityIcons
                                name="phone"
                                size={20}
                                color="#36D98B"
                            />
                        </TouchableOpacity>


                        {/* Message */}
                        <TouchableOpacity
                            style={
                                styles.messageButton
                            }
                            onPress={handleMessage}
                            activeOpacity={0.8}
                        >
                            <MaterialCommunityIcons
                                name="message-text-outline"
                                size={20}
                                color="#A855F7"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* DATE & TIME */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>
                        DATE & TIME
                    </Text>
                    <View style={styles.dateTimeRow}>

                        {/* DATE */}
                        <View
                            style={
                                styles.dateTimeItem
                            }
                        >
                            <View
                                style={
                                    styles.dateTimeIcon
                                }
                            >
                                <MaterialCommunityIcons
                                    name="calendar"
                                    size={24}
                                    color="#A855F7"
                                />
                            </View>
                            <View>
                                <Text
                                    style={
                                        styles.smallLabel
                                    }
                                >
                                    Date
                                </Text>

                                <Text
                                    style={
                                        styles.dateValue
                                    }
                                >
                                    {booking.date}
                                </Text>
                            </View>
                        </View>
                        {/* VERTICAL LINE */}
                        <View
                            style={
                                styles.verticalDivider
                            }
                        />
                        {/* TIME */}
                        <View
                            style={
                                styles.dateTimeItem
                            }
                        >
                            <View
                                style={
                                    styles.dateTimeIcon
                                }
                            >
                                <MaterialCommunityIcons
                                    name="clock-outline"
                                    size={26}
                                    color="#A855F7"
                                />
                            </View>
                            <View>
                                <Text
                                    style={
                                        styles.smallLabel
                                    }
                                >
                                    Time
                                </Text>
                                <Text
                                    style={
                                        styles.dateValue
                                    }
                                >
                                    {booking.time}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* SERVICE LOCATION */}

                <View style={styles.card}>
                    <View
                        style={
                            styles.locationHeader
                        }
                    >
                        <Text style={styles.sectionTitle}>
                            SERVICE LOCATION
                        </Text>
                        <TouchableOpacity
                            onPress={handleViewMap}
                        >
                            <View
                                style={
                                    styles.mapButton
                                }
                            >
                                <Text
                                    style={
                                        styles.mapText
                                    }
                                >
                                    View Map
                                </Text>
                                <MaterialCommunityIcons
                                    name="chevron-right"
                                    size={28}
                                    color="#A855F7"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={
                            styles.locationContent
                        }
                    >
                        <View
                            style={
                                styles.locationIcon
                            }
                        >
                            <MaterialCommunityIcons
                                name="map-marker-outline"
                                size={24}
                                color="#A855F7"
                            />
                        </View>
                        <View
                            style={
                                styles.addressContainer
                            }
                        >
                            <Text
                                style={
                                    styles.address
                                }
                            >
                                123, Park Street,
                            </Text>
                            <Text
                                style={
                                    styles.address
                                }
                            >
                                Kothrud, Pune,
                                Maharashtra 411038
                            </Text>
                            <Text
                                style={
                                    styles.distance
                                }
                            >
                                2.4 km away from you
                            </Text>
                        </View>
                    </View>
                </View>
                {/* PAYMENT SUMMARY */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>
                        PAYMENT SUMMARY
                    </Text>
                    {/* Service Price */}
                    <View
                        style={
                            styles.paymentRow
                        }
                    >
                        <Text
                            style={
                                styles.paymentLabel
                            }
                        >
                            Service Price
                        </Text>
                        <Text
                            style={
                                styles.paymentValue
                            }
                        >
                            ₹{servicePrice.toFixed(2)}
                        </Text>
                    </View>
                    {/* Platform Fee */}
                    <View
                        style={
                            styles.paymentRow
                        }
                    >
                        <Text
                            style={
                                styles.paymentLabel
                            }
                        >
                            Platform Fee
                        </Text>
                        <Text
                            style={
                                styles.paymentValue
                            }
                        >
                            ₹{platformFee.toFixed(2)}
                        </Text>
                    </View>


                    <View
                        style={
                            styles.paymentDivider
                        }
                    />
                    {/* Provider Earning */}
                    <View
                        style={
                            styles.paymentRow
                        }
                    >
                        <Text
                            style={
                                styles.earningLabel
                            }
                        >
                            You Will Earn
                        </Text>
                        <Text
                            style={
                                styles.earningValue
                            }
                        >
                            ₹{providerEarning.toFixed(2)}
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    {/* COMPLETE BUTTON */}
                    <TouchableOpacity
                        style={
                            styles.completeButton
                        }
                        onPress={handleCompleteJob}
                        activeOpacity={0.85}
                    >
                        <Text
                            style={
                                styles.completeButtonText
                            }
                        >
                            Complete Job
                        </Text>
                    </TouchableOpacity>

                    {/* CANCEL BUTTON*/}
                    <TouchableOpacity
                        style={
                            styles.cancelButton
                        }
                        onPress={handleCancelBooking}
                        activeOpacity={0.8}
                    >
                        <Text
                            style={
                                styles.cancelButtonText
                            }
                        >
                            Cancel Booking
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};


export default BookingDetailsScreen;



// =================================================
// STYLES
// =================================================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#020814",
    },

    // ================= HEADER =================

    header: {
        height: 60,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: StatusBar.currentHeight || 0,
    },

    headerButton: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: "#091225",
        borderWidth: 1,
        borderColor: "#263551",
        alignItems: "center",
        justifyContent: "center",
    },

    headerTitle: {
        color: "#FFFFFF",
        fontSize: 21,
        fontWeight: "700",
    },

    // ================= SCROLL =================

    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 30,
    },

    // ================= STATUS =================

    statusSection: {
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 18,
    },

    statusIconBox: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: "#17122D",
        borderWidth: 1.5,
        borderColor: "#55318A",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },

    statusText: {
        color: "#B15CFF",
        fontSize: 21,
        fontWeight: "700",
    },

    bookingId: {
        color: "#ffffff",
        fontSize: 15,
        marginTop: 5,
    },

    // ================= CARD =================

    card: {
        backgroundColor: "#071020",
        borderWidth: 1,
        borderColor: "#263551",
        borderRadius: 18,
        padding: 16,
        marginBottom: 12,
    },

    sectionTitle: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "700",
        marginBottom: 16,
    },

    // ================= SERVICE =================

    serviceRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    serviceIconBox: {
        width: 48,
        height: 48,
        borderRadius: 19,
        alignItems: "center",
        justifyContent: "center",
    },

    serviceInfo: {
        flex: 1,
        marginLeft: 14,
        marginRight: 6,
    },

    serviceName: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
    },

    serviceDescription: {
        color: "#AAB4CC",
        fontSize: 12,
        marginTop: 5,
        lineHeight: 17,
    },

    servicePrice: {
        color: "#52D27E",
        fontSize: 18,
        fontWeight: "700",
    },

    // ================= CUSTOMER =================

    customerRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 48,
        height: 48,
        borderRadius: 19,
        backgroundColor: "#211C3D",
        alignItems: "center",
        justifyContent: "center",
    },

    customerInfo: {
        flex: 1,
        marginLeft: 13,
    },

    customerName: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "700",
        marginBottom: 5,
    },

    phoneRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },

    phoneText: {
        color: "#AAB4CC",
        fontSize: 13,
        marginLeft: 6,
    },

    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    star: {
        color: "#FBBF24",
        fontSize: 17,
        marginRight: 5,
    },

    ratingText: {
        color: "#AAB4CC",
        fontSize: 13,
    },

    ratingDivider: {
        width: 1,
        height: 18,
        backgroundColor: "#6B7280",
        marginHorizontal: 9,
    },

    callButton: {
        width: 38,
        height: 38,
        borderRadius: 14,
        backgroundColor: "#071F20",
        borderWidth: 1,
        borderColor: "#064E3B",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },

    messageButton: {
        width: 38,
        height: 38,
        borderRadius: 14,
        backgroundColor: "#17112E",
        borderWidth: 1,
        borderColor: "#4C1D95",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 7,
    },

    // ================= DATE TIME =================

    dateTimeRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    dateTimeItem: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    dateTimeIcon: {
        width: 48,
        height: 48,
        borderRadius: 15,
        backgroundColor: "#17112E",
        borderWidth: 1,
        borderColor: "#39205C",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 11,
    },

    smallLabel: {
        color: "#AAB4CC",
        fontSize: 12,
        marginBottom: 4,
    },

    dateValue: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "600",
    },

    verticalDivider: {
        width: 1,
        height: 50,
        backgroundColor: "#263551",
        marginHorizontal: 10,
    },

    // ================= LOCATION =================

    locationHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    mapButton: {
        flexDirection: "row",
        alignItems: "center",
    },

    mapText: {
        color: "#B15CFF",
        fontSize: 14,
        fontWeight: "600",
    },

    locationContent: {
        flexDirection: "row",
        alignItems: "flex-start",
    },

    locationIcon: {
        width: 48,
        height: 48,
        borderRadius: 15,
        backgroundColor: "#17112E",
        borderWidth: 1,
        borderColor: "#39205C",
        alignItems: "center",
        justifyContent: "center",
    },

    addressContainer: {
        flex: 1,
        marginLeft: 13,
    },

    address: {
        color: "#FFFFFF",
        fontSize: 12,
        lineHeight: 21,
    },

    distance: {
        color: "#AAB4CC",
        fontSize: 12,
        marginTop: 5,
    },

    // ================= PAYMENT =================

    paymentRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },

    paymentLabel: {
        color: "#AAB4CC",
        fontSize: 14,
    },

    paymentValue: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
    },

    paymentDivider: {
        height: 1,
        backgroundColor: "#263551",
        marginBottom: 15,
    },

    earningLabel: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "600",
    },

    earningValue: {
        color: "#66BB6A",
        fontSize: 16,
        fontWeight: "800",
    },

    // ================= BUTTONS =================


    buttonContainer:{
        flexDirection:"row",
        gap:10,
        justifyContent:"space-evenly"
    },
    completeButton: {
        height: 45,
        width:"40%",
        borderRadius: 17,
        backgroundColor: "#7C3AED",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3,
        marginBottom: 12,
    },

    completeButtonText: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "700",
    },

    cancelButton: {
        height: 45,
        width:"40%",
        borderRadius: 17,
        borderWidth: 1.5,
        borderColor: "#EF3131",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },

    cancelButtonText: {
        color: "#FF4B4B",
        fontSize: 17,
        fontWeight: "700",
    },
});