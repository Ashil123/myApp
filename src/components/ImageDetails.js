import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ImageDetails = ({ imageSource, title, score }) => {
  return (
    <View>
      <Image source={imageSource} style={styles.image} />
      <Text>Image details - {title}</Text>
      <Text>Omage Score{score}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
  image: {
    height: 50,
    width: 50,
  }
});

export default ImageDetails;
