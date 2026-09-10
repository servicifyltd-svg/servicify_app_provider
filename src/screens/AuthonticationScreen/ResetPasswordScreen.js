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

const ResetPasswordScreen = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const handleResetPassword = () => {
        // API call will be connected later.

        navigation.replace("Login");
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
                        Create New Password
                    </Text>

                    <Text style={styles.subtitle}>
                        Your new password must be different
                        {"\n"}
                        from your previous password.
                    </Text>


                    {/* FORM */}

                    <View style={styles.form}>

                        {/* PASSWORD */}

                        <Text style={styles.label}>
                            New Password
                        </Text>

                        <View style={styles.inputContainer}>

                            <MaterialCommunityIcons
                                name="lock-outline"
                                size={22}
                                color={COLORS.textSecondary}
                            />

                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Enter new password"
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


                        {/* PASSWORD REQUIREMENTS */}

                        <View style={styles.requirements}>

                            <PasswordRule
                                valid={password.length >= 8}
                                text="At least 8 characters"
                            />

                            <PasswordRule
                                valid={/[A-Z]/.test(password)}
                                text="One uppercase letter"
                            />

                            <PasswordRule
                                valid={/[0-9]/.test(password)}
                                text="One number"
                            />

                            <PasswordRule
                                valid={/[!@#$%^&*]/.test(password)}
                                text="One special character"
                            />

                        </View>


                        {/* CONFIRM PASSWORD */}

                        <Text style={styles.label}>
                            Confirm New Password
                        </Text>

                        <View style={styles.inputContainer}>

                            <MaterialCommunityIcons
                                name="lock-check-outline"
                                size={22}
                                color={COLORS.textSecondary}
                            />

                            <TextInput
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholder="Confirm new password"
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
                                    size={22}
                                    color={COLORS.textSecondary}
                                />
                            </TouchableOpacity>

                        </View>


                        {/* RESET BUTTON */}

                        <View style={styles.buttonContainer}>

                            <AppButton
                                title="Reset Password"
                                onPress={handleResetPassword}
                            />

                        </View>


                        {/* LOGIN */}

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


/* PASSWORD RULE */

const PasswordRule = ({ valid, text }) => {
    return (
        <View style={styles.rule}>

            <MaterialCommunityIcons
                name={
                    valid
                        ? "check-circle"
                        : "circle-outline"
                }
                size={16}
                color={
                    valid
                        ? COLORS.green
                        : COLORS.textSecondary
                }
            />

            <Text
                style={[
                    styles.ruleText,
                    valid && styles.ruleValid,
                ]}
            >
                {text}
            </Text>

        </View>
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
        marginTop: 55,
    },

    iconContainer: {
        width: 90,
        height: 90,

        borderRadius: 28,

        alignItems: "center",
        justifyContent: "center",

        elevation: 10,
    },


    /* TITLE */

    title: {
        color: COLORS.white,

        fontSize: 26,

        fontWeight: "700",

        textAlign: "center",

        marginTop: 27,
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
        marginTop: 30,
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

        marginBottom: 12,
    },

    input: {
        flex: 1,

        color: COLORS.white,

        fontSize: 14,

        marginLeft: 10,

        paddingVertical: 0,
    },


    /* REQUIREMENTS */

    requirements: {
        backgroundColor: "#0A1020",

        borderRadius: 10,

        padding: 12,

        marginBottom: 20,

        borderWidth: 1,

        borderColor: COLORS.border,
    },

    rule: {
        flexDirection: "row",

        alignItems: "center",

        marginVertical: 3,
    },

    ruleText: {
        color: COLORS.textSecondary,

        fontSize: 12,

        marginLeft: 7,
    },

    ruleValid: {
        color: COLORS.green,
    },


    /* BUTTON */

    buttonContainer: {
        marginTop: 12,
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

export default ResetPasswordScreen;