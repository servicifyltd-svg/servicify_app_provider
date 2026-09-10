import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Image,
    Alert,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = ({ navigation }) => {

    const user = {
        name: "Rahul Birajdar",
        role: "Service Provider",
        rating: 5.0.toFixed(1),
        reviews: 0,
        profileComplete: 15,
        profileImage: null,
        verified: false,
    };


    // ==============================
    // MENU CLICK
    // ==============================

    const handleMenu = (screen) => {
        navigation.navigate(screen);
    };


    // ==============================
    // LOGOUT
    // ==============================

    const handleLogout = () => {

        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Logout",
                    style: "destructive",
                    onPress: () => {
                        console.log("User logged out");

                        // Example:
                        // AsyncStorage.removeItem("token");

                        navigation.replace("Login");
                    },
                },
            ]
        );
    };


    return (
        <View style={styles.container}>

            <StatusBar
                barStyle="light-content"
                backgroundColor="#020814"
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >

                {/* ==================================
                    HEADER
                ================================== */}

                <View style={styles.header}>

                    <Text style={styles.headerTitle}>
                        Profile
                    </Text>

                    <TouchableOpacity
                        style={styles.settingsButton}
                        onPress={() =>
                            handleMenu("Settings")
                        }
                    >
                        <MaterialCommunityIcons
                            name="cog-outline"
                            size={27}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>

                </View>


                {/* ==================================
                    PROFILE HEADER
                ================================== */}

                <View style={styles.profileHeader}>

                    <View style={styles.profileImageContainer}>

                        {user.profileImage ? (

                            <Image
                                source={{
                                    uri: user.profileImage,
                                }}
                                style={styles.profileImage}
                            />

                        ) : (

                            <MaterialCommunityIcons
                                name="account"
                                size={75}
                                color="#B8C0D4"
                            />

                        )}

                        {user.verified && (

                            <View style={styles.verifiedBadge}>

                                <MaterialCommunityIcons
                                    name="check"
                                    size={18}
                                    color="#FFFFFF"
                                />

                            </View>

                        )}

                    </View>


                    <View style={styles.profileInfo}>

                        <Text style={styles.name}>
                            {user.name}
                        </Text>

                        <Text style={styles.role}>
                            {user.role}
                        </Text>


                        <View style={styles.ratingContainer}>

                            <Text style={styles.star}>
                                ★
                            </Text>

                            <Text style={styles.rating}>
                                {user.rating}
                            </Text>

                            <View
                                style={styles.ratingDivider}
                            />

                            <Text style={styles.reviews}>
                                {user.reviews} Reviews
                            </Text>

                        </View>

                    </View>

                </View>


                {/* ==================================
                    PROFILE COMPLETION
                ================================== */}

                <TouchableOpacity
                    style={styles.completeCard}
                    onPress={() =>
                        handleMenu("PersonalInformation")
                    }
                    activeOpacity={0.8}
                >

                    <View style={styles.completeIcon}>

                        <MaterialCommunityIcons
                            name="account-check-outline"
                            size={34}
                            color="#A855F7"
                        />

                    </View>


                    <View style={styles.completeInfo}>

                        <Text style={styles.completeTitle}>
                            Complete your profile
                        </Text>

                        <Text style={styles.completeSubtitle}>
                            {user.profileComplete}% complete
                        </Text>


                        <View style={styles.progressBackground}>

                            <View
                                style={[
                                    styles.progress,
                                    {
                                        width:
                                            `${user.profileComplete}%`,
                                    },
                                ]}
                            />

                        </View>

                    </View>


                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={28}
                        color="#AAB4CC"
                    />

                </TouchableOpacity>


                {/* ==================================
                    ACCOUNT
                ================================== */}

                <Text style={styles.groupTitle}>
                    ACCOUNT
                </Text>

                <View style={styles.menuCard}>

                    <MenuItem
                        icon="account-outline"
                        iconColor="#A855F7"
                        title="Personal Information"
                        onPress={() =>
                            handleMenu(
                                "PersonalInformation"
                            )
                        }
                    />

                    <MenuItem
                        icon="store-outline"
                        iconColor="#3B82F6"
                        title="Business Information"
                        onPress={() =>
                            handleMenu(
                                "BusinessInformation"
                            )
                        }
                    />

                    <MenuItem
                        icon="file-document-outline"
                        iconColor="#F59E0B"
                        title="Documents"
                        onPress={() =>
                            handleMenu("Documents")
                        }
                    />

                    <MenuItem
                        icon="credit-card-outline"
                        iconColor="#22C55E"
                        title="Bank Details"
                        onPress={() =>
                            handleMenu("BankDetails")
                        }
                        last
                    />

                </View>


                {/* ==================================
                    WORK SETTINGS
                ================================== */}

                <Text style={styles.groupTitle}>
                    WORK SETTINGS
                </Text>

                <View style={styles.menuCard}>

                    <MenuItem
                        icon="clock-outline"
                        iconColor="#A855F7"
                        title="Availability"
                        onPress={() =>
                            handleMenu("Availability")
                        }
                    />

                    <MenuItem
                        icon="map-marker-outline"
                        iconColor="#EF4444"
                        title="Service Area"
                        onPress={() =>
                            handleMenu("ServiceArea")
                        }
                    />

                    <MenuItem
                        icon="star-outline"
                        iconColor="#FBBF24"
                        title="Reviews"
                        onPress={() =>
                            handleMenu("Reviews")
                        }
                        last
                    />

                </View>


                {/* ==================================
                    APP SETTINGS
                ================================== */}

                <Text style={styles.groupTitle}>
                    APP SETTINGS
                </Text>

                <View style={styles.menuCard}>

                    <MenuItem
                        icon="bell-outline"
                        iconColor="#FBBF24"
                        title="Notifications"
                        onPress={() =>
                            handleMenu("Notifications")
                        }
                    />

                    <MenuItem
                        icon="help-circle-outline"
                        iconColor="#3B82F6"
                        title="Help & Support"
                        onPress={() =>
                            handleMenu("HelpSupport")
                        }
                    />

                    <MenuItem
                        icon="shield-check-outline"
                        iconColor="#22C55E"
                        title="Privacy Policy"
                        onPress={() =>
                            handleMenu("PrivacyPolicy")
                        }
                    />

                    <MenuItem
                        icon="file-document-outline"
                        iconColor="#A855F7"
                        title="Terms & Conditions"
                        onPress={() =>
                            handleMenu("TermsConditions")
                        }
                        last
                    />

                </View>


                {/* ==================================
                    LOGOUT
                ================================== */}

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={handleLogout}
                    activeOpacity={0.8}
                >

                    <MaterialCommunityIcons
                        name="logout"
                        size={25}
                        color="#FF4B4B"
                    />

                    <Text style={styles.logoutText}>
                        Logout
                    </Text>

                </TouchableOpacity>


            </ScrollView>

        </View>
    );
};


