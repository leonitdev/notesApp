import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Note from '../../components/common/Note';
import SearchBox from '../../components/SearchBox';
import {NoteModel} from '../../interfaces/models/note.models';
import {UserModel} from '../../interfaces/models/user.models';
import {getNotesThunk} from '../../redux/slices/notes';
import {RootState} from '../../redux/store';

const HomeScreen = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');

  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.users);
  const {notes, loading, error} = useSelector(
    (state: RootState) => state.notes,
  );

  useEffect(() => {
    console.log('user: ', user);
    dispatch(getNotesThunk(user?.id));
    console.log('notes: ', notes);
  }, []);

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

  if (loading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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

        <Note
          title="Read a book"
          description="Read 20 pages of the book"
          tag="Home"
          createdDate={new Date().toDateString()}
          imageUri={null}
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
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
