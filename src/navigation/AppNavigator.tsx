import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import AuthStackNavigator from './AuthStackNavigator';
import HomeTabNavigator from './HomeTabNavigator';

export const AppNavigator: React.FC<null> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {}, []);

  if (loading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AuthStackNavigator />
      ) : (
        <HomeTabNavigator route={undefined} />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
