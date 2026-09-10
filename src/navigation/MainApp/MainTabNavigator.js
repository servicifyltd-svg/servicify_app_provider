import React from "react";

import {
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import {
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import DashboardScreen from "../../screens/DashboardScreen";
import BookingsScreen from "../../screens/BookingScreen/BookingsScreen";
import ServicesScreen from "../../screens/ServiceScreen/ServicesScreen";
import EarningsScreen from "../../screens/EarningsScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";

import COLORS from "../../constants/colors";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor:
                    COLORS.primaryLight,
                tabBarInactiveTintColor:
                    COLORS.textSecondary,
                tabBarStyle: {
                    height: 68,
                    backgroundColor:
                        COLORS.background,
                    borderTopWidth: 1,
                    borderTopColor:
                        COLORS.border,
                    paddingTop: 7,
                    paddingBottom: 7,
                    elevation: 0,
                    shadowOpacity: 0,
                    marginBottom: 10,
                },

                tabBarLabelStyle: {
                    fontSize: 9,
                    fontWeight: "600",
                    marginTop: 2,
                },

                tabBarIcon: ({
                    focused,
                    color,
                    size,
                }) => {

                    let iconName;

                    switch (route.name) {

                        case "Home":
                            iconName = focused
                                ? "home"
                                : "home-outline";
                            break;

                        case "Bookings":
                            iconName = focused
                                ? "calendar-check"
                                : "calendar-check-outline";
                            break;

                        case "Services":
                            iconName = focused
                                ? "tools"
                                : "tools";
                            break;

                        case "Earnings":
                            iconName = focused
                                ? "wallet"
                                : "wallet-outline";
                            break;

                        case "Profile":
                            iconName = focused
                                ? "account"
                                : "account-outline";
                            break;

                        default:
                            iconName = "circle";
                    }

                    return (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={23}
                            color={color}
                        />
                    );
                },

            })}
        >

            {/* HOME */}

            <Tab.Screen
                name="Home"
                component={DashboardScreen}
                options={{
                    tabBarLabel: "Home",
                }}
            />


            {/* BOOKINGS */}

            <Tab.Screen
                name="Bookings"
                component={BookingsScreen}
                options={{
                    tabBarLabel: "Bookings",
                }}
            />


            {/* SERVICES */}

            <Tab.Screen
                name="Services"
                component={ServicesScreen}
                options={{
                    tabBarLabel: "Services",
                }}
            />


            {/* EARNINGS */}

            <Tab.Screen
                name="Earnings"
                component={EarningsScreen}
                options={{
                    tabBarLabel: "Earnings",
                }}
            />


            {/* PROFILE */}

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;