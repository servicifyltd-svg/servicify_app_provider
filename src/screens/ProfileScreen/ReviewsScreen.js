import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "../../style/ProfileStyles";


const reviews = [
    {
        name: "Sarah Johnson",
        rating: 5,
        date: "May 20, 2024",
        review:
            "Excellent service! Very professional and completed the cleaning perfectly.",
    },
    {
        name: "Michael Brown",
        rating: 5,
        date: "May 18, 2024",
        review:
            "Great experience. Fixed my AC quickly and explained everything clearly.",
    },
    {
        name: "David Wilson",
        rating: 4,
        date: "May 15, 2024",
        review:
            "Good service and arrived on time. Will book again.",
    },
    {
        name: "Emily Davis",
        rating: 5,
        date: "May 12, 2024",
        review:
            "Very helpful and professional provider.",
    },
];


const ReviewsScreen = ({ navigation }) => {

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
                    Reviews
                </Text>


                <View style={{ width: 46 }} />

            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                {/* ================= RATING SUMMARY ================= */}

                <View style={styles.ratingCard}>

                    <Text style={styles.ratingNumber}>
                        4.8
                    </Text>


                    <View style={styles.stars}>

                        {[1, 2, 3, 4, 5].map((star) => (

                            <Text
                                key={star}
                                style={styles.star}
                            >
                                ★
                            </Text>

                        ))}

                    </View>


                    <Text style={styles.totalReviews}>
                        Based on 128 reviews
                    </Text>

                </View>


                {/* ================= REVIEW LIST ================= */}

                {reviews.map((item, index) => (

                    <View
                        key={index}
                        style={styles.reviewCard}
                    >

                        {/* REVIEW HEADER */}

                        <View style={styles.reviewHeader}>

                            {/* AVATAR */}

                            <View style={styles.avatar}>

                                <MaterialCommunityIcons
                                    name="account"
                                    size={28}
                                    color="#AAB4CC"
                                />

                            </View>


                            {/* NAME + RATING */}

                            <View style={{ flex: 1 }}>

                                <Text style={styles.name}>
                                    {item.name}
                                </Text>


                                <View style={styles.starRow}>

                                    {[1, 2, 3, 4, 5].map(
                                        (star) => (

                                            <Text
                                                key={star}
                                                style={[
                                                    styles.smallStar,
                                                    {
                                                        color:
                                                            star <=
                                                            item.rating
                                                                ? "#FBBF24"
                                                                : "#465166",
                                                    },
                                                ]}
                                            >
                                                ★
                                            </Text>

                                        )
                                    )}

                                </View>

                            </View>


                            {/* DATE */}

                            <Text style={styles.date}>
                                {item.date}
                            </Text>

                        </View>


                        {/* REVIEW */}

                        <Text style={styles.reviewText}>
                            {item.review}
                        </Text>

                    </View>

                ))}

            </ScrollView>

        </View>
    );
};


export default ReviewsScreen;