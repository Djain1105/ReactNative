import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllItems from './AllItems';
import Create from './Create';

const Home = () => {
  const [view, setview] = useState(0);
  const [data, setdata] = useState([
    {id: 1, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 2, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 3, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 4, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 5, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 6, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 7, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 8, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 9, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 10, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 11, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 12, name: 'wheat', stock: 5, unit: 'kg'},
    {id: 13, name: 'wheat', stock: 5, unit: 'kg'},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setview(0)}>
          <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 1 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setview(1)}>
          <Text style={[styles.btnText, view === 1 ? {color: 'white'} : null]}>
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 2 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setview(2)}>
          <Text style={[styles.btnText, view === 2 ? {color: 'white'} : null]}>
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter(item => item.stock < 20)} />}
      {view === 2 && <Create data={data} setdata={setdata} />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '4%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#72C37AFF',
  },
  btnText: {
    color: '#72C37AFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
