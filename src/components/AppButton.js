import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import COLORS from "../constants/colors";

const AppButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.container}
        >
            <LinearGradient
                colors={[COLORS.gold, COLORS.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 54,
        borderRadius: 12,
        overflow: "hidden",
    },

    gradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    text: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "700",
    },
});

export default AppButton;