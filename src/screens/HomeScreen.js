import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Button onPress={() => navigate('Components')}
        title="Click to See components" style={styles.button} />
      <Button onPress={() => navigate('List')}
        title="Get List Demo" style={styles.button} />
        <Button onPress={() => navigate('Image')}
          title="Image Screen" style={styles.button} />
      {/* <TouchableOpacity onPress={() => console.log('Touch Opacity Pressed')}>
      <Text style={styles.text}>Get List DEmo with TouchableOpacity</Text>
    </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    shadowColor: 'gray'
  },
  text: {
    color: 'red'
  }
});

export default HomeScreen;
