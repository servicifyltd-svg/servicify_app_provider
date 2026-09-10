import React from "react";

import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/colors";

import AppButton from "../components/AppButton";

const { width } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
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

            {/* HEADER */}

            <View style={styles.header}>

                <View style={styles.logoContainer}>

                    <LinearGradient
                        colors={[COLORS.gold, COLORS.primary]}
                        style={styles.logo}
                    >
                        <MaterialCommunityIcons
                            name="shield"
                            size={26}
                            color={COLORS.white}
                        />
                    </LinearGradient>

                    <View>
                        <Text style={styles.logoText}>
                            SERVICIFY
                        </Text>

                        <Text style={styles.providerText}>
                            PROVIDER
                        </Text>
                    </View>

                </View>

                <TouchableOpacity style={styles.menuButton}>
                    <MaterialCommunityIcons
                        name="dots-vertical"
                        size={23}
                        color={COLORS.white}
                    />
                </TouchableOpacity>

            </View>


            {/* PROVIDER IMAGE */}

            <View style={styles.imageContainer}>

                <View style={styles.glow} />

                {/* WRENCH */}

                <View
                    style={[
                        styles.toolIcon,
                        styles.toolLeft,
                    ]}
                >
                    <MaterialCommunityIcons
                        name="wrench"
                        size={27}
                        color={COLORS.gold}
                    />
                </View>

                {/* ELECTRIC */}

                <View
                    style={[
                        styles.toolIcon,
                        styles.toolRight,
                    ]}
                >
                    <MaterialCommunityIcons
                        name="flash"
                        size={29}
                        color={COLORS.gold}
                    />
                </View>


                {/* PIPE */}

                <View
                    style={[
                        styles.toolIcon,
                        styles.toolBottomLeft,
                    ]}
                >
                    <MaterialCommunityIcons
                        name="pipe"
                        size={27}
                        color={COLORS.gold}
                    />
                </View>


                {/* PAINT */}

                <View
                    style={[
                        styles.toolIcon,
                        styles.toolBottomRight,
                    ]}
                >
                    <MaterialCommunityIcons
                        name="format-paint"
                        size={27}
                        color={COLORS.gold}
                    />
                </View>


                {/* IMAGE */}

                <Image
                    source={require("../assets/images/app.png")}
                    style={styles.providerImage}
                    resizeMode="contain"
                />

            </View>


            {/* CONTENT */}

            <View style={styles.content}>

                <Text style={styles.title}>
                    Welcome back! 👋
                </Text>

                <Text style={styles.description}>
                    Manage your services, bookings,
                    {"\n"}
                    and grow your business.
                </Text>


                {/* GET STARTED */}

                <AppButton
                    title="Get Started"
                    onPress={() => navigation.navigate("Register")}
                />


                {/* LOGIN */}

                <TouchableOpacity
                    style={styles.accountButton}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.accountText}>
                        I already have an account
                    </Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    );
};


const styles = StyleSheet.create({

    container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        paddingHorizontal: 16,
    },

    header: {
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    logo: {
        width: 45,
        height: 45,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },

    logoText: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "800",
        letterSpacing: 1,
    },

    providerText: {
        color: COLORS.gold,
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 1,
        marginTop: 2,
    },

    menuButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#0A1020",
        alignItems: "center",
        justifyContent: "center",
    },


    /* IMAGE */

    imageContainer: {
        height: width * 0.92,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    glow: {
        position: "absolute",
        width: width * 0.65,
        height: width * 0.65,
        borderRadius: width,
        backgroundColor: "#4C1D95",
        opacity: 0.25,
    },

    providerImage: {
        width: width * 0.99,
        height: width * 0.99,
        zIndex: 2,
        marginTop: "40%",
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 0,
    },


    /* TOOLS */

    toolIcon: {
        position: "absolute",
        width: 55,
        height: 55,
        borderRadius: 30,

        backgroundColor: "#101A31",

        borderWidth: 1,
        borderColor: "#55431D",

        alignItems: "center",
        justifyContent: "center",

        zIndex: 3,
    },

    toolLeft: {
        left: 20,
        top: "27%",
    },

    toolRight: {
        right: 20,
        top: "27%",
    },

    toolBottomLeft: {
        left: 40,
        bottom: 60,
    },

    toolBottomRight: {
        right: 30,
        bottom: 65,
    },


    /* CONTENT */

    content: {
        flex: 1,
        alignItems: "center",
        paddingTop: 5,
    },

    title: {
        color: COLORS.white,
        fontSize: 23,
        fontWeight: "700",
        textAlign: "center",
    },

    description: {
        color: COLORS.textSecondary,
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        marginTop: 7,
        marginBottom: 22,
    },

    accountButton: {
        width: "100%",
        height: 50,
        borderRadius: 12,

        borderWidth: 1,
        borderColor: "#697086",

        alignItems: "center",
        justifyContent: "center",

        marginTop: 10,
    },

    accountText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: "500",
    },

});

export default WelcomeScreen;