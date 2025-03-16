import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  useColorScheme,
  ScrollView,
} from 'react-native';
import React from 'react';

const App = () => {
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';
  console.log('Theme: ', theme);

  const backgroundColor = isDarkMode ? 'black' : 'White';
  const textColor = isDarkMode ? 'white' : 'black';

  return (
    // we use safe area view so that the UI automatically adjusts the screen size
    // Pressable is used as button in React Native

    <ScrollView contentContainerStyle={{gap: 10}} vertical>
      <SafeAreaView
        style={[styles.container, {backgroundColor: backgroundColor}]}>
        <Text style={[styles.text, {color: textColor}]}>Hi guys</Text>
        <Pressable
          onPress={() => {
            console.log('Button Pressed');
          }}>
          <Text>Press Me</Text>
        </Pressable>
      </SafeAreaView>

      <View style={styles.viewContainer1}></View>
      <View style={styles.viewContainer2}></View>
      <View style={styles.viewContainer3}></View>
    </ScrollView>
  );
};

export default App;

// Using CSS
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    gap: 10, // provided to parent element. It provides equalt amount of space between each item in the parent. for individual items, use margin and padding as usual
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    fontcolor: 'white',
  },
  viewContainer1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  viewContainer2: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
  },
  viewContainer3: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
});