// ==============================================
// MENU ITEM COMPONENT
// ==============================================

const MenuItem = ({
    icon,
    iconColor,
    title,
    onPress,
    last,
}) => {

    return (

        <TouchableOpacity
            style={[
                styles.menuItem,
                !last && styles.menuBorder,
            ]}
            onPress={onPress}
            activeOpacity={0.7}
        >

            <View
                style={[
                    styles.menuIcon,
                    {
                        backgroundColor:
                            iconColor + "18",
                    },
                ]}
            >

                <MaterialCommunityIcons
                    name={icon}
                    size={24}
                    color={iconColor}
                />

            </View>


            <Text style={styles.menuTitle}>
                {title}
            </Text>


            <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color="#AAB4CC"
            />

        </TouchableOpacity>
    );
};


export default ProfileScreen;


// =================================================
// STYLES
// =================================================

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#020814",
    },

    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 30,
        paddingTop:
            StatusBar.currentHeight || 10,
    },


    // ================= HEADER =================

    header: {
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    headerTitle: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "700",
    },

    settingsButton: {
        width: 48,
        height: 48,
        borderRadius: 15,
        backgroundColor: "#091225",
        borderWidth: 1,
        borderColor: "#263551",
        alignItems: "center",
        justifyContent: "center",
    },


    // ================= PROFILE =================

    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        marginBottom: 18,
    },

    profileImageContainer: {
        width: 112,
        height: 112,
        borderRadius: 56,
        backgroundColor: "#17112E",
        borderWidth: 2,
        borderColor: "#A855F7",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    profileImage: {
        width: 108,
        height: 108,
        borderRadius: 54,
    },

    verifiedBadge: {
        position: "absolute",
        right: -2,
        bottom: 2,
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: "#22C55E",
        borderWidth: 3,
        borderColor: "#020814",
        alignItems: "center",
        justifyContent: "center",
    },

    profileInfo: {
        flex: 1,
        marginLeft: 18,
    },

    name: {
        color: "#FFFFFF",
        fontSize: 21,
        fontWeight: "700",
    },

    role: {
        color: "#AAB4CC",
        fontSize: 15,
        marginTop: 5,
    },

    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 9,
    },

    star: {
        color: "#FBBF24",
        fontSize: 20,
        marginRight: 6,
    },

    rating: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },

    ratingDivider: {
        width: 1,
        height: 20,
        backgroundColor: "#526078",
        marginHorizontal: 10,
    },

    reviews: {
        color: "#AAB4CC",
        fontSize: 14,
    },


    // ================= COMPLETE PROFILE =================

    completeCard: {
        minHeight: 100,
        backgroundColor: "#071020",
        borderWidth: 1,
        borderColor: "#263551",
        borderRadius: 18,
        padding: 14,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 22,
    },

    completeIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#17112E",
        borderWidth: 1,
        borderColor: "#6D28D9",
        alignItems: "center",
        justifyContent: "center",
    },

    completeInfo: {
        flex: 1,
        marginLeft: 14,
    },

    completeTitle: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },

    completeSubtitle: {
        color: "#AAB4CC",
        fontSize: 13,
        marginTop: 5,
        marginBottom: 8,
    },

    progressBackground: {
        height: 6,
        backgroundColor: "#263551",
        borderRadius: 5,
        overflow: "hidden",
    },

    progress: {
        height: 6,
        backgroundColor: "#A855F7",
        borderRadius: 5,
    },


    // ================= GROUP =================

    groupTitle: {
        color: "#AAB4CC",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 9,
        marginLeft: 3,
    },

    menuCard: {
        backgroundColor: "#071020",
        borderWidth: 1,
        borderColor: "#263551",
        borderRadius: 18,
        paddingHorizontal: 12,
        marginBottom: 20,
        overflow: "hidden",
    },


    // ================= MENU ITEM =================

    menuItem: {
        minHeight: 62,
        flexDirection: "row",
        alignItems: "center",
    },

    menuBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "#17243A",
    },

    menuIcon: {
        width: 42,
        height: 42,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    menuTitle: {
        flex: 1,
        color: "#FFFFFF",
        fontSize: 15,
        marginLeft: 13,
    },


    // ================= LOGOUT =================

    logoutButton: {
        height: 58,
        borderRadius: 17,
        borderWidth: 1.5,
        borderColor: "#EF3131",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        marginBottom: 10,
    },

    logoutText: {
        color: "#FF4B4B",
        fontSize: 17,
        fontWeight: "700",
        marginLeft: 10,
    },

});