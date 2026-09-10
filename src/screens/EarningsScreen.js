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

import { LinearGradient } from "expo-linear-gradient";

import COLORS from "../constants/colors";

const periods = ["Today", "This Week", "This Month"];

const transactions = [
    {
        id: "1",
        service: "AC Repair",
        customer: "Michael Brown",
        date: "Today, 2:00 PM",
        amount: "₹800",
        status: "Completed",
        icon: "air-conditioner",
        color: "#3B82F6",
    },
    {
        id: "2",
        service: "Plumbing",
        customer: "Rahul Sharma",
        date: "Today, 11:30 AM",
        amount: "₹650",
        status: "Completed",
        icon: "pipe",
        color: "#38BDF8",
    },
    {
        id: "3",
        service: "Electrical Work",
        customer: "Sneha Joshi",
        date: "Yesterday, 6:00 PM",
        amount: "₹900",
        status: "Completed",
        icon: "flash",
        color: "#F5B82E",
    },
    {
        id: "4",
        service: "Home Cleaning",
        customer: "Emily Davis",
        date: "Yesterday, 10:00 AM",
        amount: "₹700",
        status: "Completed",
        icon: "broom",
        color: "#A855F7",
    },
];

const EarningsScreen = () => {
    const [period, setPeriod] = useState("Today");

    const getAmount = () => {
        if (period === "Today") return "₹0";
        if (period === "This Week") return "₹0";

        return "₹0";
    };

    const getJobs = () => {
        if (period === "Today") return "0";
        if (period === "This Week") return "0";

        return "0";
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

                        <Text style={styles.title}>
                            Earnings
                        </Text>

                        <Text style={styles.subtitle}>
                            Track your income and transactions
                        </Text>

                    </View>

                    <TouchableOpacity
                        style={styles.downloadButton}
                    >
                        <MaterialCommunityIcons
                            name="download-outline"
                            size={21}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>

                </View>


                {/* PERIOD FILTER */}

                <View style={styles.periodContainer}>

                    {periods.map((item) => {

                        const active = period === item;

                        return (
                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.periodButton,
                                    active &&
                                    styles.periodButtonActive,
                                ]}
                                onPress={() => setPeriod(item)}
                            >

                                <Text
                                    style={[
                                        styles.periodText,
                                        active &&
                                        styles.periodTextActive,
                                    ]}
                                >
                                    {item}
                                </Text>

                            </TouchableOpacity>
                        );
                    })}

                </View>


                {/* MAIN EARNINGS */}

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

                    <View style={styles.earningsTop}>

                        <View>

                            <Text style={styles.earningsLabel}>
                                {period} Earnings
                            </Text>

                            <Text style={styles.earningsAmount}>
                                {getAmount()}
                            </Text>

                        </View>

                        <View style={styles.walletIcon}>

                            <MaterialCommunityIcons
                                name="wallet-outline"
                                size={27}
                                color={COLORS.gold}
                            />

                        </View>

                    </View>


                    <View style={styles.growthRow}>

                        <View style={styles.growthBadge}>

                            <MaterialCommunityIcons
                                name="trending-up"
                                size={15}
                                color={COLORS.green}
                            />

                            <Text style={styles.growthText}>
                                0%
                            </Text>

                        </View>

                        <Text style={styles.growthLabel}>
                            compared to previous period
                        </Text>

                    </View>

                </LinearGradient>


                {/* STATS */}

                <View style={styles.statsRow}>

                    <StatCard
                        icon="briefcase-check-outline"
                        value={getJobs()}
                        label="Completed Jobs"
                    />

                    <StatCard
                        icon="cash-check"
                        value="₹0"
                        label="Net Earnings"
                    />

                </View>


                {/* CHART */}

                <View style={styles.card}>

                    <View style={styles.cardHeader}>

                        <View>

                            <Text style={styles.cardTitle}>
                                Earnings Overview
                            </Text>

                            <Text style={styles.cardSubtitle}>
                                Last 7 days
                            </Text>

                        </View>

                        <MaterialCommunityIcons
                            name="chart-line"
                            size={21}
                            color={COLORS.primaryLight}
                        />

                    </View>


                    <View style={styles.chart}>

                        <View style={styles.chartGrid}>

                            <View style={styles.gridLine} />
                            <View style={styles.gridLine} />
                            <View style={styles.gridLine} />
                            <View style={styles.gridLine} />

                        </View>


                        <View style={styles.bars}>

                            <Bar height={45} label="Mon" value="₹1.2K" />
                            <Bar height={65} label="Tue" value="₹1.8K" />
                            <Bar height={52} label="Wed" value="₹1.5K" />
                            <Bar height={80} label="Thu" value="₹2.1K" />
                            <Bar height={61} label="Fri" value="₹1.7K" />
                            <Bar height={90} label="Sat" value="₹2.4K" />
                            <Bar height={72} label="Sun" value="₹2.0K" />

                        </View>

                    </View>

                </View>


                {/* TRANSACTIONS */}

                <View style={styles.transactionHeader}>

                    <Text style={styles.sectionTitle}>
                        Recent Transactions
                    </Text>

                    <TouchableOpacity>
                        <Text style={styles.viewAll}>
                            View All
                        </Text>
                    </TouchableOpacity>

                </View>


                {transactions.map((transaction) => (

                    <TransactionCard
                        key={transaction.id}
                        transaction={transaction}
                    />

                ))}

            </ScrollView>

        </View>
    );
};


