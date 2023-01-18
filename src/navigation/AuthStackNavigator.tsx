import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {REGISTER, SPLASH_SCREEN} from '../constants/screens.constants';
import RegisterScreen from '../screens/register/register.screen';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SPLASH_SCREEN} component={RegisterScreen} />
      <Stack.Screen name={REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
