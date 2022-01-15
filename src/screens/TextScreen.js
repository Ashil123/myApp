import React, {useReducer} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const reducer = (state, action) => {
  if (action.type === 'input') {
    return { ...state, name: action.payload };
  }
};

const TextScreen = () => {
  const [state, dispatch] = useReducer(reducer, { name: '' });
  const { name } = state;

  return (
  <View>
    <TextInput
     style={styles.input} 
     onChange={(e) => dispatch({ type: 'input', payload: e.target.value })} 
     name={'MyName'} 
     value={name}
     autoCapitalize='none'
     autoCorrect={false}
     placeholder='Type Name Will see Down'
    />
    <Text>The name is : {name}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    margin: 15,
    borderWidth: 1,
    borderColor: 'black',
    padding: 4,
    height: 30,
  }
});

export default TextScreen;
