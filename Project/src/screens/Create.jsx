import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Create = ({data, setdata}) => {
  const [itemName, setitemName] = useState('');
  const [stockAmt, setstockAmt] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemId, seteditItemId] = useState(null);

  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stockAmt,
    };

    setdata([...data, newItem]);
    setitemName('');
    setstockAmt('');
    setisEdit(false);
  };

  const deleteItemHandler = id => {
    setdata(data.filter(item => item.id !== id));
  };

  const editItemHandler = item => {
    setisEdit(true);
    setitemName(item.name);
    seteditItemId(item.id);
  };

  const updateItemHandler = () => {
    setdata(
      data.map(item =>
        item.id === editItemId
          ? {...item, name: itemName, stock: stockAmt}
          : item,
      ),
    );
    setitemName('');
    setstockAmt('');
    setisEdit(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an Item Name..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setitemName(item)}
      />
      <TextInput
        placeholder="Enter the Stock Amount..."
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmt}
        onChangeText={item => setstockAmt(item)}
      />

      <Pressable
        style={styles.addButton}
        onPress={() => (isEdit ? updateItemHandler() : addItemHandler())}>
        <Text style={styles.btnText}>{isEdit ? 'Edit Item' : 'Add Item'}</Text>
      </Pressable>

      <View style={{marginTop: 10}}>
        <Text style={styles.headingText}>All Items</Text>

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BF'},
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>

              <View style={{flexDirection: 'row', gap: 20}}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{gap: 10}}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#D7F6BFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  addButton: {
    backgroundColor: '#CABFEEFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 15,
  },
});
