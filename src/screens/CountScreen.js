import React, {useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return ( 
    <View>
      <Button title='Increment' onPress={() => setCount(count+1)}/>
      <Button title='Decrement' onPress={() => setCount(count-1)}/>
      <Text>Counnt is: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24
  }
});

export default CounterScreen;
