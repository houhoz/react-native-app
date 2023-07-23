import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './Home';
import {HomeScreen, CreatePostScreen, DetailsScreen} from './DemoStack';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{title: 'Overview'}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
