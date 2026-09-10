import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../../style/ProfileStyles";


const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];


const AvailabilityScreen = ({ navigation }) => {

    const [selectedDays, setSelectedDays] = useState([
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
    ]);

    const [startTime, setStartTime] =
        useState("09:00 AM");

    const [endTime, setEndTime] =
        useState("06:00 PM");

    const [breakStart, setBreakStart] =
        useState("01:00 PM");

    const [breakEnd, setBreakEnd] =
        useState("02:00 PM");


    // ===============================
    // TOGGLE WORKING DAY
    // ===============================

    const toggleDay = (day) => {

        if (selectedDays.includes(day)) {

            setSelectedDays(
                selectedDays.filter(
                    item => item !== day
                )
            );

        } else {

            setSelectedDays([
                ...selectedDays,
                day,
            ]);

        }
    };


    // ===============================
    // SAVE
    // ===============================

    const saveAvailability = () => {

        if (selectedDays.length === 0) {

            Alert.alert(
                "Select Working Day",
                "Please select at least one working day."
            );

            return;
        }

        Alert.alert(
            "Saved",
            "Your availability has been updated."
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
                    Availability
                </Text>


                <View style={{ width: 46 }} />

            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* ================= WORKING DAYS ================= */}

                <Text style={styles.sectionTitle}>
                    Working Days
                </Text>


                <View style={styles.daysContainer}>

                    {days.map((day) => {

                        const active =
                            selectedDays.includes(day);

                        return (

                            <TouchableOpacity
                                key={day}
                                onPress={() =>
                                    toggleDay(day)
                                }
                                activeOpacity={0.8}
                                style={[
                                    styles.day,
                                    active &&
                                    styles.activeDay,
                                ]}
                            >

                                <Text
                                    style={[
                                        styles.dayText,
                                        active &&
                                        styles.activeDayText,
                                    ]}
                                >
                                    {day.substring(0, 3)}
                                </Text>

                            </TouchableOpacity>

                        );

                    })}

                </View>


                {/* ================= WORKING HOURS ================= */}

                <Text style={styles.sectionTitle}>
                    Working Hours
                </Text>


                <View style={styles.timeRow}>

                    <TimeBox
                        label="Start Time"
                        value={startTime}
                        onPress={() => {

                            Alert.alert(
                                "Start Time",
                                "Time picker will open here."
                            );

                        }}
                    />


                    <TimeBox
                        label="End Time"
                        value={endTime}
                        onPress={() => {

                            Alert.alert(
                                "End Time",
                                "Time picker will open here."
                            );

                        }}
                    />

                </View>


                {/* ================= BREAK TIME ================= */}

                <Text style={styles.sectionTitle}>
                    Break Time
                </Text>


                <View style={styles.timeRow}>

                    <TimeBox
                        label="Start Time"
                        value={breakStart}
                        onPress={() => {

                            Alert.alert(
                                "Break Start",
                                "Time picker will open here."
                            );

                        }}
                    />


                    <TimeBox
                        label="End Time"
                        value={breakEnd}
                        onPress={() => {

                            Alert.alert(
                                "Break End",
                                "Time picker will open here."
                            );

                        }}
                    />

                </View>


                {/* ================= INFORMATION ================= */}

                <View style={styles.noteCard}>

                    <MaterialCommunityIcons
                        name="information-outline"
                        size={23}
                        color="#A855F7"
                    />

                    <Text style={styles.noteText}>
                        Customers can book your services only
                        during your available working hours.
                    </Text>

                </View>


                {/* ================= SAVE BUTTON ================= */}

                <TouchableOpacity
                    style={styles.button}
                    onPress={saveAvailability}
                    activeOpacity={0.8}
                >

                    <Text style={styles.buttonText}>
                        Save Availability
                    </Text>

                </TouchableOpacity>

            </ScrollView>

        </View>
    );
};


// =====================================================
// TIME BOX
// =====================================================

const TimeBox = ({
    label,
    value,
    onPress,
}) => {

    return (

        <TouchableOpacity
            style={styles.timeBox}
            onPress={onPress}
            activeOpacity={0.8}
        >

            <Text style={styles.timeLabel}>
                {label}
            </Text>


            <View style={styles.timeValueRow}>

                <MaterialCommunityIcons
                    name="clock-outline"
                    size={20}
                    color="#A855F7"
                />


                <Text style={styles.timeValue}>
                    {value}
                </Text>


                <MaterialCommunityIcons
                    name="chevron-down"
                    size={20}
                    color="#AAB4CC"
                />

            </View>

        </TouchableOpacity>

    );
};


export default AvailabilityScreen;