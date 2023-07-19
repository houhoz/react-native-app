import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ViewBoxesWithColorAndText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content1} />
      <View style={styles.content2} />
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
  },
  content1: {
    backgroundColor: 'blue',
    flex: 0.3,
  },
  content2: {
    backgroundColor: 'red',
    flex: 0.5,
  },
});

export default ViewBoxesWithColorAndText;
