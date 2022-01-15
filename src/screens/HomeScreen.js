import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

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
      <Button onPress={() => navigate('Count')}
        title="Go to Counter Demo" style={styles.button} />
      <Button onPress={() => navigate('Color')}
        title="Go to Color Demo" style={styles.button} />
      <Button onPress={() => navigate('Square')}
        title="Go to Square Demo" style={styles.button} />
        <Button onPress={() => navigate('Text')}
          title="Go to text Screen Demo" style={styles.button} />
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