/* STAT CARD */

const StatCard = ({
    icon,
    value,
    label,
}) => {

    return (
        <View style={styles.statCard}>

            <View style={styles.statIcon}>

                <MaterialCommunityIcons
                    name={icon}
                    size={21}
                    color={COLORS.gold}
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


/* BAR */

const Bar = ({
    height,
    label,
    value,
}) => {

    return (
        <View style={styles.barColumn}>

            <Text style={styles.barValue}>
                {value}
            </Text>

            <View
                style={[
                    styles.bar,
                    {
                        height,
                    },
                ]}
            />

            <Text style={styles.barLabel}>
                {label}
            </Text>

        </View>
    );
};


/* TRANSACTION */

const TransactionCard = ({
    transaction,
}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.transactionCard}
        >

            <View
                style={[
                    styles.transactionIcon,
                    {
                        backgroundColor:
                            transaction.color + "20",
                    },
                ]}
            >

                <MaterialCommunityIcons
                    name={transaction.icon}
                    size={23}
                    color={transaction.color}
                />

            </View>


            <View style={styles.transactionInfo}>

                <Text style={styles.transactionService}>
                    {transaction.service}
                </Text>

                <Text style={styles.transactionCustomer}>
                    {transaction.customer}
                </Text>

                <Text style={styles.transactionDate}>
                    {transaction.date}
                </Text>

            </View>


            <View style={styles.transactionAmount}>

                <Text style={styles.amount}>
                    +{transaction.amount}
                </Text>

                <Text style={styles.completed}>
                    Completed
                </Text>

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
        paddingBottom: 100,
    },


    /* HEADER */

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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

    downloadButton: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },


    /* PERIOD */

    periodContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.card,
        borderRadius: 12,
        padding: 4,
        marginTop: 20,
        borderWidth: 1,
        borderColor: COLORS.border,
    },

    periodButton: {
        flex: 1,
        height: 36,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
    },

    periodButtonActive: {
        backgroundColor: COLORS.primary,
    },

    periodText: {
        color: COLORS.textSecondary,
        fontSize: 11,
        fontWeight: "600",
    },

    periodTextActive: {
        color: COLORS.white,
    },


    /* EARNINGS */

    earningsCard: {
        marginTop: 15,
        borderRadius: 18,
        padding: 20,
        borderWidth: 1,
        borderColor: "#3D2B62",
    },

    earningsTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    earningsLabel: {
        color: COLORS.textSecondary,
        fontSize: 12,
    },

    earningsAmount: {
        color: COLORS.white,
        fontSize: 31,
        fontWeight: "800",
        marginTop: 5,
    },

    walletIcon: {
        width: 52,
        height: 52,
        borderRadius: 16,
        backgroundColor: "#FFFFFF10",
        alignItems: "center",
        justifyContent: "center",
    },

    growthRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 13,
    },

    growthBadge: {
        flexDirection: "row",
        alignItems: "center",
    },

    growthText: {
        color: COLORS.green,
        fontSize: 11,
        fontWeight: "700",
        marginLeft: 3,
    },

    growthLabel: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginLeft: 7,
    },


    /* STATS */

    statsRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 12,
    },

    statCard: {
        flex: 1,
        backgroundColor: COLORS.card,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 14,
    },

    statIcon: {
        width: 38,
        height: 38,
        borderRadius: 11,
        backgroundColor: "#F5B82E15",
        alignItems: "center",
        justifyContent: "center",
    },

    statValue: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "800",
        marginTop: 8,
    },

    statLabel: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 2,
    },


    /* CARD */

    card: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 16,
        marginTop: 12,
    },

    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    cardTitle: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
    },

    cardSubtitle: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 3,
    },


    /* CHART */

    chart: {
        height: 220,
        marginTop: 20,
        position: "relative",
    },

    chartGrid: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 10,
        bottom: 35,
        justifyContent: "space-between",
    },

    gridLine: {
        height: 1,
        backgroundColor: "#FFFFFF08",
    },

    bars: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingBottom: 25,
    },

    barColumn: {
        alignItems: "center",
        justifyContent: "flex-end",
        height: "100%",
    },

    barValue: {
        color: COLORS.textSecondary,
        fontSize: 7,
        marginBottom: 4,
    },

    bar: {
        width: 25,
        borderRadius: 7,
        backgroundColor: COLORS.primary,
    },

    barLabel: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginTop: 7,
    },


    /* TRANSACTIONS */

    transactionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25,
        marginBottom: 11,
    },

    sectionTitle: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
    },

    viewAll: {
        color: COLORS.primaryLight,
        fontSize: 11,
        fontWeight: "600",
    },

    transactionCard: {
        backgroundColor: COLORS.card,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 13,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 9,
    },

    transactionIcon: {
        width: 46,
        height: 46,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
    },

    transactionInfo: {
        flex: 1,
        marginLeft: 11,
    },

    transactionService: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: "700",
    },

    transactionCustomer: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 3,
    },

    transactionDate: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginTop: 3,
    },

    transactionAmount: {
        alignItems: "flex-end",
    },

    amount: {
        color: COLORS.green,
        fontSize: 13,
        fontWeight: "800",
    },

    completed: {
        color: COLORS.textSecondary,
        fontSize: 8,
        marginTop: 4,
    },

});

export default EarningsScreen;