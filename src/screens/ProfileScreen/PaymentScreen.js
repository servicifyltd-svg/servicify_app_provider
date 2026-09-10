import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";

import COLORS from "../../constants/colors";

const PaymentScreen = ({ navigation }) => {
    const [accountName, setAccountName] =
        useState("Rahul Birajdar");

    const [accountNumber, setAccountNumber] =
        useState("•••• •••• 4521");

    const [ifsc, setIfsc] =
        useState("SBIN0001234");

    const [upi, setUpi] =
        useState("rahul@upi");

    const [editing, setEditing] =
        useState(false);

    const handleSave = () => {
        setEditing(false);

        Alert.alert(
            "Payment Details Updated",
            "Your payment details have been updated successfully."
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
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={23}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>
                        Bank & Payments
                    </Text>

                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() =>
                            setEditing(!editing)
                        }
                    >
                        <MaterialCommunityIcons
                            name={
                                editing
                                    ? "close"
                                    : "pencil-outline"
                            }
                            size={21}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>

                </View>


                {/* BALANCE */}

                <LinearGradient
                    colors={[
                        "#17102F",
                        "#2A164F",
                    ]}
                    style={styles.balanceCard}
                >

                    <View style={styles.balanceIcon}>

                        <MaterialCommunityIcons
                            name="wallet-outline"
                            size={27}
                            color={COLORS.gold}
                        />

                    </View>

                    <Text style={styles.balanceLabel}>
                        Available for Payout
                    </Text>

                    <Text style={styles.balanceAmount}>
                        ₹12,450
                    </Text>

                    <TouchableOpacity
                        style={styles.withdrawButton}
                        onPress={() =>
                            Alert.alert(
                                "Withdraw",
                                "Withdrawal functionality will be connected to the backend."
                            )
                        }
                    >

                        <Text style={styles.withdrawText}>
                            Request Payout
                        </Text>

                        <MaterialCommunityIcons
                            name="arrow-right"
                            size={17}
                            color={COLORS.white}
                        />

                    </TouchableOpacity>

                </LinearGradient>


                {/* BANK ACCOUNT */}

                <View style={styles.sectionHeader}>

                    <Text style={styles.sectionTitle}>
                        Bank Account
                    </Text>

                    <View style={styles.verifiedBadge}>

                        <MaterialCommunityIcons
                            name="check-circle"
                            size={13}
                            color={COLORS.green}
                        />

                        <Text style={styles.verifiedText}>
                            Verified
                        </Text>

                    </View>

                </View>


                <View style={styles.card}>

                    <View style={styles.bankHeader}>

                        <View style={styles.bankIcon}>

                            <MaterialCommunityIcons
                                name="bank"
                                size={25}
                                color={COLORS.primaryLight}
                            />

                        </View>

                        <View style={styles.bankInfo}>

                            <Text style={styles.bankName}>
                                State Bank of India
                            </Text>

                            <Text style={styles.accountType}>
                                Savings Account
                            </Text>

                        </View>

                    </View>


                    <PaymentField
                        label="Account Holder"
                        value={accountName}
                        editing={editing}
                        onChangeText={setAccountName}
                    />

                    <PaymentField
                        label="Account Number"
                        value={accountNumber}
                        editing={editing}
                        onChangeText={setAccountNumber}
                    />

                    <PaymentField
                        label="IFSC Code"
                        value={ifsc}
                        editing={editing}
                        onChangeText={setIfsc}
                    />

                </View>


                {/* UPI */}

                <Text style={styles.sectionTitle}>
                    UPI
                </Text>

                <View style={styles.card}>

                    <View style={styles.upiRow}>

                        <View style={styles.upiIcon}>

                            <MaterialCommunityIcons
                                name="cellphone"
                                size={23}
                                color={COLORS.green}
                            />

                        </View>

                        <View style={styles.upiInfo}>

                            <Text style={styles.upiTitle}>
                                UPI ID
                            </Text>

                            {editing ? (

                                <TextInput
                                    value={upi}
                                    onChangeText={setUpi}
                                    style={styles.upiInput}
                                    placeholderTextColor="#697386"
                                />

                            ) : (

                                <Text style={styles.upiValue}>
                                    {upi}
                                </Text>

                            )}

                        </View>

                        <MaterialCommunityIcons
                            name="check-circle"
                            size={20}
                            color={COLORS.green}
                        />

                    </View>

                </View>


                {/* PAYOUT SETTINGS */}

                <Text style={styles.sectionTitle}>
                    Payout Settings
                </Text>

                <View style={styles.card}>

                    <SettingItem
                        icon="calendar-sync"
                        title="Automatic Payouts"
                        subtitle="Receive your earnings automatically"
                    />

                    <View style={styles.divider} />

                    <SettingItem
                        icon="clock-outline"
                        title="Payout Schedule"
                        subtitle="Every Monday"
                    />

                </View>


                {/* PAYMENT HISTORY */}

                <View style={styles.historyHeader}>

                    <Text style={styles.sectionTitle}>
                        Recent Payouts
                    </Text>

                    <TouchableOpacity>
                        <Text style={styles.viewAll}>
                            View All
                        </Text>
                    </TouchableOpacity>

                </View>


                <Payout
                    date="May 20, 2024"
                    amount="₹4,850"
                    status="Paid"
                />

                <Payout
                    date="May 13, 2024"
                    amount="₹6,200"
                    status="Paid"
                />

                <Payout
                    date="May 06, 2024"
                    amount="₹5,450"
                    status="Paid"
                />


                {/* SAVE */}

                {editing && (

                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={handleSave}
                    >

                        <LinearGradient
                            colors={[
                                COLORS.primary,
                                "#8B5CF6",
                            ]}
                            style={styles.saveGradient}
                        >

                            <MaterialCommunityIcons
                                name="check"
                                size={20}
                                color={COLORS.white}
                            />

                            <Text style={styles.saveText}>
                                Save Payment Details
                            </Text>

                        </LinearGradient>

                    </TouchableOpacity>

                )}

            </ScrollView>

        </View>
    );
};


