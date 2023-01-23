import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CreateNote from '../../components/common/CreateNote';

const CreateNotesScreen = (): JSX.Element => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>Create Notes</Text>
      <CreateNote />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    paddingTop: 80,
    backgroundColor: 'white',
    flex: 1,
  },
  sectionContainer: {
    paddingHorizontal: 25,
    paddingTop: 80,
    height: 'auto',
    backgroundColor: 'white',
    // flex: 1,
    paddingBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#121212',
    marginBottom: 20,
  },
});

export default CreateNotesScreen;
