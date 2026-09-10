import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../../style/ProfileStyles";

const BusinessInformationScreen = ({ navigation }) => {

    const [businessName, setBusinessName] =
        useState("");

    const [category, setCategory] =
        useState("");

    const [experience, setExperience] =
        useState("");

    const [description, setDescription] =
        useState(
            ""
        );

    const [status, setStatus] = useState("pending");

    const saveChanges = () => {
        Alert.alert(
            "Success",
            "Business information updated successfully."
        );
    };

    return (
        <View style={styles.container}>

            {/* ================= HEADER ================= */}

            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={18}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>
                    Business Information
                </Text>

                <View style={{ width: 46 }} />

            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* BUSINESS DETAILS  */}

                <Text style={styles.sectionTitle}>
                    Business Details
                </Text>


                {/* Business Name */}

                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Business Name
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="store-outline"
                            size={21}
                            color="#A855F7"
                        />

                        <TextInput
                            value={businessName}
                            onChangeText={setBusinessName}
                            placeholder="Enter service name (e.g., Plumbing Services)"
                            placeholderTextColor="#697386"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* Service Category */}

                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Service Category
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="briefcase-outline"
                            size={21}
                            color="#A855F7"
                        />

                        <TextInput
                            value={category}
                            onChangeText={setCategory}
                            placeholder="Enter service category (e.g., Home Services)"
                            placeholderTextColor="#697386"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* Experience */}

                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Experience
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="calendar-check-outline"
                            size={21}
                            color="#A855F7"
                        />

                        <TextInput
                            value={experience}
                            onChangeText={setExperience}
                            placeholder="Example: 5 Years"
                            placeholderTextColor="#697386"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* ================= DESCRIPTION ================= */}

                <Text style={styles.label}>
                    Business Description
                </Text>

                <View style={styles.textAreaContainer}>

                    <MaterialCommunityIcons
                        name="text-box-outline"
                        size={22}
                        color="#A855F7"
                    />

                    <TextInput
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        numberOfLines={5}
                        placeholder="Describe your business in short..."
                        placeholderTextColor="#697386"
                        style={styles.textArea}
                    />

                </View>


                {/* ================= STATUS ================= */}

                <Text style={styles.sectionTitle}>
                    Business Status
                </Text>

                <View style={styles.statusCard}>

                    <View style={styles.statusIcon}>

                        <MaterialCommunityIcons
                            name={status === "pending" ? "clock-outline" : "check-circle-outline"}
                            size={28}
                            color={status === "pending" ? "#F59E0B" : "#10B981"}
                        />

                    </View>


                    <View style={{ flex: 1 }}>

                        <Text style={styles.statusTitle}>
                            {status === "pending" ? " Verification Pending" : "Verification Successful"}
                        </Text>

                        <Text style={styles.statusText}>
                            Your business verification is pending.
                        </Text>

                    </View>


                    <Text style={styles.verified}>
                        {status === "pending" ? "Pending" : "Verified"}
                    </Text>

                </View>


                {/*SAVE BUTTON  */}

                <TouchableOpacity
                    style={styles.button}
                    onPress={saveChanges}
                    activeOpacity={0.8}
                >

                    <Text style={styles.buttonText}>
                        Save
                    </Text>

                </TouchableOpacity>

            </ScrollView>

        </View>
    );
};

export default BusinessInformationScreen;