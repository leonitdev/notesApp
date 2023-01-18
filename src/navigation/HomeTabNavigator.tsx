import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {HOME} from '../constants/screens.constants';
import HomeScreen from '../screens/home/home.screen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = ({route}) => {
  const tabBarLabelActiveStyle = {
    color: '#121212',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 5,
  };

  const tabBarLabelStyle = {
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 5,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          paddingTop: 5,
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
        },
        tabBarActiveTintColor: '#121212',
        tabBarInactiveTintColor: '#C5C4C5',
        tabBarLabelStyle: tabBarLabelStyle,
        lazy: true,
        headerShown: false,
      }}>
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: HOME,
          // tabBarIcon: ({color, size}) => (
          //   <Feather name="home" color={color} size={24} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
