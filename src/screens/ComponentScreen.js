import * as React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen  = () => {
  const developerName = 'Ashil'

  return (
  <View>
    <Text style={styles.TextStyle}>Sample First App</Text>
    <Text style={styles.subHeader}>This App is Created By - {developerName}</Text>
  </View>);
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 30,
    backgroundColor: 'gray',
    alignContent: 'center'
  },
  subHeader: {
    fontSize: 20,
    backgroundColor: '#007acc',
  },
});

export default ComponentScreen;
