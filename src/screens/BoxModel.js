import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen =() => {
  return (
  <View style={styles.view}>
    <View style={styles.textOne} />
    <View style={styles.textTwo} />
    <View style={styles.textThree} />
  </View>
  )
};

const styles = StyleSheet.create({
  textOne: {
    fontSize: 24,
    borderWidth: 1,
    height: 50,
    width: 50,
    borderColor: 'red',
    backgroundColor: 'orange'
  },
  textTwo: {
    fontSize: 24,
    borderWidth: 1,
    height: 50,
    width: 50,
    borderColor: 'red',
    alignSelf: 'flex-end',
    backgroundColor: 'blue',
    // ...StyleSheet.absoluteFillObject,
  },
  textThree: {
    fontSize: 24,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'green'
  },
  view: {
    borderWidth: 3,
    borderColor: 'black',
    height: 100,
    flexDirection: 'row',
    top: 20,
    justifyContent: 'space-between'
  }
});

export default BoxScreen;