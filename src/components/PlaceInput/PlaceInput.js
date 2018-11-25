import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: '',
  };
  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val,
    });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      // trim berfungsi untuk memeriksa karakter, jika di input '' maka di lanjut return, jika tidak lanjut ke setState
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
      placeName: '',
    });
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder='Input Text Here'
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button title='Add' style={styles.placeButton} onPress={this.placeSubmitHandler} />
      </View>
    );
  }
}

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

export default PlaceInput;
