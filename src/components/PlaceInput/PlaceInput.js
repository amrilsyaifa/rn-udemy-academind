import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const placeInput = (props) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      placeholder='Input Text Here'
      value={props.value}
      onChangeText={props.onChangeText}
    />
    <Button title='Add' style={styles.placeButton} onPress={props.onPress} />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});

export default placeInput;
