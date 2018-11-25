import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
  const placeOutput = props.places.map((place, index) => (
    <ListItem key={index} placeName={place} onItemPressed={() => props.onPressDeleted(index)} />
  )); // map hanya dapat di fungsikan di dalam sebuah object tidak bisa array
  return <View style={styles.listItem}>{placeOutput}</View>;
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
  },
});

export default placeList;
