import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={{padding: 130}}>
      <Text>Home Screen Notes app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
