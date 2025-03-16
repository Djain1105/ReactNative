import {FlatList, StyleSheet, Text, View, Image} from 'react-native';

// keep the id unique otherwise there will be error
const dummy = [
  {
    id: 1,
    name: 'divyansh',
    email: 'divyansh123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 2,
    name: 'anshika',
    email: 'anshika123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 3,
    name: 'deepak',
    email: 'deepak123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 4,
    name: 'ratnesh',
    email: 'ratnest123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 1,
    name: 'divyansh',
    email: 'divyansh123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 2,
    name: 'anshika',
    email: 'anshika123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 3,
    name: 'deepak',
    email: 'deepak123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 4,
    name: 'ratnesh',
    email: 'ratnest123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 1,
    name: 'divyansh',
    email: 'divyansh123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 2,
    name: 'anshika',
    email: 'anshika123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 3,
    name: 'deepak',
    email: 'deepak123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
  {
    id: 4,
    name: 'ratnesh',
    email: 'ratnest123@gmail.com',
    image:
      'https://images.unsplash.com/photo-1730466782483-98c27d88efca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList // Flat List is memory and performance efficient as it does not loads all the data at once in the memory (Scroll View loads all the data so not preferred or use for less data)
        data={dummy}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              style={{width: 40, height: 40, borderRadius: 50}}
              source={{uri: item.image}}
            />
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{height: 10}} />}
        numColumns={2} // using only 1 here as not much data :)
        columnWrapperStyle={{gap: 20}}
        // extraData={}                                    // here you pass that data on changing of which you want the visible data to render again
        // horizontal                                      // used to render data horizontally
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#dadada',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
