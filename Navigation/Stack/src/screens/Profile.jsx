import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile = ({navigation, route}) => {
  // we get all the inputs passed from other screen to this using route (route contains other information also)
  // the input passed is present in route.params

  const {id, name} = route.params;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: '500', marginBottom: 10}}>
        Profile
      </Text>
      <Text style={{fontSize: 10, fontWeight: '500', marginBottom: 10}}>
        id: {id}
      </Text>
      <Text style={{fontSize: 10, fontWeight: '500', marginBottom: 10}}>
        name: {name}
      </Text>
      <Button
        title="Search"
        onPress={() => {
          navigation.navigate('Search');
        }}></Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
