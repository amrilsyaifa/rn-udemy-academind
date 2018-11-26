import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
  state = {
    places: [],
  };

  placeAddedHandler = (placeName) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.concat({ key: '' + Math.random(), value: placeName }), // concat() berfungsi untuk menggabungkan array dari places dengan placeName
      };
    });
  };
  placeDeletedHandler = (key) => {
    // index id yang di passing dari list item
    this.setState((prevState) => {
      return {
        places: prevState.places.filter((place) => {
          // Fungsi filter() adalah untuk membuat array baru berisi elemen yang lolos pengecekan di dalam fungsi yang telah di buat., contoh fungsi ini yang tidak sama dengan index yang akan di ambil
          return place.key !== key; // jika tidak sama dengan index yang di terima maka di lanjut. jika sama tidak di simpan di dalam state
        }),
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onPressDeleted={this.placeDeletedHandler} />
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
});
