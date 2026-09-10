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

const ServiceDetailsScreen = ({ navigation, route }) => {
    const service = route.params?.service || {
        name: "AC Repair",
        description: "AC repair, installation & maintenance",
        price: "₹500 - ₹1,500",
        icon: "air-conditioner",
        color: "#3B82F6",
        active: true,
    };

    const [name, setName] = useState(service.name);
    const [description, setDescription] = useState(
        service.description
    );
    const [price, setPrice] = useState(service.price);
    const [active, setActive] = useState(
        service.active
    );

    const [editing, setEditing] = useState(false);

    const handleSave = () => {
        setEditing(false);

        Alert.alert(
            "Service Updated",
            "Your service has been updated successfully."
        );
    };

    const handleDelete = () => {
        Alert.alert(
            "Delete Service",
            "Are you sure you want to delete this service?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => navigation.goBack(),
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
                        Service Details
                    </Text>

                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() => setEditing(!editing)}
                    >
                        <MaterialCommunityIcons
                            name={editing ? "close" : "pencil-outline"}
                            size={21}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>

                </View>


                {/* SERVICE HEADER */}

                <View style={styles.serviceHeader}>

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
                            size={38}
                            color={service.color}
                        />

                    </View>

                    <Text style={styles.serviceTitle}>
                        {service.name}
                    </Text>

                    <View
                        style={[
                            styles.statusBadge,
                            {
                                backgroundColor: active
                                    ? "#39D98A15"
                                    : "#FFFFFF10",
                            },
                        ]}
                    >

                        <View
                            style={[
                                styles.statusDot,
                                {
                                    backgroundColor: active
                                        ? COLORS.green
                                        : COLORS.textSecondary,
                                },
                            ]}
                        />

                        <Text
                            style={[
                                styles.statusText,
                                {
                                    color: active
                                        ? COLORS.green
                                        : COLORS.textSecondary,
                                },
                            ]}
                        >
                            {active ? "Active" : "Inactive"}
                        </Text>

                    </View>

                </View>


                {/* SERVICE INFORMATION */}

                <View style={styles.card}>

                    <View style={styles.cardHeader}>

                        <Text style={styles.sectionTitle}>
                            Service Information
                        </Text>

                        {!editing && (
                            <TouchableOpacity
                                onPress={() => setEditing(true)}
                            >
                                <Text style={styles.editText}>
                                    Edit
                                </Text>
                            </TouchableOpacity>
                        )}

                    </View>


                    {/* NAME */}

                    <Text style={styles.label}>
                        Service Name
                    </Text>

                    {editing ? (

                        <View style={styles.inputContainer}>

                            <TextInput
                                value={name}
                                onChangeText={setName}
                                style={styles.input}
                            />

                        </View>

                    ) : (

                        <Text style={styles.value}>
                            {name}
                        </Text>

                    )}


                    {/* DESCRIPTION */}

                    <Text style={styles.label}>
                        Description
                    </Text>

                    {editing ? (

                        <View
                            style={[
                                styles.inputContainer,
                                styles.descriptionContainer,
                            ]}
                        >

                            <TextInput
                                value={description}
                                onChangeText={setDescription}
                                multiline
                                textAlignVertical="top"
                                style={[
                                    styles.input,
                                    styles.descriptionInput,
                                ]}
                            />

                        </View>

                    ) : (

                        <Text style={styles.description}>
                            {description}
                        </Text>

                    )}


                    {/* PRICE */}

                    <Text style={styles.label}>
                        Price Range
                    </Text>

                    {editing ? (

                        <View style={styles.inputContainer}>

                            <TextInput
                                value={price}
                                onChangeText={setPrice}
                                style={styles.input}
                            />

                        </View>

                    ) : (

                        <Text style={styles.price}>
                            {price}
                        </Text>

                    )}

                </View>


                {/* PERFORMANCE */}

                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        Service Performance
                    </Text>

                    <View style={styles.statsRow}>

                        <Stat
                            icon="calendar-check-outline"
                            value="24"
                            label="Bookings"
                        />

                        <Stat
                            icon="star-outline"
                            value="4.8"
                            label="Rating"
                        />

                        <Stat
                            icon="cash-multiple"
                            value="₹18K"
                            label="Earned"
                        />

                    </View>

                </View>


                {/* ACTIVE STATUS */}

                <View style={styles.card}>

                    <View style={styles.activeRow}>

                        <View style={styles.activeInfo}>

                            <Text style={styles.sectionTitle}>
                                Service Status
                            </Text>

                            <Text style={styles.activeDescription}>
                                Customers can book this service
                                when it is active.
                            </Text>

                        </View>

                        <TouchableOpacity
                            style={[
                                styles.switch,
                                active && styles.switchActive,
                            ]}
                            onPress={() => setActive(!active)}
                        >

                            <View
                                style={[
                                    styles.switchThumb,
                                    active &&
                                    styles.switchThumbActive,
                                ]}
                            />

                        </TouchableOpacity>

                    </View>

                </View>


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
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.saveGradient}
                        >

                            <MaterialCommunityIcons
                                name="check"
                                size={20}
                                color={COLORS.white}
                            />

                            <Text style={styles.saveText}>
                                Save Changes
                            </Text>

                        </LinearGradient>

                    </TouchableOpacity>

                )}


                {/* DELETE */}

                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDelete}
                >

                    <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={19}
                        color={COLORS.red}
                    />

                    <Text style={styles.deleteText}>
                        Delete Service
                    </Text>

                </TouchableOpacity>

            </ScrollView>

        </View>
    );
};


