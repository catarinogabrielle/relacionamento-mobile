import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Foundation, AntDesign, Feather } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
const ColorTheme = Colors['Theme'];

import Feed from "../pages/Feed";
import Info from '../pages/Info';
import AddNew from '../pages/AddNew';
import Message from '../pages/Message';
import Profile from '../pages/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Feed} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function AppRoutes() {
    return (
        <Tab.Navigator initialRouteName="Feed" screenOptions={{
            "tabBarHideOnKeyboard": true,
            "tabBarActiveTintColor": ColorTheme.Azul,
            "tabBarShowLabel": false,
            "tabBarStyle": [
                {
                    "display": "flex"
                },
                null
            ]
        }}>
            <Tab.Screen
                name="Feed"
                component={StackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <Foundation name="home" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="menu" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name="AddNew"
                component={AddNew}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <AntDesign name="plussquareo" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="message-circle" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome name="user" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default AppRoutes;