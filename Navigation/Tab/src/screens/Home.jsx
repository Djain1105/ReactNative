import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  // this will receive props and we will only take navigation
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>
        Home
      </Text>
      <Button
        title="Profile"
        onPress={() => {
          // there are options available other than navigate like push, pop, replace (check them in documentation)
          navigation.navigate('Profile', {id: 1, name: 'dj'});                  // sending data to other screen as object (id, name, etc.)
        }}></Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
