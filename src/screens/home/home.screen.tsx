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
import {getTagsThunk} from '../../redux/slices/tags';
import {TagModel} from '../../interfaces/models/tag.models';
import ActiveTag from '../../components/common/ActiveTag';

const HomeScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.users);
  const {notes, loading, error} = useSelector(
    (state: RootState) => state.notes,
  );

  const layout = useSelector((state: RootState) => state.layout);
  useEffect(() => {
    dispatch(getNotesThunk(user?.id));
    dispatch(getTagsThunk());
  }, []);

  const {tags} = useSelector((state: RootState) => state.tags);
  const renderTags = () => {
    return tags.map((tag: TagModel) => {
      return <ActiveTag key={tag.id} id={tag.id} name={tag.name} />;
    });
  };

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
          {layout?.value === 'column' && (
            <TouchableOpacity onPress={() => dispatch(setGrid())}>
              <Text style={{color: 'gray'}}>
                SET TO: <Feather name="grid" size={30} color="#211F1F" />
              </Text>
            </TouchableOpacity>
          )}

          {layout?.value === 'grid' && (
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
        <View style={styles.notesContainer}>
          <View style={styles.tagContainer}>
            <ActiveTag key={'1'} id={'1'} name={'All'} />
            {renderTags()}
          </View>
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

  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  notesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
