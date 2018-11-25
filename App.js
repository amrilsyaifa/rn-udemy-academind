import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

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
    const placeOutput = this.state.places.map((place, index) => <ListItem key={index} placeName={place} />); // map hanya dapat di fungsikan di dalam sebuah object tidak bisa array
    return (
      <View style={styles.container}>
        <PlaceInput
          onPress={this.placeSubmitHandler}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <View style={styles.listItem}>{placeOutput}</View>
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
  listItem: {
    width: '100%',
  },
});
