import React from 'react';
import {Button, View, Text, StyleSheet, TextInput} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function DetailsScreen({navigation, route}) {
  const {itemId, otherParam} = route.params;
  return (
    <View style={styles.home}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function HomeScreen({navigation, route}) {
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('');
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.home}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </>
  );
}

export default function DemoStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
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
