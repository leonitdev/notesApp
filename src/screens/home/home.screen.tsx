import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Note from '../../components/common/Note';
import SearchBox from '../../components/SearchBox';
import {LocalStorageKey} from '../../constants';
import {NoteModel} from '../../interfaces/models/note.models';
import {localStorage} from '../../services';

const HomeScreen = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');
  // will be fetched from redux..
  const [notes, setNotes] = useState<NoteModel[] | null>([]);
  const onDeleteNote = () => {
    console.log('called');
  };

  const renderNotes = () => {
    notes?.map(note => {
      return (
        <Note
          title={note.title}
          description={note.description}
          tag={note.tag}
          createdDate={note.createdAt}
        />
      );
    });
  };

  useEffect(() => {
    // (async () => {
    //   const notes = await localStorage.getItem(LocalStorageKey.notes);
    //   if (notes?.length) {
    //     setNotes(JSON.parse(notes));
    //     return;
    //   }
    // })();
  }, []);

  return (
    <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Notes</Text>
        <SearchBox
          placeholder="Search a note..."
          value={searchText}
          setValue={setSearchText}
        />
        {renderNotes()}
        {/* <Note
          title="Do exercises"
          description="Working hard not giving up, 15 pushups"
          tag="Home"
          createdDate={new Date().toDateString()}
          imageUri={null}
          onDeleteNote={onDeleteNote}
        /> */}

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
