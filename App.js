import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default class App extends Component {
  state = {
    placeName: '',
    places: [],
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
    this.setState((prevState) => {
      return {
        places: prevState.places.concat(prevState.placeName), // concat() berfungsi untuk menggabungkan array dari places dengan placeName
        placeName: '',
      };
    });
  };
  render() {
    const placeOutput = this.state.places.map((place, index) => <Text key={index}>{place}</Text>); // map hanya dapat di fungsikan di dalam sebuah object tidak bisa array
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder='Input Text Here'
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button title='Add' style={styles.placeButton} onPress={this.placeSubmitHandler} />
        </View>
        <View>{placeOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
