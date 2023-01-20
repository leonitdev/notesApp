import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputProps {
  title: string;
  description: string;
  tag: string;
  createdDate: string;
  imageUri: string | null;
  onDeleteNote: () => void;
}

const Note: React.FC<InputProps> = ({
  title,
  description,
  tag,
  createdDate,
  imageUri,
  onDeleteNote,
}: InputProps) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.noteTitle}>* {title} *</Text>
        <Text style={styles.noteDescription}>{description}</Text>

        <View style={styles.noteTagView}>
          <Text style={styles.noteTagText}># {tag}</Text>
        </View>

        <Text style={styles.createdDate}>{createdDate}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => Alert.alert('Deleted')}>
          <MaterialCommunityIcons
            name="delete-alert-outline"
            size={25}
            color="#211F1F"
            style={styles.deleteIcon}
          />
        </TouchableOpacity>

        {imageUri && (
          <View style={styles.photoContainer}>
            <Text>Here photo if it has</Text>
          </View>
        )}
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
    justifyContent: 'space-between',
    shadowOpacity: 0.1,
    backgroundColor: '#FFFFFF',
    // borderTopColor: '#121212',
    // borderTopWidth: 3,
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

  noteTagView: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#FFDD00',
    flex: 1,
    alignSelf: 'flex-start',
    marginBottom: 15,
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
