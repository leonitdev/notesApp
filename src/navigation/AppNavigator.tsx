import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUserThunk} from '../redux/slices/users';
import {RootState} from '../redux/store';
import AuthStackNavigator from './AuthStackNavigator';
import HomeTabNavigator from './HomeTabNavigator';

export const AppNavigator: React.FC<null> = () => {
  const {user, loading} = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  if (loading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!user || !Object.keys(user).length ? (
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
