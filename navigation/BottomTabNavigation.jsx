import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Chat, Location, Profile, Successful, Failed } from "../screens";
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from "../constants/theme";
import TopTab from "./TopTab";
const Tab = createBottomTabNavigator();
const tabBarStyle = {
    padding: 20,
    borderRadius: 20,
    height: 80,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20
}
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor='#EB6A58'
            tabBarStyle={true}
            headerShown={false}
            inactiveColor='#3e2465'
            BarStyle={{ paddingBottom: 48 }}
        >
            <Tab.Screen
                name="Home" component={Home} options={
                    {
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name={focused ? "grid" : "grid-outline"}
                                color={focused ? COLORS.red : COLORS.gray}
                                size={26}
                            />
                        ),
                    }
                }
            />
            <Tab.Screen
                name="Location" component={Location} options={
                    {
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name={focused ? "location" : "location-outline"}
                                color={focused ? COLORS.red : COLORS.gray}
                                size={26}
                            />
                        ),
                    }
                }
            />
            <Tab.Screen
                name="Chat" component={Failed} options={
                    {
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                                color={focused ? COLORS.red : COLORS.gray}
                                size={26}
                            />
                        ),
                    }
                }
            />
            <Tab.Screen
                name="Profile" component={TopTab} options={
                    {
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name={focused ? "person" : "person-outline"}
                                color={focused ? COLORS.red : COLORS.gray}
                                size={26}
                            />
                        ),
                    }
                }
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation