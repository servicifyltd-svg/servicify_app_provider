import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    TextInput
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../../style/ProfileStyles";


const ServiceAreaScreen = ({ navigation }) => {

    const [radius, setRadius] = useState(10);
    const [addService, setAddService] = useState(false);
    const [areaName, setAreaName] = useState("");
    const [areas, setAreas] = useState([]);


    // ADD AREA

    const addArea = () => {
        Alert.alert(
            "Add Service Area",
            "Area selection will open here."
        );
    };


    // REMOVE AREA

    const removeArea = (area) => {

        setAreas(
            areas.filter(item => item !== area)
        );

    };


    // ===============================
    // SAVE
    // ===============================

    const saveServiceArea = () => {

        if (areas.length === 0) {

            Alert.alert(
                "No Service Area",
                "Please add at least one service area."
            );

            return;
        }

        Alert.alert(
            "Saved",
            "Service area updated successfully."
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
                    Service Area
                </Text>


                <View style={{ width: 46 }} />

            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* ================= MAP CARD ================= */}

                <View style={styles.mapCard}>

                    <MaterialCommunityIcons
                        name="map-marker-radius"
                        size={55}
                        color="#A855F7"
                    />


                    <Text style={styles.mapTitle}>
                        Your Service Coverage
                    </Text>


                    <Text style={styles.mapText}>
                        You currently serve customers within
                        {` ${radius} km`} of your location.
                    </Text>

                </View>


                {/* ================= RADIUS ================= */}

                <Text style={styles.sectionTitle}>
                    Service Radius
                </Text>


                <View style={styles.radiusCard}>

                    {[5, 10, 15, 20, 25].map((item) => {

                        const active = radius === item;

                        return (

                            <TouchableOpacity
                                key={item}
                                style={[
                                    styles.radiusButton,
                                    active &&
                                    styles.activeRadius,
                                ]}
                                onPress={() =>
                                    setRadius(item)
                                }
                                activeOpacity={0.8}
                            >

                                <Text
                                    style={[
                                        styles.radiusText,
                                        active &&
                                        styles.activeRadiusText,
                                    ]}
                                >
                                    {item} km
                                </Text>

                            </TouchableOpacity>

                        );

                    })}

                </View>


                {/* ================= SERVICE AREAS HEADER ================= */}

                <View style={styles.areaHeader}>

                    <Text style={styles.sectionTitle}>
                        Service Areas
                    </Text>


                    <TouchableOpacity
                        onPress={addArea}
                        activeOpacity={0.7}
                    >

                    </TouchableOpacity>

                </View>


                {/* ================= AREA LIST ================= */}

                {areas.length === 0 ? (

                    <View style={styles.noAreaContainer}>
                        <Text style={styles.noAreaText}>
                            No service areas added yet.
                        </Text>
                    </View>

                ) : (

                    areas.map((area) => (

                        <View
                            key={area}
                            style={styles.areaCard}
                        >

                            <View style={styles.areaIcon}>

                                <MaterialCommunityIcons
                                    name="map-marker"
                                    size={22}
                                    color="#A855F7"
                                />

                            </View>


                            <Text style={styles.areaName}>
                                {area}
                            </Text>


                            <TouchableOpacity
                                onPress={() =>
                                    removeArea(area)
                                }
                                activeOpacity={0.7}
                            >

                                <MaterialCommunityIcons
                                    name="close-circle-outline"
                                    size={23}
                                    color="#EF4444"
                                />

                            </TouchableOpacity>

                        </View>

                    )))}

                {/* ================= Add input field to add service area ================= */}
                {addService && (
                    <View style={styles.addAreaContainer}>
                        <TextInput
                            style={styles.addAreaInput}
                            placeholder="Enter area name"
                            value={areaName}
                            onChangeText={setAreaName}
                        />
                        <TouchableOpacity
                            style={styles.addAreaButton}
                            onPress={() => {
                                if (areaName.trim() !== "") {
                                    setAreas([...areas, areaName.trim()]);
                                    setAreaName("");
                                    setAddService(false);
                                }
                            }}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.addAreaButtonText}>
                                Add Area
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
                {/* ================= SAVE BUTTON ================= */}
                {!addService && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={saveServiceArea}
                        activeOpacity={0.8}
                    >

                        <Text style={styles.buttonText} onPress={() => setAddService(true)}>
                            + Add Area
                        </Text>

                    </TouchableOpacity>
                )}
            </ScrollView>

        </View>
    );
};


export default ServiceAreaScreen;