import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ImageDetails = (props) => {
  console.log('props', props.title);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>Image details - {props.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    borderColor: 'red'
  }
});

export default ImageDetails;
