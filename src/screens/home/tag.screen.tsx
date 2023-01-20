import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Note from '../../components/common/Note';
import SearchBox from '../../components/SearchBox';

const TagScreen = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');
  const onDeleteNote = () => {
    console.log('called');
  };
  return (
    <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Tags screen</Text>
      </View>
    </ScrollView>
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
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#121212',
    marginBottom: 20,
  },
});

export default TagScreen;
