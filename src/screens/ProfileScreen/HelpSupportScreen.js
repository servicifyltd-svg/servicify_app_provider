import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../../constants/colors";

const faqs = [
    {
        question: "How do I accept a booking?",
        answer:
            "Open the Bookings section, select the new booking request, and tap Accept Booking.",
    },
    {
        question: "How do I add a new service?",
        answer:
            "Go to Services from the bottom navigation and tap the + button to create a new service.",
    },
    {
        question: "When will I receive my payment?",
        answer:
            "Payments are added to your provider balance after a booking is successfully completed. The actual payout schedule depends on your account settings.",
    },
    {
        question: "How can I change my availability?",
        answer:
            "Open your Profile and use the Availability switch. When unavailable, customers should not be able to create new bookings with you.",
    },
    {
        question: "How do I update my bank account?",
        answer:
            "Go to Profile → Bank & Payments and edit your payment information.",
    },
    {
        question: "How do I cancel a booking?",
        answer:
            "Open the booking details and select the cancellation option. Cancellation rules may apply.",
    },
];

const HelpSupportScreen = ({ navigation }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const [search, setSearch] = useState("");

    const filteredFaqs = faqs.filter((faq) =>
        faq.question
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const contactSupport = () => {
        Alert.alert(
            "Contact Support",
            "Support contact options will be connected later."
        );
    };

    const reportProblem = () => {
        Alert.alert(
            "Report a Problem",
            "The problem reporting form will be connected later."
        );
    };

    return (
        <View style={styles.container}>

            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.background}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.scroll}
            >

                {/* HEADER */}

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={() =>
                            navigation.goBack()
                        }
                    >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={23}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>
                        Help & Support
                    </Text>

                    <View style={styles.headerSpace} />

                </View>


                {/* HELP HERO */}

                <View style={styles.hero}>

                    <View style={styles.heroIcon}>

                        <MaterialCommunityIcons
                            name="headset"
                            size={35}
                            color={COLORS.primaryLight}
                        />

                    </View>

                    <Text style={styles.heroTitle}>
                        How can we help?
                    </Text>

                    <Text style={styles.heroSubtitle}>
                        Find answers or contact our support team.
                    </Text>

                </View>


                {/* SEARCH */}

                <View style={styles.searchContainer}>

                    <MaterialCommunityIcons
                        name="magnify"
                        size={21}
                        color={COLORS.textSecondary}
                    />

                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder="Search for help..."
                        placeholderTextColor="#697386"
                        style={styles.searchInput}
                    />

                    {search.length > 0 && (
                        <TouchableOpacity
                            onPress={() => setSearch("")}
                        >
                            <MaterialCommunityIcons
                                name="close-circle"
                                size={18}
                                color={COLORS.textSecondary}
                            />
                        </TouchableOpacity>
                    )}

                </View>


                {/* QUICK ACTIONS */}

                <Text style={styles.sectionTitle}>
                    Quick Help
                </Text>

                <View style={styles.quickRow}>

                    <QuickAction
                        icon="chat-outline"
                        title="Contact Support"
                        color="#A855F7"
                        onPress={contactSupport}
                    />

                    <QuickAction
                        icon="alert-circle-outline"
                        title="Report Problem"
                        color="#F5B82E"
                        onPress={reportProblem}
                    />

                    <QuickAction
                        icon="book-open-outline"
                        title="Guides"
                        color="#3B82F6"
                        onPress={() =>
                            Alert.alert(
                                "Guides",
                                "Provider guides will be added here."
                            )
                        }
                    />

                </View>


                {/* FAQ */}

                <View style={styles.faqHeader}>

                    <Text style={styles.sectionTitle}>
                        Frequently Asked Questions
                    </Text>

                    <Text style={styles.faqCount}>
                        {filteredFaqs.length}
                    </Text>

                </View>


                {filteredFaqs.map((faq, index) => {

                    const isOpen = openFaq === index;

                    return (
                        <View
                            key={faq.question}
                            style={[
                                styles.faqCard,
                                isOpen && styles.faqCardOpen,
                            ]}
                        >

                            <TouchableOpacity
                                style={styles.faqQuestion}
                                onPress={() =>
                                    setOpenFaq(
                                        isOpen ? null : index
                                    )
                                }
                            >

                                <View style={styles.questionIcon}>

                                    <Text style={styles.questionNumber}>
                                        {index + 1}
                                    </Text>

                                </View>

                                <Text style={styles.questionText}>
                                    {faq.question}
                                </Text>

                                <MaterialCommunityIcons
                                    name={
                                        isOpen
                                            ? "chevron-up"
                                            : "chevron-down"
                                    }
                                    size={21}
                                    color={COLORS.textSecondary}
                                />

                            </TouchableOpacity>


                            {isOpen && (

                                <View style={styles.answerContainer}>

                                    <View style={styles.answerLine} />

                                    <Text style={styles.answerText}>
                                        {faq.answer}
                                    </Text>

                                </View>

                            )}

                        </View>
                    );
                })}


                {/* NO RESULTS */}

                {filteredFaqs.length === 0 && (

                    <View style={styles.noResults}>

                        <MaterialCommunityIcons
                            name="help-circle-outline"
                            size={40}
                            color={COLORS.textSecondary}
                        />

                        <Text style={styles.noResultsTitle}>
                            No results found
                        </Text>

                        <Text style={styles.noResultsText}>
                            Try a different search term.
                        </Text>

                    </View>

                )}


                {/* CONTACT SUPPORT CARD */}

                <View style={styles.supportCard}>

                    <View style={styles.supportIcon}>

                        <MaterialCommunityIcons
                            name="headset"
                            size={25}
                            color={COLORS.white}
                        />

                    </View>

                    <View style={styles.supportInfo}>

                        <Text style={styles.supportTitle}>
                            Still need help?
                        </Text>

                        <Text style={styles.supportText}>
                            Our support team is here to help you.
                        </Text>

                    </View>

                    <TouchableOpacity
                        style={styles.contactButton}
                        onPress={contactSupport}
                    >

                        <Text style={styles.contactText}>
                            Contact
                        </Text>

                    </TouchableOpacity>

                </View>


                {/* APP INFORMATION */}

                <Text style={styles.sectionTitle}>
                    Information
                </Text>

                <View style={styles.infoCard}>

                    <InfoItem
                        icon="file-document-outline"
                        title="Terms & Conditions"
                        onPress={() =>
                            Alert.alert(
                                "Terms & Conditions",
                                "Terms and conditions will be displayed here."
                            )
                        }
                    />

                    <View style={styles.divider} />

                    <InfoItem
                        icon="shield-lock-outline"
                        title="Privacy Policy"
                        onPress={() =>
                            Alert.alert(
                                "Privacy Policy",
                                "Privacy policy will be displayed here."
                            )
                        }
                    />

                    <View style={styles.divider} />

                    <InfoItem
                        icon="information-outline"
                        title="About Servicify"
                        onPress={() =>
                            Alert.alert(
                                "Servicify",
                                "Servicify Provider App\nVersion 1.0.0"
                            )
                        }
                    />

                </View>


                <Text style={styles.version}>
                    Servicify Provider v1.0.0
                </Text>

            </ScrollView>

        </View>
    );
};


