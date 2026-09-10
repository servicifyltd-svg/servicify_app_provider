import React, { useMemo, useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../constants/colors";

const servicesData = [
    {
        id: "1",
        name: "AC Repair",
        description: "AC repair, installation & maintenance",
        price: "₹500 - ₹1,500",
        icon: "air-conditioner",
        color: "#3B82F6",
        active: true,
    },
    {
        id: "2",
        name: "Plumbing",
        description: "Home plumbing repair & installation",
        price: "₹300 - ₹1,200",
        icon: "pipe",
        color: "#38BDF8",
        active: true,
    },
    {
        id: "3",
        name: "Electrical Work",
        description: "Electrical repair & wiring services",
        price: "₹400 - ₹2,000",
        icon: "flash",
        color: "#F5B82E",
        active: true,
    },
    {
        id: "4",
        name: "Home Cleaning",
        description: "Complete home cleaning service",
        price: "₹600 - ₹2,500",
        icon: "broom",
        color: "#A855F7",
        active: false,
    },
];

const ServicesScreen = ({ navigation }) => {
    const [search, setSearch] = useState("");

    const filteredServices = useMemo(() => {
        if (!search.trim()) {
            return servicesData;
        }

        return servicesData.filter((service) =>
            service.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [search]);

    const handleMenu = (service) => {
        Alert.alert(
            service.name,
            "Choose an action",
            [
                {
                    text: "Edit Service",
                    onPress: () => { },
                },
                {
                    text: service.active
                        ? "Deactivate"
                        : "Activate",
                    onPress: () => { },
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => { },
                },
                {
                    text: "Cancel",
                    style: "cancel",
                },
            ]
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

                    <View>
                        <Text style={styles.title}>
                            My Services
                        </Text>

                        <Text style={styles.subtitle}>
                            Manage the services you offer
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => navigation.navigate("AddService")}
                    >
                        <MaterialCommunityIcons
                            name="plus"
                            size={24}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>

                </View>


                {/* SEARCH */}

                <View style={styles.searchContainer}>

                    <MaterialCommunityIcons
                        name="magnify"
                        size={21}
                        color={COLORS.textSecondary}
                    />

                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder="Search services..."
                        placeholderTextColor="#697386"
                        style={styles.searchInput}
                    />

                    {search.length > 0 && (
                        <TouchableOpacity
                            onPress={() => setSearch("")}
                        >
                            <MaterialCommunityIcons
                                name="close-circle"
                                size={18}
                                color={COLORS.textSecondary}
                            />
                        </TouchableOpacity>
                    )}

                </View>


                {/* SUMMARY */}

                <View style={styles.summaryCard}>

                    <View style={styles.summaryIcon}>

                        <MaterialCommunityIcons
                            name="briefcase-check-outline"
                            size={24}
                            color={COLORS.gold}
                        />

                    </View>

                    <View style={styles.summaryInfo}>

                        <Text style={styles.summaryTitle}>
                            {servicesData.length} Services
                        </Text>

                        <Text style={styles.summarySubtitle}>
                            {servicesData.filter(
                                (service) => service.active
                            ).length} active services
                        </Text>

                    </View>

                    <MaterialCommunityIcons
                        name="check-circle"
                        size={22}
                        color={COLORS.green}
                    />

                </View>


                {/* SECTION */}

                <View style={styles.sectionHeader}>

                    <Text style={styles.sectionTitle}>
                        Your Services
                    </Text>

                    <Text style={styles.serviceCount}>
                        {filteredServices.length}
                    </Text>

                </View>


                {/* SERVICES */}

                {filteredServices.map((service) => (

                    <ServiceCard
                        key={service.id}
                        service={service}
                        onMenu={() => handleMenu(service)}
                        onPress={() =>
                            navigation.navigate(
                                "ServiceDetails",
                                { service }
                            )
                        }
                    />

                ))}


                {/* EMPTY */}

                {filteredServices.length === 0 && (
                    <View style={styles.emptyContainer}>

                        <View style={styles.emptyIcon}>
                            <MaterialCommunityIcons
                                name="briefcase-search-outline"
                                size={40}
                                color={COLORS.textSecondary}
                            />
                        </View>

                        <Text style={styles.emptyTitle}>
                            No services found
                        </Text>

                        <Text style={styles.emptyText}>
                            Try another search.
                        </Text>

                    </View>
                )}

            </ScrollView>

        </View>
    );
};


/* SERVICE CARD */

const ServiceCard = ({
    service,
    onMenu,
    onPress,
}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            style={styles.serviceCard}
            onPress={onPress}
        >

            <View
                style={[
                    styles.serviceIcon,
                    {
                        backgroundColor:
                            service.color + "20",
                    },
                ]}
            >
                <MaterialCommunityIcons
                    name={service.icon}
                    size={26}
                    color={service.color}
                />
            </View>


            <View style={styles.serviceInfo}>

                <Text style={styles.serviceName}>
                    {service.name}
                </Text>

                <Text
                    style={styles.serviceDescription}
                    numberOfLines={1}
                >
                    {service.description}
                </Text>

                <Text style={styles.price}>
                    {service.price}
                </Text>


                <View style={styles.activeRow}>

                    <View
                        style={[
                            styles.activeDot,
                            {
                                backgroundColor: service.active
                                    ? COLORS.green
                                    : COLORS.textSecondary,
                            },
                        ]}
                    />

                    <Text
                        style={[
                            styles.activeText,
                            {
                                color: service.active
                                    ? COLORS.green
                                    : COLORS.textSecondary,
                            },
                        ]}
                    >
                        {service.active
                            ? "Active"
                            : "Inactive"}
                    </Text>

                </View>

            </View>


            <TouchableOpacity
                style={styles.menuButton}
                onPress={onMenu}
            >
                <MaterialCommunityIcons
                    name="dots-vertical"
                    size={22}
                    color={COLORS.textSecondary}
                />
            </TouchableOpacity>

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

    addButton: {
        width: 44,
        height: 44,

        borderRadius: 14,

        backgroundColor: COLORS.primary,

        alignItems: "center",
        justifyContent: "center",

        elevation: 5,
    },


    /* SEARCH */

    searchContainer: {
        height: 48,

        backgroundColor: COLORS.card,

        borderWidth: 1,
        borderColor: COLORS.border,

        borderRadius: 12,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 13,

        marginTop: 22,
    },

    searchInput: {
        flex: 1,

        color: COLORS.white,

        fontSize: 13,

        marginLeft: 8,

        paddingVertical: 0,
    },


    /* SUMMARY */

    summaryCard: {
        marginTop: 15,

        backgroundColor: "#17102F",

        borderRadius: 15,

        borderWidth: 1,
        borderColor: "#3D2B62",

        padding: 14,

        flexDirection: "row",
        alignItems: "center",
    },

    summaryIcon: {
        width: 44,
        height: 44,

        borderRadius: 13,

        backgroundColor: "#F5B82E15",

        alignItems: "center",
        justifyContent: "center",
    },

    summaryInfo: {
        flex: 1,
        marginLeft: 11,
    },

    summaryTitle: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: "700",
    },

    summarySubtitle: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 3,
    },


    /* SECTION */

    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",

        marginTop: 25,
        marginBottom: 11,
    },

    sectionTitle: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
    },

    serviceCount: {
        color: COLORS.textSecondary,
        fontSize: 11,

        backgroundColor: COLORS.card,

        borderRadius: 10,

        paddingHorizontal: 8,
        paddingVertical: 3,

        marginLeft: 7,
    },


    /* CARD */

    serviceCard: {
        backgroundColor: COLORS.card,

        borderRadius: 16,

        borderWidth: 1,
        borderColor: COLORS.border,

        padding: 14,

        flexDirection: "row",

        marginBottom: 10,
    },

    serviceIcon: {
        width: 52,
        height: 52,

        borderRadius: 15,

        alignItems: "center",
        justifyContent: "center",
    },

    serviceInfo: {
        flex: 1,

        marginLeft: 12,
    },

    serviceName: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
    },

    serviceDescription: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 4,
    },

    price: {
        color: COLORS.gold,
        fontSize: 12,
        fontWeight: "700",
        marginTop: 7,
    },

    activeRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 7,
    },

    activeDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },

    activeText: {
        fontSize: 10,
        fontWeight: "600",
        marginLeft: 5,
    },

    menuButton: {
        width: 30,
        height: 35,

        alignItems: "center",
        justifyContent: "center",
    },


    /* EMPTY */

    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",

        paddingVertical: 70,
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

export default ServicesScreen;