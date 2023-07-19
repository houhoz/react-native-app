import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DemoStack from './navigation/demo-stack';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <DemoStack />
    </NavigationContainer>
  );
}

export default App;
