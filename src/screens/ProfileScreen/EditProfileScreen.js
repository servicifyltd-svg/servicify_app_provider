import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import COLORS from "../../constants/colors";

const EditProfileScreen = ({ navigation }) => {
    const [name, setName] = useState("Rahul Birajdar");
    const [phone, setPhone] = useState("+91 98765 43210");
    const [email, setEmail] = useState("rahul@example.com");
    const [businessName, setBusinessName] = useState(
        "Rahul Home Services"
    );
    const [address, setAddress] = useState(
        "Pune, Maharashtra"
    );
    const [experience, setExperience] = useState("5+ Years");

    const handleSave = () => {
        Alert.alert(
            "Profile Updated",
            "Your profile has been updated successfully.",
            [
                {
                    text: "OK",
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
                            Edit Profile
                        </Text>

                        <View style={styles.headerSpace} />

                    </View>


                    {/* PROFILE PHOTO */}

                    <View style={styles.photoSection}>

                        <View style={styles.avatar}>

                            <Text style={styles.avatarText}>
                                RB
                            </Text>

                            <TouchableOpacity
                                style={styles.cameraButton}
                                onPress={() =>
                                    Alert.alert(
                                        "Profile Photo",
                                        "Image picker will be connected later."
                                    )
                                }
                            >
                                <MaterialCommunityIcons
                                    name="camera"
                                    size={16}
                                    color={COLORS.white}
                                />
                            </TouchableOpacity>

                        </View>

                        <Text style={styles.changePhoto}>
                            Change Profile Photo
                        </Text>

                    </View>


                    {/* PERSONAL INFORMATION */}

                    <Text style={styles.sectionTitle}>
                        Personal Information
                    </Text>

                    <Input
                        label="Full Name"
                        icon="account-outline"
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter your name"
                    />

                    <Input
                        label="Phone Number"
                        icon="phone-outline"
                        value={phone}
                        onChangeText={setPhone}
                        placeholder="Enter phone number"
                        keyboardType="phone-pad"
                    />

                    <Input
                        label="Email Address"
                        icon="email-outline"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter email"
                        keyboardType="email-address"
                    />


                    {/* BUSINESS */}

                    <Text style={styles.sectionTitle}>
                        Business Information
                    </Text>

                    <Input
                        label="Business Name"
                        icon="briefcase-outline"
                        value={businessName}
                        onChangeText={setBusinessName}
                        placeholder="Enter business name"
                    />

                    <Input
                        label="Experience"
                        icon="calendar-outline"
                        value={experience}
                        onChangeText={setExperience}
                        placeholder="e.g. 5+ Years"
                    />

                    <Input
                        label="Service Location"
                        icon="map-marker-outline"
                        value={address}
                        onChangeText={setAddress}
                        placeholder="Enter your location"
                    />


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
                                Save Changes
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


/* INPUT */

const Input = ({
    label,
    icon,
    value,
    onChangeText,
    placeholder,
    keyboardType,
}) => {

    return (
        <View style={styles.inputWrapper}>

            <Text style={styles.label}>
                {label}
            </Text>

            <View style={styles.inputContainer}>

                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={COLORS.textSecondary}
                />

                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor="#697386"
                    keyboardType={keyboardType}
                    style={styles.input}
                />

            </View>

        </View>
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

    headerSpace: {
        width: 42,
    },


    /* PHOTO */

    photoSection: {
        alignItems: "center",
        marginTop: 22,
        marginBottom: 22,
    },

    avatar: {
        width: 96,
        height: 96,
        borderRadius: 31,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    avatarText: {
        color: COLORS.white,
        fontSize: 28,
        fontWeight: "800",
    },

    cameraButton: {
        position: "absolute",
        right: -3,
        bottom: -3,
        width: 31,
        height: 31,
        borderRadius: 16,
        backgroundColor: COLORS.primaryLight,
        borderWidth: 3,
        borderColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
    },

    changePhoto: {
        color: COLORS.primaryLight,
        fontSize: 12,
        fontWeight: "600",
        marginTop: 10,
    },


    /* SECTION */

    sectionTitle: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "700",
        marginTop: 18,
        marginBottom: 2,
    },


    /* INPUT */

    inputWrapper: {
        marginTop: 13,
    },

    label: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginBottom: 7,
    },

    inputContainer: {
        height: 52,
        borderRadius: 12,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 13,
    },

    input: {
        flex: 1,
        color: COLORS.white,
        fontSize: 13,
        marginLeft: 9,
        paddingVertical: 0,
    },


    /* SAVE */

    saveButton: {
        borderRadius: 13,
        overflow: "hidden",
        marginTop: 28,
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
    },

    cancelText: {
        color: COLORS.textSecondary,
        fontSize: 13,
        fontWeight: "600",
    },

});

export default EditProfileScreen;