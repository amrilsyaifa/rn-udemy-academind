import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = (props) => {
  return (
    <FlatList
      style={styles.listItem}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          onItemPressed={() => props.onPressDeleted(info.item.key)}
          placeImage={info.item.image}
        /> // map hanya dapat di fungsikan di dalam sebuah object tidak bisa array
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
  },
});

export default placeList;
