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

const BankDetailsScreen = ({ navigation }) => {

    const [addBank, setAddBank] =
        useState(false);

    const [accountName, setAccountName] =
        useState("");

    const [accountNumber, setAccountNumber] =
        useState("");

    const [ifsc, setIfsc] =
        useState("");

    const [bankName, setBankName] =
        useState("");

    const [addDetails, setAddDetails] = useState(false);
    
    const saveBank = () => {
        Alert.alert(
            "Success",
            "Bank details updated successfully."
        );
        setAddDetails(true);

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
                        size={25}
                        color="#FFFFFF"
                    />

                </TouchableOpacity>


                <Text style={styles.headerTitle}>
                    Bank Details
                </Text>


                <View style={{ width: 46 }} />

            </View>


            {addBank ? (<ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* ================= BANK HEADER ================= */}

                <View style={styles.bankHeader}>

                    <View style={styles.bankIcon}>

                        <MaterialCommunityIcons
                            name="bank"
                            size={35}
                            color="#A855F7"
                        />

                    </View>


                    <View style={{ flex: 1 }}>

                        <Text style={styles.bankTitle}>
                            Payout Account
                        </Text>

                        <Text style={styles.bankSubtitle}>
                            Your earnings will be transferred here.
                        </Text>

                    </View>

                </View>


                {/* ================= ACCOUNT HOLDER ================= */}

                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Account Holder Name
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="account-outline"
                            size={21}
                            color="#A855F7"
                        />

                        <TextInput
                            value={accountName}
                            onChangeText={setAccountName}
                            placeholder="Enter account holder name"
                            placeholderTextColor="#697386"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* ================= ACCOUNT NUMBER ================= */}

                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Account Number
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="credit-card-outline"
                            size={21}
                            color="#A855F7"
                        />

                        <TextInput
                            value={accountNumber}
                            onChangeText={setAccountNumber}
                            placeholder="Enter account number"
                            placeholderTextColor="#697386"
                            keyboardType="numeric"
                            secureTextEntry
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* ================= IFSC ================= */}

                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        IFSC Code
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="bank-outline"
                            size={21}
                            color="#A855F7"
                        />

                        <TextInput
                            value={ifsc}
                            onChangeText={setIfsc}
                            placeholder="Enter IFSC code"
                            placeholderTextColor="#697386"
                            autoCapitalize="characters"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* ================= BANK NAME ================= */}

                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>
                        Bank Name
                    </Text>

                    <View style={styles.inputContainer}>

                        <MaterialCommunityIcons
                            name="bank"
                            size={21}
                            color="#A855F7"
                        />

                        <TextInput
                            value={bankName}
                            onChangeText={setBankName}
                            placeholder="Enter bank name"
                            placeholderTextColor="#697386"
                            style={styles.input}
                        />

                    </View>

                </View>


                {/* ================= SECURITY ================= */}

                {addDetails && (
                    <View style={styles.secureCard}>

                        <MaterialCommunityIcons
                            name="shield-lock-outline"
                            size={25}
                            color="#22C55E"
                        />

                        <Text style={styles.secureText}>
                            Your bank information is securely stored.
                        </Text>
                    </View>
                )}


                {/* ================= SAVE ================= */}

                <TouchableOpacity
                    style={styles.button}
                    onPress={saveBank}
                    activeOpacity={0.8}
                >

                    <Text style={styles.buttonText}>
                        Save Bank Details
                    </Text>

                </TouchableOpacity>

            </ScrollView>) : (
                <View style={styles.noBankContainer}>
                    <MaterialCommunityIcons
                        name="bank"
                        size={60}
                        color="#A855F7"
                    />
                    <Text style={styles.noBankText}>
                        No bank details available.
                    </Text>
                </View>
            )}

            {/* ================= ADD BANK BUTTON ================= */}
            {!addBank && (
                <TouchableOpacity
                    style={styles.addBankButton}
                    onPress={() => setAddBank(true)}
                    activeOpacity={0.8}
                >
                    <Text style={styles.addBankButtonText}>
                        Add Bank Details
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default BankDetailsScreen;