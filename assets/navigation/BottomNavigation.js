import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../src/HomeScreen';
import CartScreen from '../views/screens/CartScreen';
import COLORS from '../src/color';
import FavoritesScreen from '../views/screens/FavoritesScreen';
import previousOrders from '../views/screens/previousOrders';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {

    return (

        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 55,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                showLabel: false,
                activeTintColor: COLORS.nude11,
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-filled" color={COLORS.nude3} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="previousOrders"
                component={previousOrders}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="local-mall" color={COLORS.nude3} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                height: 60,
                                width: 60,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: COLORS.white,
                                borderColor: COLORS.nude3,
                                borderWidth: 2,
                                borderRadius: 30,
                                top: -25,
                                elevation: 5,
                            }}>
                            <Icon name="search" color={COLORS.nude3} size={28} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="favorite" color={COLORS.nude3} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="shopping-cart" color={COLORS.nude3} size={28} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
};

export default BottomNavigator;
