import React, { useRef, useState } from "react";

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

const OTPVerificationScreen = ({ navigation }) => {

    const [otp, setOtp] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    const inputs = useRef([]);

    const handleChange = (value, index) => {

        const newOtp = [...otp];

        newOtp[index] = value;

        setOtp(newOtp);

        if (
            value &&
            index < otp.length - 1
        ) {
            inputs.current[index + 1]?.focus();
        }
    };


    const handleKeyPress = (event, index) => {

        if (
            event.nativeEvent.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {
            inputs.current[index - 1]?.focus();
        }
    };


    const verifyOTP = () => {
        navigation.navigate("ResetPassword");
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
                    contentContainerStyle={styles.scroll}
                    keyboardShouldPersistTaps="handled"
                >

                    {/* BACK */}

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
                                name="shield-key-outline"
                                size={42}
                                color={COLORS.white}
                            />

                        </LinearGradient>

                    </View>


                    {/* TITLE */}

                    <Text style={styles.title}>
                        Verify OTP
                    </Text>

                    <Text style={styles.subtitle}>
                        We've sent a 6-digit verification code
                        {"\n"}
                        to your registered mobile number.
                    </Text>


                    {/* OTP */}

                    <View style={styles.otpContainer}>

                        {otp.map((digit, index) => (

                            <TextInput
                                key={index}

                                ref={(ref) => {
                                    inputs.current[index] = ref;
                                }}

                                value={digit}

                                onChangeText={(value) =>
                                    handleChange(
                                        value.replace(/[^0-9]/g, "").slice(-1),
                                        index
                                    )
                                }

                                onKeyPress={(event) =>
                                    handleKeyPress(event, index)
                                }

                                keyboardType="number-pad"

                                maxLength={1}

                                style={styles.otpInput}

                                selectionColor={COLORS.gold}
                            />

                        ))}

                    </View>


                    {/* TIMER */}

                    <Text style={styles.resendText}>
                        Didn't receive the code?
                    </Text>

                    <TouchableOpacity>
                        <Text style={styles.resendLink}>
                            Resend OTP
                        </Text>
                    </TouchableOpacity>


                    {/* VERIFY */}

                    <View style={styles.buttonContainer}>

                        <AppButton
                            title="Verify OTP"
                            onPress={verifyOTP}
                        />

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


    iconWrapper: {
        alignItems: "center",

        marginTop: 60,
    },

    iconContainer: {
        width: 90,
        height: 90,

        borderRadius: 28,

        alignItems: "center",
        justifyContent: "center",

        elevation: 10,
    },


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


    /* OTP */

    otpContainer: {
        flexDirection: "row",

        justifyContent: "space-between",

        marginTop: 35,
    },

    otpInput: {
        width: 48,
        height: 55,

        borderRadius: 12,

        backgroundColor: "#0D1529",

        borderWidth: 1,
        borderColor: COLORS.border,

        color: COLORS.white,

        fontSize: 21,

        fontWeight: "700",

        textAlign: "center",
    },


    /* RESEND */

    resendText: {
        color: COLORS.textSecondary,

        fontSize: 13,

        textAlign: "center",

        marginTop: 25,
    },

    resendLink: {
        color: COLORS.gold,

        fontSize: 14,

        fontWeight: "700",

        textAlign: "center",

        marginTop: 7,
    },


    /* BUTTON */

    buttonContainer: {
        marginTop: 28,
    },

});

export default OTPVerificationScreen;