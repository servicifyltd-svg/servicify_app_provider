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

const PersonalInformationScreen = ({ navigation }) => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");

    const saveChanges = () => {
        Alert.alert(
            "Success",
            "Personal information updated successfully.",
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

            {/* Header */}
            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={25}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>
                    Personal Information
                </Text>

                <View style={{ width: 46 }} />

            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* Profile Image */}
                <View style={{ alignItems: "center", marginBottom: 25 }}>

                    <View style={styles.profileCircle}>

                        <MaterialCommunityIcons
                            name="account"
                            size={60}
                            color="#A855F7"
                        />

                        <TouchableOpacity
                            style={styles.cameraButton}
                        >
                            <MaterialCommunityIcons
                                name="camera"
                                size={18}
                                color="#FFFFFF"
                            />
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.changePhoto}>
                        Change Profile Photo
                    </Text>

                </View>


                {/* Full Name */}
                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Full Name
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="account-outline"
                            size={21}
                            color="#697386"
                        />

                        <TextInput
                            value={fullName}
                            onChangeText={setFullName}
                            placeholder="Enter full name"
                            placeholderTextColor="#697386"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* Email */}
                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Email Address
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="email-outline"
                            size={21}
                            color="#697386"
                        />

                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter email"
                            placeholderTextColor="#697386"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* Mobile */}
                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Mobile Number
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="phone-outline"
                            size={21}
                            color="#697386"
                        />

                        <TextInput
                            value={mobile}
                            onChangeText={setMobile}
                            placeholder="Enter mobile number"
                            placeholderTextColor="#697386"
                            keyboardType="phone-pad"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* Address */}
                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Address
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="map-marker-outline"
                            size={21}
                            color="#697386"
                        />

                        <TextInput
                            value={address}
                            onChangeText={setAddress}
                            placeholder="Enter address"
                            placeholderTextColor="#697386"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* Save Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={saveChanges}
                    activeOpacity={0.8}
                >

                    <Text style={styles.buttonText}>
                        Save Changes
                    </Text>

                </TouchableOpacity>

            </ScrollView>

        </View>
    );
};

export default PersonalInformationScreen;