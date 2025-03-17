import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [text, settext] = useState('');
  const [submittedText, setsubmittedText] = useState('');

  const handleSubmit = () => {
    setsubmittedText(text);
    settext('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey There!</Text>
      <TextInput                                      // Check documentation in react native
        placeholder="Enter a Text here..."
        style={styles.input}
        value={text}
        onChangeText={text => settext(text)}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {submittedText ? <Text>Result: {submittedText}</Text> : null}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
