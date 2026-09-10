import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";

import styles from "../../style/ProfileStyles";


const UploadDocumentScreen = ({ navigation, route }) => {

    // Document name passed from DocumentsScreen
    const documentName =
        route?.params?.documentName || "Aadhaar Card";



    const [selectedFile, setSelectedFile] =
        useState(null);


    // ===============================
    // TAKE PHOTO
    // ===============================

    const takePhoto = async () => {
        try {
            const permission =
                await ImagePicker.requestCameraPermissionsAsync();

            if (!permission.granted) {
                Alert.alert(
                    "Camera Permission",
                    "Camera permission is required to take a document photo."
                );
                return;
            }

            const result =
                await ImagePicker.launchCameraAsync({
                    mediaTypes: ["images"],
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 0.8,
                });

            if (!result.canceled) {

                const image = result.assets[0];

                console.log("Camera image:", image);

                setSelectedFile(image);
            }

        } catch (error) {

            console.log("Camera error:", error);

            Alert.alert(
                "Camera Error",
                "Unable to open camera."
            );
        }
    };

    // CHOOSE FILE
    const chooseFile = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: [
                    "image/jpeg",
                    "image/png",
                    "application/pdf",
                ],
                copyToCacheDirectory: true,
                multiple: false,
            });

            if (!result.canceled) {

                const file = result.assets[0];

                console.log("Selected file:", file);

                setSelectedFile(file);

            }

        } catch (error) {

            console.log("File picker error:", error);

            Alert.alert(
                "File Error",
                "Unable to select the document."
            );
        }
    };


    // ===============================
    // SUBMIT
    // ===============================

    const submitDocument = () => {

        if (!selectedFile) {

            Alert.alert(
                "Select Document",
                "Please select a document first."
            );

            return;
        }


        Alert.alert(
            "Document Submitted",
            `${documentName} has been submitted for verification.`,
            [
                {
                    text: "OK",
                    onPress: () =>
                        navigation.goBack(),
                },
            ]
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
                        size={25}
                        color="#FFFFFF"
                    />

                </TouchableOpacity>


                <Text style={styles.headerTitle}>
                    Upload Document
                </Text>


                <View style={{ width: 46 }} />

            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* ================= DOCUMENT ICON ================= */}

                <View style={styles.uploadIconContainer}>

                    <MaterialCommunityIcons
                        name="file-document-outline"
                        size={55}
                        color="#A855F7"
                    />

                </View>


                {/* ================= TITLE ================= */}

                <Text style={styles.uploadTitle}>
                    Upload {documentName}
                </Text>


                <Text style={styles.uploadDescription}>
                    Upload a clear and valid copy of your{" "}
                    {documentName}. Make sure all details
                    are clearly visible.
                </Text>


                {/* ================= TAKE PHOTO ================= */}

                <TouchableOpacity
                    style={styles.uploadOption}
                    onPress={takePhoto}
                    activeOpacity={0.8}
                >

                    <View style={styles.uploadOptionIcon}>

                        <MaterialCommunityIcons
                            name="camera-outline"
                            size={27}
                            color="#A855F7"
                        />

                    </View>


                    <View style={{ flex: 1 }}>

                        <Text style={styles.uploadOptionTitle}>
                            Take Photo
                        </Text>

                        <Text style={styles.uploadOptionText}>
                            Use your camera to capture the document
                        </Text>

                    </View>


                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={24}
                        color="#AAB4CC"
                    />

                </TouchableOpacity>


                {/* ================= CHOOSE FILE ================= */}

                <TouchableOpacity
                    style={styles.uploadOption}
                    onPress={chooseFile}
                    activeOpacity={0.8}
                >

                    <View style={styles.uploadOptionIcon}>

                        <MaterialCommunityIcons
                            name="image-outline"
                            size={27}
                            color="#A855F7"
                        />

                    </View>


                    <View style={{ flex: 1 }}>

                        <Text style={styles.uploadOptionTitle}>
                            Choose File
                        </Text>

                        <Text style={styles.uploadOptionText}>
                            Select an image or PDF from your device
                        </Text>

                    </View>


                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={24}
                        color="#AAB4CC"
                    />

                </TouchableOpacity>


                {/* ================= SELECTED FILE ================= */}

                {selectedFile && (

                    <View style={styles.selectedFileCard}>

                        <MaterialCommunityIcons
                            name="file-check-outline"
                            size={25}
                            color="#22C55E"
                        />


                        <View style={{ flex: 1 }}>

                            <Text style={styles.selectedFileTitle}>
                                Document Selected
                            </Text>

                            <Text style={styles.selectedFileText}>
                                {selectedFile}
                            </Text>

                        </View>


                        <MaterialCommunityIcons
                            name="check-circle"
                            size={22}
                            color="#22C55E"
                        />

                    </View>

                )}


                {/* ================= REQUIREMENTS ================= */}

                <View style={styles.requirementCard}>

                    <MaterialCommunityIcons
                        name="information-outline"
                        size={23}
                        color="#A855F7"
                    />


                    <View style={{ flex: 1 }}>

                        <Text style={styles.requirementTitle}>
                            Document Requirements
                        </Text>


                        <Text style={styles.requirementText}>
                            • Document must be valid{"\n"}
                            • All information must be visible{"\n"}
                            • Image must be clear{"\n"}
                            • JPG, PNG or PDF supported{"\n"}
                            • Maximum file size: 5 MB
                        </Text>

                    </View>

                </View>


                {/* ================= SUBMIT ================= */}

                <TouchableOpacity
                    style={[
                        styles.button,
                        !selectedFile &&
                        styles.disabledButton,
                    ]}
                    onPress={submitDocument}
                    activeOpacity={0.8}
                >

                    <MaterialCommunityIcons
                        name="cloud-upload-outline"
                        size={21}
                        color="#FFFFFF"
                    />


                    <Text style={styles.buttonText}>
                        Submit Document
                    </Text>

                </TouchableOpacity>

            </ScrollView>

        </View>
    );
};


export default UploadDocumentScreen;