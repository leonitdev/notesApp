import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonSave from '../buttons/ButtonSave';
import uuid from 'react-native-uuid';
import {createNoteThunk} from '../../redux/slices/notes';
import {useDispatch, useSelector} from 'react-redux';
import {NoteModel} from '../../interfaces/models/note.models';
import {RootState} from '../../redux/store';
import Toast from 'react-native-toast-message';
import {getTagsThunk} from '../../redux/slices/tags';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';

const CreateNote = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.users);
  const {tags, loading, error} = useSelector((state: RootState) => state.tags);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [galleryImageURI, setGalleryImageURI] = useState<string>();
  const [items, setItems] = useState([{label: '', value: ''}]);

  useEffect(() => {
    if (tags.length) {
      const formattedTags = [...tags].map(tag => {
        return {
          label: tag.name,
          value: tag.name,
        };
      });
      setItems(formattedTags);
    }
  }, [tags]);

  const resetState = () => {
    setTitle('');
    setDescription('');
    setValue('');
    setGalleryImageURI('');
  };

  const openGallery = () => {
    let options = {
      noData: true,
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      console.log('response: ', response.assets);
      if (response.assets) {
        setGalleryImageURI(response.assets[0].uri);
      }
    });
  };

  useEffect(() => {
    dispatch(getTagsThunk());
  }, []);

  const saveNote = async () => {
    let newNote: NoteModel = {
      id: uuid.v4().toString(),
      title,
      description,
      tag: value,
      imageURI: galleryImageURI ?? '',
      userId: user?.id,
      createdAt: new Date().toDateString(),
    };

    if (title.length < 2 || !value) {
      return Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please fill the fields with needed chars length!',
      });
    }

    dispatch(createNoteThunk(newNote));
    resetState();
    return Toast.show({
      type: 'success',
      text1: 'SUCCESS',
      text2: 'Note is created successfully!',
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
    <View style={styles.sectionContainer}>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>TITLE*</Text>
        <TextInput
          onChangeText={e => setTitle(e)}
          value={title}
          style={styles.input}
        />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>DESCRIPTION*</Text>
        <TextInput
          onChangeText={e => setDescription(e)}
          value={description}
          style={[styles.input, {height: 60}]}
          multiline={true}
        />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Choose an Image</Text>
        <TouchableOpacity onPress={openGallery}>
          <Ionicons name="md-image-outline" size={40} color="#211F1F" />
        </TouchableOpacity>
        {galleryImageURI && (
          <Image
            style={{width: 70, height: 70}}
            source={{uri: galleryImageURI}}
          />
        )}
      </View>
      <View
        style={[
          styles.inputView,
          {height: '100%', flex: 1, borderWidth: 0, marginBottom: 90},
        ]}>
        <Text style={styles.inputLabel}>TAG*</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setValue={setValue}
          setItems={setItems}
          setOpen={setOpen}
        />
      </View>
      <View style={styles.inputView}>
        <ButtonSave save={saveNote} />
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
    flexDirection: 'column',
    shadowOpacity: 0.1,
    height: '90%',
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },

  inputView: {
    marginBottom: 15,
  },

  inputLabel: {
    marginBottom: 5,
    fontWeight: '500',
  },

  input: {
    fontSize: 14,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderColor: 'lightgray',
  },

  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateNote;
