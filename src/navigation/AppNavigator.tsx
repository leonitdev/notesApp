import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Appearance,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import AuthStackNavigator from './AuthStackNavigator';
import HomeTabNavigator from './HomeTabNavigator';

export const AppNavigator = () => {
  // set to redux when is network error
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {}, []);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthStackNavigator /> : <HomeTabNavigator />}
    </NavigationContainer>
  );
};
