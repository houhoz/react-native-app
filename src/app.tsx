import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import NavigationStack from './navigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationStack />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

export default App;
