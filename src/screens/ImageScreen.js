import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
  return (<View>
    <ImageDetails title={'Forest'} imageSource={require('../../assets/forest.jpg')} />
    <ImageDetails title={'Beach'}  imageSource={require('../../assets/forest.jpg')}  />
    <ImageDetails title={'Mountain'} imageSource={require('../../assets/forest.jpg')} />
    <ImageDetails title={'Robpo'} imageSource={require('../../assets/forest.jpg')}  />
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    borderColor: 'red'
  }
});

export default ImageScreen;
