import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Box, Text, Button} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function SettingScreen({navigation, route}) {
  return (
    <View style={styles.home}>
      <Text>Details Screen</Text>
      <Button
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }>
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popToTop()}>
        Go back to first screen in stack
      </Button>
    </View>
  );
}

function MessagesScreen({navigation, route}) {
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }>
        Go to Details
      </Button>
      <Button onPress={() => navigation.navigate('CreatePost')}>
        Create post
      </Button>
      <Text>Post: {route.params?.post}</Text>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Button onPress={() => console.log('hello world')}>Click Me</Button>
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </View>
  );
}

const HomeTabBarIcon = ({color, size}: {color: string; size: number}) => (
  <MaterialCommunityIcons name="home" color={color} size={size} />
);
const SettingTabBarIcon = ({color, size}: {color: string; size: number}) => (
  <MaterialCommunityIcons name="bell" color={color} size={size} />
);

export function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Messages"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: HomeTabBarIcon,
        }}
        component={MessagesScreen}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: SettingTabBarIcon,
          tabBarBadge: 3,
        }}
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
}
