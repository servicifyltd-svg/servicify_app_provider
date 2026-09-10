import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import COLORS from "../../constants/colors";

const categories = [
    {
        name: "AC Repair",
        icon: "air-conditioner",
    },
    {
        name: "Plumbing",
        icon: "pipe",
    },
    {
        name: "Electrical",
        icon: "flash",
    },
    {
        name: "Cleaning",
        icon: "broom",
    },
    {
        name: "Painting",
        icon: "format-paint",
    },
];

const AddServiceScreen = ({ navigation }) => {
    const [serviceName, setServiceName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const [duration, setDuration] = useState("");

    const [isActive, setIsActive] = useState(true);

    const [showCategories, setShowCategories] =
        useState(false);

    const handleSave = () => {
        // Backend API will be connected later.

        navigation.goBack();
    };

    return (
        <View style={styles.container}>

            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.background}
            />

            <KeyboardAvoidingView
                style={styles.keyboard}
                behavior={
                    Platform.OS === "ios"
                        ? "padding"
                        : undefined
                }
            >

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.scroll}
                >

                    {/* HEADER */}

                    <View style={styles.header}>

                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation.goBack()}
                        >
                            <MaterialCommunityIcons
                                name="arrow-left"
                                size={23}
                                color={COLORS.white}
                            />
                        </TouchableOpacity>

                        <Text style={styles.headerTitle}>
                            Add Service
                        </Text>

                        <View style={styles.headerSpace} />

                    </View>


                    {/* SERVICE ICON */}

                    <View style={styles.iconWrapper}>

                        <LinearGradient
                            colors={[
                                COLORS.primary,
                                "#A855F7",
                            ]}
                            style={styles.iconContainer}
                        >

                            <MaterialCommunityIcons
                                name="briefcase-plus-outline"
                                size={35}
                                color={COLORS.white}
                            />

                        </LinearGradient>

                        <Text style={styles.iconTitle}>
                            Create a new service
                        </Text>

                        <Text style={styles.iconSubtitle}>
                            Add details about the service you provide
                        </Text>

                    </View>


                    {/* SERVICE NAME */}

                    <InputLabel
                        label="Service Name"
                        required
                    />

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="briefcase-outline"
                            size={21}
                            color={COLORS.textSecondary}
                        />

                        <TextInput
                            value={serviceName}
                            onChangeText={setServiceName}
                            placeholder="e.g. AC Repair"
                            placeholderTextColor="#697386"
                            style={styles.input}
                        />

                    </View>


                    {/* CATEGORY */}

                    <InputLabel
                        label="Category"
                        required
                    />

                    <TouchableOpacity
                        style={styles.inputContainer}
                        onPress={() =>
                            setShowCategories(!showCategories)
                        }
                    >

                        <MaterialCommunityIcons
                            name="shape-outline"
                            size={21}
                            color={COLORS.textSecondary}
                        />

                        <Text
                            style={[
                                styles.selectText,
                                !category && styles.placeholder,
                            ]}
                        >
                            {category || "Select category"}
                        </Text>

                        <MaterialCommunityIcons
                            name={
                                showCategories
                                    ? "chevron-up"
                                    : "chevron-down"
                            }
                            size={21}
                            color={COLORS.textSecondary}
                        />

                    </TouchableOpacity>


                    {/* CATEGORY LIST */}

                    {showCategories && (

                        <View style={styles.categoryList}>

                            {categories.map((item) => (

                                <TouchableOpacity
                                    key={item.name}
                                    style={styles.categoryItem}
                                    onPress={() => {
                                        setCategory(item.name);
                                        setShowCategories(false);
                                    }}
                                >

                                    <View style={styles.categoryIcon}>

                                        <MaterialCommunityIcons
                                            name={item.icon}
                                            size={19}
                                            color={COLORS.gold}
                                        />

                                    </View>

                                    <Text style={styles.categoryText}>
                                        {item.name}
                                    </Text>

                                    {category === item.name && (
                                        <MaterialCommunityIcons
                                            name="check"
                                            size={20}
                                            color={COLORS.green}
                                        />
                                    )}

                                </TouchableOpacity>

                            ))}

                        </View>

                    )}


                    {/* DESCRIPTION */}

                    <InputLabel
                        label="Description"
                        required
                    />

                    <View
                        style={[
                            styles.inputContainer,
                            styles.descriptionContainer,
                        ]}
                    >

                        <TextInput
                            value={description}
                            onChangeText={setDescription}
                            placeholder="Describe the service you provide..."
                            placeholderTextColor="#697386"
                            multiline
                            textAlignVertical="top"
                            style={[
                                styles.input,
                                styles.descriptionInput,
                            ]}
                            maxLength={300}
                        />

                    </View>

                    <Text style={styles.characterCount}>
                        {description.length}/300
                    </Text>


                    {/* PRICE */}

                    <InputLabel
                        label="Price Range"
                        required
                    />

                    <View style={styles.priceRow}>

                        <View
                            style={[
                                styles.inputContainer,
                                styles.priceInputContainer,
                            ]}
                        >

                            <Text style={styles.currency}>
                                ₹
                            </Text>

                            <TextInput
                                value={minPrice}
                                onChangeText={setMinPrice}
                                placeholder="Min price"
                                placeholderTextColor="#697386"
                                keyboardType="numeric"
                                style={styles.input}
                            />

                        </View>


                        <Text style={styles.priceTo}>
                            to
                        </Text>


                        <View
                            style={[
                                styles.inputContainer,
                                styles.priceInputContainer,
                            ]}
                        >

                            <Text style={styles.currency}>
                                ₹
                            </Text>

                            <TextInput
                                value={maxPrice}
                                onChangeText={setMaxPrice}
                                placeholder="Max price"
                                placeholderTextColor="#697386"
                                keyboardType="numeric"
                                style={styles.input}
                            />

                        </View>

                    </View>


                    {/* DURATION */}

                    <InputLabel
                        label="Service Duration"
                        required
                    />

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="clock-outline"
                            size={21}
                            color={COLORS.textSecondary}
                        />

                        <TextInput
                            value={duration}
                            onChangeText={setDuration}
                            placeholder="e.g. 1-2 hours"
                            placeholderTextColor="#697386"
                            style={styles.input}
                        />

                    </View>


                    {/* STATUS */}

                    <View style={styles.statusRow}>

                        <View>

                            <Text style={styles.statusTitle}>
                                Service Status
                            </Text>

                            <Text style={styles.statusSubtitle}>
                                Customers can book active services
                            </Text>

                        </View>


                        <TouchableOpacity
                            style={[
                                styles.switch,
                                isActive && styles.switchActive,
                            ]}
                            onPress={() =>
                                setIsActive(!isActive)
                            }
                        >

                            <View
                                style={[
                                    styles.switchThumb,
                                    isActive &&
                                    styles.switchThumbActive,
                                ]}
                            />

                        </TouchableOpacity>

                    </View>


                    {/* SAVE */}

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
                                size={21}
                                color={COLORS.white}
                            />

                            <Text style={styles.saveText}>
                                Save Service
                            </Text>

                        </LinearGradient>

                    </TouchableOpacity>


                    {/* CANCEL */}

                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => navigation.goBack()}
                    >

                        <Text style={styles.cancelText}>
                            Cancel
                        </Text>

                    </TouchableOpacity>

                </ScrollView>

            </KeyboardAvoidingView>

        </View>
    );
};


