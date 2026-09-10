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
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import COLORS from "../../constants/colors";

import AppButton from "../../components/AppButton";
import api from "../../services/api";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {

        // if (
        //     email.trim() === "" ||
        //     password.trim() === ""
        // ) {
        //     alert("Please enter both email and password.");
        //     return;
        // }

        // const emailRegex =
        //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // if (!emailRegex.test(email.trim())) {
        //     alert("Please enter a valid email address.");
        //     return;
        // }

        // const passwordRegex =
        //     /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // if (!passwordRegex.test(password)) {
        //     alert(
        //         "Password must be at least 8 characters long and contain both letters and numbers."
        //     );
        //     return;
        // }

        // try {


        //     const response = await api.post(
        //         "/users/login",
        //         {
        //             email: email.trim().toLowerCase(),
        //             password,
        //         }
        //     );

        //     // Get tokens
        //     const accessToken =
        //         response.data?.accessToken;

        //     const refreshToken =
        //         response.data?.refreshToken;

        //     // Check access token
        //     if (!accessToken) {
        //         alert(
        //             "Login successful, but access token was not received."
        //         );
        //         return;
        //     }

        //     // Save tokens
        //     await AsyncStorage.setItem(
        //         "token",
        //         accessToken
        //     );

        //     if (refreshToken) {
        //         await AsyncStorage.setItem(
        //             "refreshToken",
        //             refreshToken
        //         );
        //     }

        //     // Optional: save user data
        //     await AsyncStorage.setItem(
        //         "user",
        //         JSON.stringify(response.data.user)
        //     );

        // alert("Login successful!");
        
        navigation.replace("MainApp");

        // } catch (error) {

        //     console.log(
        //         "Login error:",
        //         error.response?.data || error.message
        //     );

        //     alert(
        //         error.response?.data?.message ||
        //         "Invalid email or password."
        //     );

        // } finally {


        // }
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
                    contentContainerStyle={styles.scroll}
                    keyboardShouldPersistTaps="handled"
                >

                    {/* BACK BUTTON */}

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
                                name="shield"
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
                        Welcome Back
                    </Text>

                    <Text style={styles.subtitle}>
                        Login to manage your services
                        {"\n"}
                        and bookings.
                    </Text>


                    {/* FORM */}

                    <View style={styles.form}>

                        {/* EMAIL */}

                        <Text style={styles.label}>
                            Email or Mobile Number
                        </Text>

                        <View style={styles.inputContainer}>

                            <MaterialCommunityIcons
                                name="account-outline"
                                size={22}
                                color={COLORS.textSecondary}
                            />

                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Enter email or mobile"
                                placeholderTextColor="#697386"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                style={styles.input}
                            />

                        </View>


                        {/* PASSWORD */}

                        <View style={styles.passwordHeader}>

                            <Text style={styles.label}>
                                Password
                            </Text>

                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate(
                                        "ForgotPassword"
                                    )
                                }
                            >
                                <Text style={styles.forgotText}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.inputContainer}>

                            <MaterialCommunityIcons
                                name="lock-outline"
                                size={22}
                                color={COLORS.textSecondary}
                            />

                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Enter password"
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
                                    size={22}
                                    color={COLORS.textSecondary}
                                />
                            </TouchableOpacity>

                        </View>


                        {/* LOGIN */}

                        <View style={styles.loginButton}>

                            <AppButton
                                title="Login"
                                onPress={handleLogin}
                            />

                        </View>


                        {/* DIVIDER */}

                        <View style={styles.dividerContainer}>

                            <View style={styles.divider} />

                            <Text style={styles.orText}>
                                OR
                            </Text>

                            <View style={styles.divider} />

                        </View>


                        {/* GOOGLE */}

                        <TouchableOpacity
                            style={styles.googleButton}
                            activeOpacity={0.8}
                        >

                            <Text style={styles.googleG}>
                                G
                            </Text>

                            <Text style={styles.googleText}>
                                Continue with Google
                            </Text>

                        </TouchableOpacity>


                        {/* REGISTER */}

                        <View style={styles.registerContainer}>

                            <Text style={styles.registerText}>
                                Don't have a provider account?
                            </Text>

                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("Register")
                                }
                            >
                                <Text style={styles.registerLink}>
                                    Create Account
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
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 35,
    },


    /* BACK */

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


    /* LOGO */

    logoSection: {
        alignItems: "center",
        marginTop: 20,
    },

    logo: {
        width: 64,
        height: 64,
        borderRadius: 18,

        alignItems: "center",
        justifyContent: "center",
    },

    logoText: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "800",
        letterSpacing: 1.5,
        marginTop: 10,
    },

    providerText: {
        color: COLORS.gold,
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 2,
        marginTop: 3,
    },


    /* TITLE */

    title: {
        color: COLORS.white,
        fontSize: 27,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 25,
    },

    subtitle: {
        color: COLORS.textSecondary,
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        marginTop: 7,
    },


    /* FORM */

    form: {
        marginTop: 28,
    },

    label: {
        color: COLORS.text,
        fontSize: 13,
        fontWeight: "600",
        marginBottom: 8,
    },

    inputContainer: {
        height: 54,

        backgroundColor: "#0D1529",

        borderWidth: 1,
        borderColor: COLORS.border,

        borderRadius: 12,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 15,

        marginBottom: 20,
    },

    input: {
        flex: 1,

        color: COLORS.white,

        fontSize: 14,

        marginLeft: 10,

        paddingVertical: 0,
    },


    /* PASSWORD */

    passwordHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    forgotText: {
        color: COLORS.gold,
        fontSize: 12,
        fontWeight: "600",
    },


    /* LOGIN */

    loginButton: {
        marginTop: 3,
    },


    /* DIVIDER */

    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 24,
    },

    divider: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.border,
    },

    orText: {
        color: COLORS.textSecondary,
        fontSize: 11,
        marginHorizontal: 15,
    },


    /* GOOGLE */

    googleButton: {
        height: 54,

        borderRadius: 12,

        borderWidth: 1,
        borderColor: COLORS.border,

        backgroundColor: "#0D1529",

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    googleG: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "700",
        marginRight: 10,
    },

    googleText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "600",
    },


    /* REGISTER */

    registerContainer: {
        alignItems: "center",
        marginTop: 28,
    },

    registerText: {
        color: COLORS.textSecondary,
        fontSize: 13,
    },

    registerLink: {
        color: COLORS.gold,
        fontSize: 14,
        fontWeight: "700",
        marginTop: 7,
    },

});

export default LoginScreen;