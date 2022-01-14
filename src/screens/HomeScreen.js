import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';

const HomeScreen = () => {
  return (<div style={{ width: '200px', height: '400px', background: 'gray', border: '4px dashed red' }}>
  <Button onPress={() => { console.log('Button Clickeddd' )}}
  accessibilityLabel="Learn more about this purple button"
   title="Learn More" style={styles.text} value={'ASHIL'}>HomeScreen</Button>
  <Text style={styles.text}>Menu</Text>
  <Text style={styles.text}>Login</Text>
  <Text style={styles.text}>LOGOUT</Text>
  </div>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