/* STAT */

const Stat = ({
    icon,
    value,
    label,
}) => {

    return (
        <View style={styles.stat}>

            <View style={styles.statIcon}>

                <MaterialCommunityIcons
                    name={icon}
                    size={20}
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


    /* SERVICE HEADER */

    serviceHeader: {
        alignItems: "center",
        paddingVertical: 25,
    },

    serviceIcon: {
        width: 85,
        height: 85,
        borderRadius: 27,
        alignItems: "center",
        justifyContent: "center",
    },

    serviceTitle: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: "800",
        marginTop: 14,
    },

    statusBadge: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 9,
        marginTop: 8,
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


    /* CARD */

    card: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 16,
        marginBottom: 12,
    },

    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    sectionTitle: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
    },

    editText: {
        color: COLORS.primaryLight,
        fontSize: 12,
        fontWeight: "700",
    },


    /* INFORMATION */

    label: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 18,
        marginBottom: 6,
    },

    value: {
        color: COLORS.white,
        fontSize: 13,
        fontWeight: "600",
    },

    description: {
        color: COLORS.textSecondary,
        fontSize: 12,
        lineHeight: 18,
    },

    price: {
        color: COLORS.gold,
        fontSize: 15,
        fontWeight: "800",
    },


    /* INPUT */

    inputContainer: {
        minHeight: 48,
        borderRadius: 11,
        backgroundColor: "#0D1529",
        borderWidth: 1,
        borderColor: COLORS.border,
        paddingHorizontal: 12,
        justifyContent: "center",
    },

    input: {
        color: COLORS.white,
        fontSize: 13,
        paddingVertical: 10,
    },

    descriptionContainer: {
        height: 100,
    },

    descriptionInput: {
        height: 85,
        textAlignVertical: "top",
    },


    /* STATS */

    statsRow: {
        flexDirection: "row",
        marginTop: 15,
    },

    stat: {
        flex: 1,
        alignItems: "center",
    },

    statIcon: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: "#F5B82E15",
        alignItems: "center",
        justifyContent: "center",
    },

    statValue: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "800",
        marginTop: 7,
    },

    statLabel: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 2,
    },


    /* ACTIVE */

    activeRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    activeInfo: {
        flex: 1,
        paddingRight: 15,
    },

    activeDescription: {
        color: COLORS.textSecondary,
        fontSize: 10,
        lineHeight: 15,
        marginTop: 5,
    },

    switch: {
        width: 48,
        height: 27,
        borderRadius: 14,
        backgroundColor: "#30384D",
        padding: 3,
        justifyContent: "center",
    },

    switchActive: {
        backgroundColor: COLORS.primary,
    },

    switchThumb: {
        width: 21,
        height: 21,
        borderRadius: 11,
        backgroundColor: COLORS.textSecondary,
    },

    switchThumbActive: {
        backgroundColor: COLORS.white,
        alignSelf: "flex-end",
    },


    /* SAVE */

    saveButton: {
        borderRadius: 13,
        overflow: "hidden",
        marginTop: 5,
    },

    saveGradient: {
        height: 54,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    saveText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "700",
        marginLeft: 7,
    },


    /* DELETE */

    deleteButton: {
        height: 50,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: "#FF4D4D40",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },

    deleteText: {
        color: COLORS.red,
        fontSize: 13,
        fontWeight: "600",
        marginLeft: 7,
    },

});

export default ServiceDetailsScreen;