/* QUICK ACTION */

const QuickAction = ({
    icon,
    title,
    color,
    onPress,
}) => {

    return (
        <TouchableOpacity
            style={styles.quickAction}
            onPress={onPress}
            activeOpacity={0.8}
        >

            <View
                style={[
                    styles.quickIcon,
                    {
                        backgroundColor: color + "20",
                    },
                ]}
            >

                <MaterialCommunityIcons
                    name={icon}
                    size={22}
                    color={color}
                />

            </View>

            <Text style={styles.quickTitle}>
                {title}
            </Text>

        </TouchableOpacity>
    );
};


/* INFO ITEM */

const InfoItem = ({
    icon,
    title,
    onPress,
}) => {

    return (
        <TouchableOpacity
            style={styles.infoItem}
            onPress={onPress}
        >

            <View style={styles.infoIcon}>

                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={COLORS.textSecondary}
                />

            </View>

            <Text style={styles.infoTitle}>
                {title}
            </Text>

            <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={COLORS.textSecondary}
            />

        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    scroll: {
        paddingHorizontal: 16,
        paddingTop:
            StatusBar.currentHeight || 10,
        paddingBottom: 40,
    },


    /* HEADER */

    header: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerButton: {
        width: 42,
        height: 42,
        borderRadius: 13,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        alignItems: "center",
        justifyContent: "center",
    },

    headerTitle: {
        color: COLORS.white,
        fontSize: 17,
        fontWeight: "700",
    },

    headerSpace: {
        width: 42,
    },


    /* HERO */

    hero: {
        alignItems: "center",
        marginTop: 22,
        marginBottom: 20,
    },

    heroIcon: {
        width: 75,
        height: 75,
        borderRadius: 24,
        backgroundColor: "#7C3AED18",
        borderWidth: 1,
        borderColor: "#7C3AED35",
        alignItems: "center",
        justifyContent: "center",
    },

    heroTitle: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: "800",
        marginTop: 13,
    },

    heroSubtitle: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 5,
        textAlign: "center",
    },


    /* SEARCH */

    searchContainer: {
        height: 50,
        borderRadius: 13,
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 13,
    },

    searchInput: {
        flex: 1,
        color: COLORS.white,
        fontSize: 12,
        marginLeft: 9,
    },


    /* SECTION */

    sectionTitle: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "700",
        marginTop: 24,
        marginBottom: 11,
    },


    /* QUICK */

    quickRow: {
        flexDirection: "row",
        gap: 9,
    },

    quickAction: {
        flex: 1,
        backgroundColor: COLORS.card,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
        padding: 12,
        alignItems: "center",
    },

    quickIcon: {
        width: 42,
        height: 42,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    quickTitle: {
        color: COLORS.white,
        fontSize: 9,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 8,
    },


    /* FAQ */

    faqHeader: {
        flexDirection: "row",
        alignItems: "center",
    },

    faqCount: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginLeft: 7,
        marginTop: 14,
    },

    faqCard: {
        backgroundColor: COLORS.card,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: COLORS.border,
        marginBottom: 8,
        overflow: "hidden",
    },

    faqCardOpen: {
        borderColor: "#7C3AED45",
    },

    faqQuestion: {
        minHeight: 58,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
    },

    questionIcon: {
        width: 29,
        height: 29,
        borderRadius: 9,
        backgroundColor: "#7C3AED18",
        alignItems: "center",
        justifyContent: "center",
    },

    questionNumber: {
        color: COLORS.primaryLight,
        fontSize: 10,
        fontWeight: "800",
    },

    questionText: {
        flex: 1,
        color: COLORS.white,
        fontSize: 11,
        fontWeight: "600",
        marginHorizontal: 10,
    },

    answerContainer: {
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingBottom: 14,
    },

    answerLine: {
        width: 2,
        backgroundColor: COLORS.primary,
        borderRadius: 1,
        marginRight: 10,
    },

    answerText: {
        flex: 1,
        color: COLORS.textSecondary,
        fontSize: 10,
        lineHeight: 16,
    },


    /* NO RESULTS */

    noResults: {
        alignItems: "center",
        paddingVertical: 60,
    },

    noResultsTitle: {
        color: COLORS.white,
        fontSize: 15,
        fontWeight: "700",
        marginTop: 12,
    },

    noResultsText: {
        color: COLORS.textSecondary,
        fontSize: 10,
        marginTop: 5,
    },


    /* SUPPORT */

    supportCard: {
        backgroundColor: "#17122A",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#7C3AED35",
        padding: 14,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },

    supportIcon: {
        width: 45,
        height: 45,
        borderRadius: 13,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },

    supportInfo: {
        flex: 1,
        marginLeft: 10,
    },

    supportTitle: {
        color: COLORS.white,
        fontSize: 12,
        fontWeight: "700",
    },

    supportText: {
        color: COLORS.textSecondary,
        fontSize: 9,
        marginTop: 3,
    },

    contactButton: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 9,
    },

    contactText: {
        color: COLORS.white,
        fontSize: 9,
        fontWeight: "700",
    },


    /* INFORMATION */

    infoCard: {
        backgroundColor: COLORS.card,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.border,
        paddingHorizontal: 14,
    },

    infoItem: {
        height: 53,
        flexDirection: "row",
        alignItems: "center",
    },

    infoIcon: {
        width: 38,
        height: 38,
        borderRadius: 11,
        backgroundColor: "#FFFFFF08",
        alignItems: "center",
        justifyContent: "center",
    },

    infoTitle: {
        flex: 1,
        color: COLORS.white,
        fontSize: 11,
        fontWeight: "600",
        marginLeft: 10,
    },

    divider: {
        height: 1,
        backgroundColor: "#FFFFFF08",
    },


    /* VERSION */

    version: {
        color: "#4F586B",
        fontSize: 9,
        textAlign: "center",
        marginTop: 18,
    },

});

export default HelpSupportScreen;