import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Toast from 'react-native-toast-message';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {deleteTagThunk} from '../../redux/slices/tags';

interface TagProps {
  id: string;
  name: string;
}

const Tag: React.FC<TagProps> = ({id, name}: TagProps) => {
  const dispatch = useDispatch();

  const deleteTag = () => {
    dispatch(deleteTagThunk(id));
    return Toast.show({
      type: 'success',
      text1: 'SUCCESS',
      text2: 'Tag is deleted successfully!',
    });
  };

  return (
    <View key={id} style={styles.tagView}>
      <TouchableOpacity style={styles.button} onPress={deleteTag}>
        <MaterialIcons name="clear" size={20} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.tagText}># {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagView: {
    padding: 10,
    paddingRight: 15,
    borderRadius: 15,
    backgroundColor: '#FFDD00',
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
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

export default Tag;
