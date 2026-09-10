import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
} from "react-native";
import { useState } from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../../style/ProfileStyles";


const DocumentsScreen = ({ navigation }) => {

    const [status, setStatus] = useState("Upload");
    const uploadDocument = (documentName,) => {

        navigation.navigate("UploadDocument", {
            documentName: documentName,
        });

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
                    Documents
                </Text>


                <View style={{ width: 46 }} />

            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* ================= INFO CARD ================= */}

                <View style={styles.infoCard}>

                    <MaterialCommunityIcons
                        name="shield-check-outline"
                        size={32}
                        color="#A855F7"
                    />

                    <Text style={styles.infoTitle}>
                        Documents Verification
                    </Text>

                    <Text style={styles.infoText}>
                        Upload valid documents to verify your
                        provider account.
                    </Text>

                </View>


                {/* ================= DOCUMENTS ================= */}

                <DocumentItem
                    title="Aadhaar Card"
                    subtitle="Identity verification"
                    status={status}
                    icon="card-account-details-outline"
                    onPress={() =>
                        uploadDocument("Aadhaar Card")
                    }
                />


                <DocumentItem
                    title="PAN Card"
                    subtitle="Tax verification"
                    status={status}
                    icon="card-outline"
                    onPress={() =>
                        uploadDocument("PAN Card")
                    }
                />


                <DocumentItem
                    title="Business License"
                    subtitle="Business verification"
                    status={status}
                    icon="file-certificate-outline"
                    onPress={() =>
                        uploadDocument("Business License")
                    }
                />


                <DocumentItem
                    title="Address Proof"
                    subtitle="Address verification"
                    status={status}
                    icon="home-map-marker"
                    onPress={() =>
                        uploadDocument("Address Proof")
                    }
                />

            </ScrollView>

        </View>
    );
};


/* =========================================================
   DOCUMENT ITEM
========================================================= */

const DocumentItem = ({
    title,
    subtitle,
    status,
    icon,
    onPress,
}) => {

    const uploaded = status === "Uploaded";

    return (

        <TouchableOpacity
            style={styles.documentCard}
            onPress={onPress}
            activeOpacity={0.75}
        >

            {/* ICON */}

            <View style={styles.documentIcon}>

                <MaterialCommunityIcons
                    name={icon}
                    size={27}
                    color="#A855F7"
                />

            </View>


            {/* INFORMATION */}

            <View style={{ flex: 1 }}>

                <Text style={styles.documentTitle}>
                    {title}
                </Text>

                <Text style={styles.documentSubtitle}>
                    {subtitle}
                </Text>

            </View>


            {/* STATUS */}

            <View
                style={[
                    styles.statusBadge,
                    {
                        backgroundColor: uploaded
                            ? "#063B27"
                            : "#3B2810",
                    },
                ]}
            >

                <Text
                    style={{
                        color: uploaded
                            ? "#22C55E"
                            : "#FBBF24",
                        fontSize: 11,
                        fontWeight: "600",
                    }}
                >
                    {status}
                </Text>

            </View>


            {/* ARROW */}

            <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#AAB4CC"
            />

        </TouchableOpacity>

    );
};


export default DocumentsScreen;