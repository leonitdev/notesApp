import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Note from '../../components/common/Note';
import SearchBox from '../../components/inputs/SearchBox';
import {getNotesThunk} from '../../redux/slices/notes';
import {RootState} from '../../redux/store';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {setGrid, setColumn} from '../../redux/slices/layout-form';

const HomeScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.users);
  const {notes, loading, error} = useSelector(
    (state: RootState) => state.notes,
  );

  const grid = useSelector((state: RootState) => state.layout);
  useEffect(() => {
    dispatch(getNotesThunk(user?.id));
  }, []);

  const renderNotes = () => {
    if (!notes.length) {
      return (
        <View style={styles.activityIndicator}>
          <Text>NO NOTES ARE FOUND WITH THIS SEARCH !</Text>
        </View>
      );
    }
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
        <View style={styles.header}>
          <Text style={styles.title}>Notes</Text>
          {grid?.value === 'column' && (
            <TouchableOpacity onPress={() => dispatch(setGrid())}>
              <Text style={{color: 'gray'}}>
                SET TO: <Feather name="grid" size={30} color="#211F1F" />
              </Text>
            </TouchableOpacity>
          )}

          {grid?.value === 'grid' && (
            <TouchableOpacity onPress={() => dispatch(setColumn())}>
              <Text>
                SET TO:{' '}
                <MaterialCommunityIcons
                  name="table-column"
                  size={30}
                  color="#211F1F"
                />
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <SearchBox placeholder="Search a note..." />
        <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {renderNotes()}
        </View>
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
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    marginBottom: 20,
  },
});

export default HomeScreen;
