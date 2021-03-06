import React, { useState, useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': 
    return {...state, count: state.count + action.payload };
    case 'decrement': 
    return {...state, count: state.count - action.payload };
    default:
    return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const { count } = state;
  return ( 
    <View>
      <Button title='Increment' onPress={() => dispatch({ type: 'increment', payload: 1 })}/>
      <Button title='Decrement' onPress={() => dispatch({ type: 'decrement', payload: 1 })}/>
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
