import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import AppButton from "../../components/AppButton";
import api from "../../services/api";

const RegisterScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState("");
    // const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null); // State for profile image
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async () => {
        // Perform registration logic here (e.g., API call, validation, etc.)
        if (!fullName || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // const mobileRegex = /^\d{10}$/;
        // if (!mobileRegex.test(mobile)) {
        //     alert("Please enter a valid 10-digit mobile number.");
        //     return;
        // }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and contain at least one letter and one number.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if (!profileImage) {
            alert("Please upload a profile image.");
            return;
        }
        // If all validations pass, navigate to the main app
        // send the user data to the backend for registration
        const formData = new FormData();
        formData.append("name", fullName.trim());
        // formData.append("mobile", mobile.trim());
        formData.append("email", email.trim().toLowerCase());
        formData.append("password", password);
        if (profileImage) {
            formData.append("profileImage", {
                uri: profileImage,
                name: "profile.jpg",
                type: "image/jpeg",
            });
        }
        try {
            const response = await api.post(
                "/users/register",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            alert(
                "Registration successful! Please log in."
            );
            navigation.replace("Login");
        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("HEADERS:", error.response?.headers);
            console.log("MESSAGE:", error.message);
            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    const pickProfileImage = async () => {
        const permission =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert("Please allow access to your photos.");
            return;
        }

        const result =
            await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ["images"],
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.8,
            });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    return (
        <LinearGradient
            colors={[
                "#030711",
                "#07101F",
                "#050A18",
            ]}
            style={styles.container}
        >
            <StatusBar
                barStyle="light-content"
                backgroundColor="#030711"
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
                            Create Account
                        </Text>
                        <View style={styles.headerSpacer} />
                    </View>


                    {/* LOGO */}
                    <View style={styles.logoSection}>
                        <LinearGradient
                            colors={[
                                COLORS.gold,
                                COLORS.primary,
                            ]}
                            style={styles.logo}
                        >
                            <MaterialCommunityIcons
                                name="account-hard-hat"
                                size={30}
                                color={COLORS.white}
                            />
                        </LinearGradient>
                        <Text style={styles.logoText}>
                            SERVICIFY
                        </Text>
                        <Text style={styles.providerText}>
                            PROVIDER
                        </Text>
                    </View>


                    {/* TITLE */}
                    <Text style={styles.title}>
                        Become a Provider
                    </Text>
                    <Text style={styles.subtitle}>
                        Create your provider account and
                        {"\n"}
                        start growing your business.
                    </Text>


                    {/* FORM */}
                    <View style={styles.form}>

                        {/* FULL NAME */}
                        <Text style={styles.label}>
                            Full Name
                        </Text>
                        <View style={styles.inputContainer}>
                            <MaterialCommunityIcons
                                name="account-outline"
                                size={21}
                                color={COLORS.textSecondary}
                            />
                            <TextInput
                                value={fullName}
                                onChangeText={setFullName}
                                placeholder="Enter your full name"
                                placeholderTextColor="#697386"
                                style={styles.input}
                            />
                        </View>


                        {/* MOBILE */}
                        {/* <Text style={styles.label}>
                            Mobile Number
                        </Text>
                        <View style={styles.inputContainer}>
                            <MaterialCommunityIcons
                                name="phone-outline"
                                size={21}
                                color={COLORS.textSecondary}
                            />
                            <TextInput
                                value={mobile}
                                onChangeText={setMobile}
                                placeholder="Enter mobile number"
                                placeholderTextColor="#697386"
                                keyboardType="phone-pad"
                                maxLength={10}
                                style={styles.input}
                            />
                        </View> */}


                        {/* EMAIL */}
                        <Text style={styles.label}>
                            Email Address
                        </Text>
                        <View style={styles.inputContainer}>
                            <MaterialCommunityIcons
                                name="email-outline"
                                size={21}
                                color={COLORS.textSecondary}
                            />
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Enter email address"
                                placeholderTextColor="#697386"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                style={styles.input}
                            />
                        </View>

                        {/* PASSWORD */}
                        <Text style={styles.label}>
                            Password
                        </Text>
                        <View style={styles.inputContainer}>
                            <MaterialCommunityIcons
                                name="lock-outline"
                                size={21}
                                color={COLORS.textSecondary}
                            />
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Create password"
                                placeholderTextColor="#697386"
                                secureTextEntry={!showPassword}
                                style={styles.input}
                            />
                            <TouchableOpacity
                                onPress={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                <MaterialCommunityIcons
                                    name={
                                        showPassword
                                            ? "eye-off-outline"
                                            : "eye-outline"
                                    }
                                    size={21}
                                    color={COLORS.textSecondary}
                                />
                            </TouchableOpacity>
                        </View>


                        {/* CONFIRM PASSWORD */}

                        <Text style={styles.label}>
                            Confirm Password
                        </Text>

                        <View style={styles.inputContainer}>

                            <MaterialCommunityIcons
                                name="lock-check-outline"
                                size={21}
                                color={COLORS.textSecondary}
                            />

                            <TextInput
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholder="Confirm password"
                                placeholderTextColor="#697386"
                                secureTextEntry={!showConfirmPassword}
                                style={styles.input}
                            />

                            <TouchableOpacity
                                onPress={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                            >
                                <MaterialCommunityIcons
                                    name={
                                        showConfirmPassword
                                            ? "eye-off-outline"
                                            : "eye-outline"
                                    }
                                    size={21}
                                    color={COLORS.textSecondary}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Upload profile image */}
                        <Text style={styles.label}>
                            Upload Profile Image
                        </Text>

                        <TouchableOpacity
                            style={styles.imageUploadContainer}
                            onPress={pickProfileImage}
                        >
                            {profileImage ? (
                                <Image
                                    source={{ uri: profileImage }}
                                    style={styles.profileImage}
                                />
                            ) : (
                                <>
                                    <MaterialCommunityIcons
                                        name="camera-plus-outline"
                                        size={30}
                                        color={COLORS.textSecondary}
                                    />

                                    <Text style={styles.uploadText}>
                                        Upload Profile Image
                                    </Text>
                                </>
                            )}
                        </TouchableOpacity>

                        {/* TERMS */}
                        <View style={styles.termsContainer}>
                            <View style={styles.checkbox}>
                                <MaterialCommunityIcons
                                    name="check"
                                    size={15}
                                    color={COLORS.white}
                                />
                            </View>

                            <Text style={styles.termsText}>
                                I agree to the{" "}
                                <Text style={styles.termsLink}>
                                    Terms & Conditions
                                </Text>
                                {" "}and{" "}
                                <Text style={styles.termsLink}>
                                    Privacy Policy
                                </Text>
                            </Text>

                        </View>


                        {/* REGISTER */}

                        <View style={styles.buttonContainer}>

                            <AppButton
                                title="Create Provider Account"
                                onPress={handleRegister}
                            />

                        </View>


                        {/* LOGIN */}

                        <View style={styles.loginContainer}>

                            <Text style={styles.loginText}>
                                Already have an account?
                            </Text>

                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("Login")
                                }
                            >
                                <Text style={styles.loginLink}>
                                    Login
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </ScrollView>

            </KeyboardAvoidingView>

        </LinearGradient>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    keyboard: {
        flex: 1,
    },

    scroll: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop:
            Platform.OS === "android"
                ? StatusBar.currentHeight
                : 20,
        paddingBottom: 35,
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
        borderRadius: 21,

        backgroundColor: "#0D1529",

        borderWidth: 1,
        borderColor: COLORS.border,

        alignItems: "center",
        justifyContent: "center",
    },

    headerTitle: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "700",
    },

    headerSpacer: {
        width: 42,
    },


    /* LOGO */

    logoSection: {
        alignItems: "center",
        marginTop: 12,
    },

    logo: {
        width: 58,
        height: 58,
        borderRadius: 17,

        alignItems: "center",
        justifyContent: "center",
    },

    logoText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: "800",
        letterSpacing: 1.5,
        marginTop: 8,
    },

    providerText: {
        color: COLORS.gold,
        fontSize: 9,
        fontWeight: "800",
        letterSpacing: 2,
        marginTop: 2,
    },


    /* TITLE */

    title: {
        color: COLORS.white,
        fontSize: 25,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 18,
    },

    subtitle: {
        color: COLORS.textSecondary,
        fontSize: 13,
        lineHeight: 20,
        textAlign: "center",
        marginTop: 6,
    },


    /* FORM */

    form: {
        marginTop: 22,
    },

    label: {
        color: COLORS.text,
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 7,
    },

    inputContainer: {
        height: 52,

        backgroundColor: "#0D1529",

        borderWidth: 1,
        borderColor: COLORS.border,

        borderRadius: 12,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 14,

        marginBottom: 16,
    },

    input: {
        flex: 1,

        color: COLORS.white,

        fontSize: 14,

        marginLeft: 10,

        paddingVertical: 0,
    },


    /* TERMS */

    termsContainer: {
        flexDirection: "row",
        alignItems: "flex-start",

        marginTop: 2,
        marginBottom: 20,
    },

    checkbox: {
        width: 21,
        height: 21,

        borderRadius: 6,

        backgroundColor: COLORS.primary,

        alignItems: "center",
        justifyContent: "center",

        marginRight: 9,
    },

    termsText: {
        flex: 1,

        color: COLORS.textSecondary,

        fontSize: 12,

        lineHeight: 19,
    },

    termsLink: {
        color: COLORS.gold,
        fontWeight: "600",
    },


    /* BUTTON */

    buttonContainer: {
        marginTop: 2,
    },


    /* LOGIN */

    loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        marginTop: 23,
    },

    loginText: {
        color: COLORS.textSecondary,
        fontSize: 13,
    },

    loginLink: {
        color: COLORS.gold,
        fontSize: 14,
        fontWeight: "700",
        marginLeft: 6,
    },

    imageUploadContainer: {
        height: 120,
        borderWidth: 1,
        borderColor: "#303846",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 60,
    },

    uploadText: {
        color: COLORS.textSecondary,
        marginTop: 8,
        fontSize: 14,
    },

});

export default RegisterScreen;