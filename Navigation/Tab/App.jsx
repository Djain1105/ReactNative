// Firstly read Stack Navigation, all things are same here

// check Stack, Tab, Drawer Navigation Documentation
// Install dependencies for Bottom Tab as:
// npm install @react-navigation/native @react-navigation/bottom-tabs
// npm install react-native-screens react-native-safe-area-context

// library for icons (check doc for changes to be done)
// Edit android/app/build.gradle (NOT android/build.gradle) and add:
//   apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
// npm install --save react-native-vector-icons

// we are creating a separate folder for screens (named it as src)
// creating 3 files in it. Home, Profile, Search

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'; // google the vector icons (oblador)
import Feather from 'react-native-vector-icons/Feather';

// Creating Tab Navigator
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (
            {size, color}, // taking color defined globally as a prop
          ) => (
            <AntDesign name="home" size={30} color={color} /> // passing the color
          ), // same name used as imported
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="user" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
