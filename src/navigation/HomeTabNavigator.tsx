import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {CREATE_NOTES, HOME, TAGS} from '../constants/screens.constants';
import HomeScreen from '../screens/home/home.screen';
import CreateNotesScreen from '../screens/home/create-notes.screen';
import TagScreen from '../screens/home/tag.screen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = ({route}) => {
  const tabBarLabelStyle = {
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 8,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          paddingTop: 5,
          paddingBottom: 10,
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
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={CREATE_NOTES}
        component={CreateNotesScreen}
        options={{
          tabBarLabel: CREATE_NOTES,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="create-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name={TAGS}
        component={TagScreen}
        options={{
          tabBarLabel: TAGS,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-pricetags-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
