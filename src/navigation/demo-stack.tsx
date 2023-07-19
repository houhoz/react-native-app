import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function DetailsScreen() {
  return (
    <View style={styles.home}>
      <Text>Details Screen</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function DemoStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
