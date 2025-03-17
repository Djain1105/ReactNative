// check Stack, Tab, Drawer Navigation Documentation
// Install dependencies for Stack as:
// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

// we are creating a separate folder for screens (named it as src)
// creating 3 files in it. Home, Profile, Search

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';

// Creating Stack Navigator
const Stack = createNativeStackNavigator();

const MyStack = () => {
  // by default, the topmost screen will get render when app gets start
  // if you want to provide the screen to be rendered at start, do as:
  // <Stack.Navigator initialRouteName='Home'>
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'yellow',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home Screen', headerStyle: {backgroundColor: 'cyan'}}}
      />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
