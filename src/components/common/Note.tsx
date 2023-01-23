import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Toast from 'react-native-toast-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {deleteNotesThunk} from '../../redux/slices/notes';
import {RootState} from '../../redux/store';

interface NoteProps {
  id: string;
  title: string;
  description: string;
  tag: string;
  createdDate: string;
  imageURI: string | null;
}

const Note: React.FC<NoteProps> = ({
  id,
  title,
  description,
  tag,
  createdDate,
  imageURI,
}: NoteProps) => {
  const dispatch = useDispatch();
  const layout = useSelector((state: RootState) => state.layout);

  const deleteNote = () => {
    dispatch(deleteNotesThunk(id));
    return Toast.show({
      type: 'success',
      text1: 'SUCCESS',
      text2: 'Note is deleted successfully!',
    });
  };

  return (
    <View
      style={[
        styles.sectionContainer,
        {
          width: layout?.value === 'column' ? '100%' : '48%',
        },
      ]}>
      <View style={styles.textContainer}>
        <Text style={styles.noteTitle}>* {title} *</Text>
        <Text style={styles.noteDescription}>{description}</Text>
        <View
          style={[
            styles.imgAndTagViewContainer,
            {flexDirection: layout?.value === 'column' ? 'row' : 'column'},
          ]}>
          {imageURI && (
            <Image style={styles.noteImage} source={{uri: imageURI}} />
          )}
          <View style={styles.noteTagView}>
            <Text style={styles.noteTagText}># {tag}</Text>
          </View>
        </View>

        <Text style={styles.createdDate}>{createdDate}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => deleteNote()}>
          <MaterialCommunityIcons
            name="delete-alert-outline"
            size={25}
            color="#211F1F"
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    shadowOpacity: 0.1,
    backgroundColor: '#FFFFFF',
  },

  textContainer: {
    flex: 3,
    paddingRight: 10,
  },

  photoContainer: {
    flex: 1,
    borderWidth: 0,
  },

  noteTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#121212',
  },

  noteDescription: {
    color: 'gray',
    marginBottom: 10,
  },

  noteImage: {
    width: 100,
    height: 90,
    borderRadius: 15,
    marginBottom: 15,
  },

  noteTagView: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#FFDD00',
    alignSelf: 'flex-start',
    marginBottom: 15,
  },

  imgAndTagViewContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  noteTagText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#121212',
  },

  createdDate: {
    fontSize: 11,
    fontWeight: '600',
  },

  deleteIcon: {
    fontWeight: '600',
    alignSelf: 'center',
    borderRadius: 15,
    color: '#121212',
  },
});

export default Note;
