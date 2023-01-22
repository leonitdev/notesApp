import React from 'react';
import {AppNavigator} from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';

function App(): JSX.Element {
  return (
    <>
      <AppNavigator />
      <Toast />
    </>
  );
}

export default App;
