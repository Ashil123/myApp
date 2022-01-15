import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button style={styles.button} onPress={() => onIncrease()} title={`Increase ${color}`}/>
      <Button style={styles.button} onPress={() => onDecrease()} title={`Increase ${color}`}/>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 22,
  }
});

export default ColorCounter;
