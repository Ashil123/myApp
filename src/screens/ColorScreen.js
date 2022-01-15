import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Button styles={styles.button} title='Add a colors' onPress={() => {
        setColor([...colors, randomRgb()]);
      }}/>
      
      <FlatList 
      keyExtractor={(item) => item}
      data={colors}
      renderItem={({ item }) => {
        return <View style={{ width: 75, height: 75, backgroundColor: item }} />
      }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  button: {
    fontSize: 24
  },
  backGround: {
    height: 100,
    width: 100,
    backgroundColor: randomRgb(),
  }
});

export default ColorScreen;
