import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {filterNotesByTagThunk, getNotesThunk} from '../../redux/slices/notes';
import {RootState} from '../../redux/store';

interface ActiveTagProps {
  id: string;
  name: string;
}

const ActiveTag: React.FC<ActiveTagProps> = ({id, name}: ActiveTagProps) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.users);

  const filterNotesByActiveTag = () => {
    if (name === 'All') {
      dispatch(getNotesThunk(user?.id));
      return;
    }
    dispatch(filterNotesByTagThunk({userId: user.id, tagName: name}));
  };

  return (
    <TouchableOpacity
      key={id}
      style={[styles.tagView]}
      onPress={filterNotesByActiveTag}>
      <Text style={styles.tagText}># {name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tagView: {
    padding: 10,
    paddingRight: 15,
    borderRadius: 15,
    // backgroundColor: '#FFDD00',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tagText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#121212',
  },

  button: {
    paddingRight: 5,
  },

  icon: {
    fontWeight: '600',
    alignSelf: 'center',
    borderRadius: 15,
    color: '#121212',
  },
});

export default ActiveTag;
