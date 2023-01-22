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
import SearchBox from '../../components/inputs/SearchBox';
import {getNotesThunk} from '../../redux/slices/notes';
import {RootState} from '../../redux/store';

const HomeScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.users);
  const {notes, loading, error} = useSelector(
    (state: RootState) => state.notes,
  );

  useEffect(() => {
    dispatch(getNotesThunk(user?.id));
  }, []);

  const renderNotes = () => {
    // if (!notes.length) {
    //   return (
    //     <View style={styles.activityIndicator}>
    //       <Text>NO NOTES ARE FOUND !</Text>
    //     </View>
    //   );
    // }
    return notes?.map(note => {
      return (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          tag={note.tag}
          createdDate={note.createdAt}
          imageUri={null}
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
        <SearchBox placeholder="Search a note..." />
        {renderNotes()}
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
    paddingBottom: 80,
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