/* PAYMENT FIELD */

const PaymentField = ({
    label,
    value,
    editing,
    onChangeText,
}) => {

    return (
        <View style={styles.field}>

            <Text style={styles.fieldLabel}>
                {label}
            </Text>

            {editing ? (

                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.fieldInput}
                    secureTextEntry={
                        label === "Account Number"
                    }
                />

            ) : (

                <Text style={styles.fieldValue}>
                    {value}
                </Text>

            )}

        </View>
    );
};


/* SETTING */

const SettingItem = ({
    icon,
    title,
    subtitle,
}) => {

    return (
        <TouchableOpacity
            style={styles.settingItem}
        >

            <View style={styles.settingIcon}>

                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={COLORS.primaryLight}
                />

            </View>

            <View style={styles.settingInfo}>

                <Text style={styles.settingTitle}>
                    {title}
                </Text>

                <Text style={styles.settingSubtitle}>
                    {subtitle}
                </Text>

            </View>

            <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={COLORS.textSecondary}
            />

        </TouchableOpacity>
    );
};


/* PAYOUT */

const Payout = ({
    date,
    amount,
    status,
}) => {

    return (
        <View style={styles.payout}>

            <View style={styles.payoutIcon}>

                <MaterialCommunityIcons
                    name="bank-transfer"
                    size={21}
                    color={COLORS.green}
                />

            </View>

            <View style={styles.payoutInfo}>

                <Text style={styles.payoutTitle}>
                    Bank Transfer
                </Text>

                <Text style={styles.payoutDate}>
                    {date}
                </Text>

            </View>

            <View style={styles.payoutRight}>

                <Text style={styles.payoutAmount}>
                    +{amount}
                </Text>

                <Text style={styles.payoutStatus}>
                    {status}
                </Text>

            </View>

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
        paddingBottom: 40,
    },


    /* HEADER */

    header: {
        height: 50,
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

    headerTitle: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
    },


    /* BALANCE */

    balanceCard: {
        marginTop: 18,
        borderRadius: 18,
        padding: 20,
        borderWidth: 1,
        borderColor: "#3D2B62",
    },

    balanceIcon: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#FFFFFF10",
        alignItems: "center",
        justifyContent: "center",
    },

    balanceLabel: {
        color: COLORS.textSecondary,
        fontSize: 11,
        marginTop: 14,
    },

    balanceAmount: {
        color: COLORS.white,
        fontSize: 29,
        fontWeight: "800",
        marginTop: 4,
    },

    withdrawButton: {
        height: 43,
        borderRadius: 11,
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
    },

    withdrawText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "700",
        marginRight: 7,
    },


    /* SECTION */

    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25,
        marginBottom: 10,
    },

    sectionTitle: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "700",
        marginTop: 23,
        marginBottom: 10,
    },

    verifiedBadge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#39D98A15",
        paddingHorizontal: 9,
        paddingVertical: 5,
        borderRadius: 8,
    },

    verifiedText: {
        color: COLORS.green,
        fontSize: 9,
        fontWeight: "700",
        marginLeft: 4,
    },


    /* CARD */

    card: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 16,
    },


    /* BANK */

    bankHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    bankIcon: {
        width: 50,
        height: 50,
        borderRadius: 14,
        backgroundColor: "#7C3AED20",
        alignItems: "center",
        justifyContent: "center",
    },

    bankInfo: {
        marginLeft: 11,
    },

    bankName: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
    },

    accountType: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 3,
    },


    /* FIELD */

    field: {
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#FFFFFF08",
    },

    fieldLabel: {
        color: COLORS.textSecondary,
        fontSize: 9,
    },

    fieldValue: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "600",
        marginTop: 4,
    },

    fieldInput: {
        color: COLORS.white,
        fontSize: 12,
        backgroundColor: "#0D1529",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginTop: 4,
    },


    /* UPI */

    upiRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    upiIcon: {
        width: 45,
        height: 45,
        borderRadius: 13,
        backgroundColor: "#39D98A15",
        alignItems: "center",
        justifyContent: "center",
    },

    upiInfo: {
        flex: 1,
        marginLeft: 11,
    },

    upiTitle: {
        color: COLORS.textSecondary,
        fontSize: 9,
    },

    upiValue: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: "600",
        marginTop: 3,
    },

    upiInput: {
        color: COLORS.white,
        fontSize: 13,
        paddingVertical: 3,
    },


    /* SETTINGS */

    settingItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
    },

    settingIcon: {
        width: 41,
        height: 41,
        borderRadius: 11,
        backgroundColor: "#7C3AED15",
        alignItems: "center",
        justifyContent: "center",
    },

    settingInfo: {
        flex: 1,
        marginLeft: 11,
    },

    settingTitle: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "600",
    },

    settingSubtitle: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginTop: 3,
    },

    divider: {
        height: 1,
        backgroundColor: "#FFFFFF08",
        marginVertical: 12,
    },


    /* HISTORY */

    historyHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    viewAll: {
        color: COLORS.primaryLight,
        fontSize: 11,
        fontWeight: "600",
        marginTop: 23,
    },

    payout: {
        backgroundColor: COLORS.card,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 9,
    },

    payoutIcon: {
        width: 43,
        height: 43,
        borderRadius: 12,
        backgroundColor: "#39D98A15",
        alignItems: "center",
        justifyContent: "center",
    },

    payoutInfo: {
        flex: 1,
        marginLeft: 10,
    },

    payoutTitle: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "600",
    },

    payoutDate: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginTop: 3,
    },

    payoutRight: {
        alignItems: "flex-end",
    },

    payoutAmount: {
        color: COLORS.green,
        fontSize: 13,
        fontWeight: "800",
    },

    payoutStatus: {
        color: COLORS.textSecondary,
        fontSize: 8,
        marginTop: 3,
    },


    /* SAVE */

    saveButton: {
        marginTop: 25,
        borderRadius: 13,
        overflow: "hidden",
    },

    saveGradient: {
        height: 54,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    saveText: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: "700",
        marginLeft: 7,
    },

});

export default PaymentScreen;