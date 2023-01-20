import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Note from '../../components/common/Note';
import SearchBox from '../../components/SearchBox';

const HomeScreen = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');
  const onDeleteNote = () => {
    console.log('called');
  };
  return (
    <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Notes</Text>
        <SearchBox
          placeholder="Search a note..."
          value={searchText}
          setValue={setSearchText}
        />
        <Note
          title="Do exercises"
          description="Working hard not giving up, 15 pushups"
          tag="Home"
          createdDate={new Date().toDateString()}
          imageUri={null}
          onDeleteNote={onDeleteNote}
        />

        <Note
          title="Read a book"
          description="Read 20 pages of the book"
          tag="Home"
          createdDate={new Date().toDateString()}
          imageUri={null}
          onDeleteNote={onDeleteNote}
        />
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

export default HomeScreen;
