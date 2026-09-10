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

import COLORS from "../../constants/colors";

import AppButton from "../../components/AppButton";

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");

    const handleContinue = () => {
        navigation.navigate("OTPVerification");
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


                    {/* ICON */}

                    <View style={styles.iconWrapper}>

                        <LinearGradient
                            colors={[
                                COLORS.gold,
                                COLORS.primary,
                            ]}
                            style={styles.iconContainer}
                        >
                            <MaterialCommunityIcons
                                name="lock-reset"
                                size={42}
                                color={COLORS.white}
                            />
                        </LinearGradient>

                    </View>


                    {/* TITLE */}

                    <Text style={styles.title}>
                        Forgot Password?
                    </Text>

                    <Text style={styles.subtitle}>
                        Don't worry. It happens to everyone.
                        {"\n"}
                        Enter your registered email or mobile
                        {"\n"}
                        number to reset your password.
                    </Text>


                    {/* FORM */}

                    <View style={styles.form}>

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


                        {/* CONTINUE */}

                        <View style={styles.buttonContainer}>

                            <AppButton
                                title="Send OTP"
                                onPress={handleContinue}
                            />

                        </View>


                        {/* BACK TO LOGIN */}

                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() =>
                                navigation.navigate("Login")
                            }
                        >

                            <MaterialCommunityIcons
                                name="arrow-left"
                                size={18}
                                color={COLORS.gold}
                            />

                            <Text style={styles.loginText}>
                                Back to Login
                            </Text>

                        </TouchableOpacity>

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


    /* ICON */

    iconWrapper: {
        alignItems: "center",
        marginTop: 70,
    },

    iconContainer: {
        width: 90,
        height: 90,
        borderRadius: 28,

        alignItems: "center",
        justifyContent: "center",

        shadowColor: COLORS.primary,
        shadowOpacity: 0.35,
        shadowRadius: 15,
        elevation: 10,
    },


    /* TITLE */

    title: {
        color: COLORS.white,

        fontSize: 27,
        fontWeight: "700",

        textAlign: "center",

        marginTop: 28,
    },

    subtitle: {
        color: COLORS.textSecondary,

        fontSize: 14,

        lineHeight: 21,

        textAlign: "center",

        marginTop: 8,
    },


    /* FORM */

    form: {
        marginTop: 35,
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
    },

    input: {
        flex: 1,

        color: COLORS.white,

        fontSize: 14,

        marginLeft: 10,

        paddingVertical: 0,
    },


    /* BUTTON */

    buttonContainer: {
        marginTop: 25,
    },


    /* LOGIN */

    loginButton: {
        flexDirection: "row",

        alignItems: "center",

        justifyContent: "center",

        marginTop: 25,
    },

    loginText: {
        color: COLORS.gold,

        fontSize: 14,

        fontWeight: "600",

        marginLeft: 6,
    },

});

export default ForgotPasswordScreen;