/* INPUT LABEL */

const InputLabel = ({
    label,
    required,
}) => {
    return (
        <Text style={styles.label}>
            {label}

            {required && (
                <Text style={styles.required}>
                    {" "}*
                </Text>
            )}
        </Text>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    keyboard: {
        flex: 1,
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

    headerTitle: {
        color: COLORS.white,

        fontSize: 17,

        fontWeight: "700",
    },

    headerSpace: {
        width: 42,
    },


    /* ICON */

    iconWrapper: {
        alignItems: "center",

        marginTop: 20,

        marginBottom: 30,
    },

    iconContainer: {
        width: 78,
        height: 78,

        borderRadius: 24,

        alignItems: "center",
        justifyContent: "center",

        elevation: 8,
    },

    iconTitle: {
        color: COLORS.white,

        fontSize: 19,

        fontWeight: "700",

        marginTop: 14,
    },

    iconSubtitle: {
        color: COLORS.textSecondary,

        fontSize: 11,

        textAlign: "center",

        marginTop: 5,
    },


    /* LABEL */

    label: {
        color: COLORS.white,

        fontSize: 13,

        fontWeight: "600",

        marginBottom: 8,

        marginTop: 15,
    },

    required: {
        color: COLORS.red,
    },


    /* INPUT */

    inputContainer: {
        minHeight: 52,

        borderRadius: 12,

        backgroundColor: COLORS.card,

        borderWidth: 1,

        borderColor: COLORS.border,

        flexDirection: "row",

        alignItems: "center",

        paddingHorizontal: 14,
    },

    input: {
        flex: 1,

        color: COLORS.white,

        fontSize: 13,

        marginLeft: 9,

        paddingVertical: 0,
    },

    selectText: {
        flex: 1,

        color: COLORS.white,

        fontSize: 13,

        marginLeft: 9,
    },

    placeholder: {
        color: "#697386",
    },


    /* CATEGORY */

    categoryList: {
        backgroundColor: COLORS.card,

        borderRadius: 12,

        borderWidth: 1,

        borderColor: COLORS.border,

        marginTop: 6,

        overflow: "hidden",
    },

    categoryItem: {
        height: 52,

        flexDirection: "row",

        alignItems: "center",

        paddingHorizontal: 12,

        borderBottomWidth: 1,

        borderBottomColor: "#FFFFFF08",
    },

    categoryIcon: {
        width: 34,
        height: 34,

        borderRadius: 10,

        backgroundColor: "#F5B82E15",

        alignItems: "center",
        justifyContent: "center",
    },

    categoryText: {
        flex: 1,

        color: COLORS.white,

        fontSize: 12,

        marginLeft: 10,
    },


    /* DESCRIPTION */

    descriptionContainer: {
        height: 110,

        alignItems: "flex-start",

        paddingVertical: 12,
    },

    descriptionInput: {
        marginLeft: 0,

        height: 85,

        textAlignVertical: "top",
    },

    characterCount: {
        color: COLORS.textSecondary,

        fontSize: 10,

        textAlign: "right",

        marginTop: 4,
    },


    /* PRICE */

    priceRow: {
        flexDirection: "row",

        alignItems: "center",
    },

    priceInputContainer: {
        flex: 1,
    },

    currency: {
        color: COLORS.gold,

        fontSize: 15,

        fontWeight: "700",
    },

    priceTo: {
        color: COLORS.textSecondary,

        fontSize: 12,

        marginHorizontal: 9,
    },


    /* STATUS */

    statusRow: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "space-between",

        backgroundColor: COLORS.card,

        borderWidth: 1,

        borderColor: COLORS.border,

        borderRadius: 14,

        padding: 14,

        marginTop: 24,
    },

    statusTitle: {
        color: COLORS.white,

        fontSize: 13,

        fontWeight: "600",
    },

    statusSubtitle: {
        color: COLORS.textSecondary,

        fontSize: 10,

        marginTop: 4,
    },


    /* SWITCH */

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
        marginTop: 25,

        borderRadius: 13,

        overflow: "hidden",
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


    /* CANCEL */

    cancelButton: {
        height: 48,

        alignItems: "center",

        justifyContent: "center",

        marginTop: 5,
    },

    cancelText: {
        color: COLORS.textSecondary,

        fontSize: 13,

        fontWeight: "600",
    },

});

export default AddServiceScreen;