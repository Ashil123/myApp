import * as React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const lists = [{
    name: 'Ashil',
    key: '1',
    age: 12
  }, {
    name: 'Antony',
    key: '2',
    age: 19
  }, {
    name: 'Ajith',
    key: '3',
    age: 6
  }, {
    name: 'Karthik',
    key: '4',
    age: 7
  }, {
    name: 'Surya',
    key: '5',
    age: 34
  }, {
    name: 'robin',
    key: '6',
    age: 22
  }, {
    name: 'Ammu',
    key: '7',
    age: 32
  }];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(list) => list.key}
      data={lists}
      renderItem={({ item }) => <Text style={styles.list}>{item.name} - Age {item.age}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    fontSize: 25,
    backgroundColor: 'aqua',
    marginVertical: '12px'
  }
});

export default ListScreen;
