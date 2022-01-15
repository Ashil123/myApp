import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
  return (
  <View>
    <ImageDetails title={'Forest'} imageSource={require('../../assets/forest.jpg')} score={12} />
    <ImageDetails title={'Beach'}  imageSource={require('../../assets/beach.jpg')} score={12} />
    <ImageDetails title={'Mountain'} imageSource={require('../../assets/mountain.jpg')} score={12} />
    <ImageDetails title={'Robpo'} imageSource={require('../../assets/forest.jpg')} score={12} />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    borderColor: 'red'
  }
});

export default ImageScreen;
