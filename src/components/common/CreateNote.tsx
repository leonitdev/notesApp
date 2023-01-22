import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonSave from '../buttons/ButtonSave';
import uuid from 'react-native-uuid';
import {createNoteThunk} from '../../redux/slices/notes';
import {useDispatch, useSelector} from 'react-redux';
import {NoteModel} from '../../interfaces/models/note.models';
import {RootState} from '../../redux/store';
import Toast from 'react-native-toast-message';

interface InputProps {}

const CreateNote: React.FC<InputProps> = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.users);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState(false);

  // fetch tags
  const [items, setItems] = useState([
    {label: 'Home', value: 'home'},
    {label: 'Invoice', value: 'invoice'},
  ]);

  const resetState = () => {
    setTitle('');
    setDescription('');
    setValue('');
  };

  const saveNote = async () => {
    let newNote: NoteModel = {
      id: uuid.v4().toString(),
      title,
      description,
      tag: value,
      userId: user?.id,
      createdAt: new Date().toDateString(),
    };

    dispatch(createNoteThunk(newNote));
    resetState();
    return Toast.show({
      type: 'success',
      text1: 'SUCCESS',
      text2: 'Note is created successfully!',
    });
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.textContainer}>
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

        {/* <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Image Picker</Text>
          <TextInput style={styles.input} />
        </View> */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOpacity: 0.1,
    flex: 1,
    paddingBottom: 0,
    backgroundColor: '#FFFFFF',
  },

  textContainer: {
    flex: 3,
    paddingRight: 10,
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
});

export default CreateNote;
