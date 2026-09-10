import React from "react";

import {
    NavigationContainer,
} from "@react-navigation/native";

import {
    createNativeStackNavigator,
} from "@react-navigation/native-stack";

import MainTabNavigator from "./MainApp/MainTabNavigator";

// AuthenticationScreens
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/AuthonticationScreen//LoginScreen";
import RegisterScreen from "../screens/AuthonticationScreen//RegisterScreen";
import ForgotPasswordScreen from "../screens/AuthonticationScreen//ForgotPasswordScreen";
import OTPVerificationScreen from "../screens/AuthonticationScreen//OTPVerificationScreen";
import ResetPasswordScreen from "../screens/AuthonticationScreen//ResetPasswordScreen";

// Main Screens
import DashboardScreen from "../screens/DashboardScreen";
import BookingsScreen from "../screens/BookingScreen/BookingsScreen";
import ServicesScreen from "../screens/ServiceScreen/ServicesScreen";
import EarningsScreen from "../screens/EarningsScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

// Booking Screens
import BookingDetailsScreen from "../screens/BookingScreen/BookingDetailsScreen";
import BookingRequestScreen from "../screens/BookingScreen/BookingRequestScreen";
import BookingsHistoryScreen from "../screens/BookingScreen/BookingsHistoryScreen";

// Service Screens
import AddServiceScreen from "../screens/ServiceScreen//AddServiceScreen";
// import EditServiceScreen from "../screens/ServiceScreen/EditServiceScreen";

// Profile Screens
// import AvailabilityScreen from "../screens/AvailabilityScreen";
import NotificationsScreen from "../screens/ProfileScreen/NotificationsScreen";
import HelpSupportScreen from "../screens/ProfileScreen/HelpSupportScreen";
import PersonalInformationScreen from "../screens/ProfileScreen/PersonalInformationScreen";
import BusinessInformationScreen from "../screens/ProfileScreen/BusinessInformationScreen";
import DocumentsScreen from "../screens/ProfileScreen/DocumentsScreen";
import BankDetailsScreen from "../screens/ProfileScreen/BankDetailsScreen";
import AvailabilityScreen from "../screens/ProfileScreen/AvailabilityScreen";
import ServiceAreaScreen from "../screens/ProfileScreen/ServiceAreaScreen";
import ReviewsScreen from "../screens/ProfileScreen/ReviewsScreen";
import UploadDocumentScreen from "../screens/ProfileScreen/UploadDocumentScreen";

// Wallet / Earnings
// import WalletScreen from "../screens/WalletScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerShown: false,
                    animation: "slide_from_right",
                }}
            >

                {/* =========================
                    AUTHENTICATION
                ========================== */}

                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                />

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />

                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                />

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordScreen}
                />

                <Stack.Screen
                    name="OTPVerification"
                    component={OTPVerificationScreen}
                />

                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPasswordScreen}
                />


                {/* =========================
                    MAIN APP
                ========================== */}

                <Stack.Screen
                    name="MainApp"
                    component={MainTabNavigator}
                />


                {/* =========================
                    MAIN TAB SCREENS
                    These are also registered
                    for direct navigation.
                ========================== */}

                <Stack.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                />

                <Stack.Screen
                    name="Bookings"
                    component={BookingsScreen}
                />

                <Stack.Screen
                    name="Services"
                    component={ServicesScreen}
                />

                <Stack.Screen
                    name="Earnings"
                    component={EarningsScreen}
                />

                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                />


                {/* =========================
                    BOOKING
                ========================== */}

                <Stack.Screen
                    name="BookingRequest"
                    component={BookingRequestScreen}
                />

                <Stack.Screen
                    name="BookingDetails"
                    component={BookingDetailsScreen}
                />

                <Stack.Screen
                    name="BookingsHistory"
                    component={BookingsHistoryScreen}
                />


                {/* =========================
                    SERVICES
                ========================== */}

                <Stack.Screen
                    name="AddService"
                    component={AddServiceScreen}
                />

                {/* <Stack.Screen
                    name="EditService"
                    component={EditServiceScreen}
                /> */}

                {/* WALLET */}
                {/* <Stack.Screen
                    name="Wallet"
                    component={WalletScreen}
                /> */}

                {/* Profile */}

                <Stack.Screen
                    name="PersonalInformation"
                    component={PersonalInformationScreen}
                />

                <Stack.Screen
                    name="BusinessInformation"
                    component={BusinessInformationScreen}
                />

                <Stack.Screen
                    name="Documents"
                    component={DocumentsScreen}
                />

                <Stack.Screen
                    name="BankDetails"
                    component={BankDetailsScreen}
                />

                <Stack.Screen
                    name="Availability"
                    component={AvailabilityScreen}
                />

                <Stack.Screen
                    name="ServiceArea"
                    component={ServiceAreaScreen}
                />

                <Stack.Screen
                    name="Reviews"
                    component={ReviewsScreen}
                />

                <Stack.Screen
                    name="Notifications"
                    component={NotificationsScreen}
                />

                <Stack.Screen
                    name="HelpSupport"
                    component={HelpSupportScreen}
                />

                <Stack.Screen
                    name="UploadDocument"
                    component={UploadDocumentScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;