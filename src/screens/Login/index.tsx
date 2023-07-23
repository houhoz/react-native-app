import React from 'react';
import {View} from 'react-native';
import {Text, Button, Icon} from 'native-base';
import styles from './styles';
// import NavigationService from 'app/navigation/NavigationService';
// import {useStore} from './../store';

const Login: React.FC = () => {
  // const setIsLoggedIn = useStore(state => state.setIsLoggedIn);

  const onLogin = () => {
    // setIsLoggedIn(true);
  };
  const onForgot = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Login Status </Text>
        <Button
          onPress={onLogin}
          leftIcon={<Icon name="cloud-upload-outline" size="sm" />}>
          Login
        </Button>
        <Button onPress={onForgot}>Forgot Password</Button>
      </View>
    </View>
  );
};

export default Login;
