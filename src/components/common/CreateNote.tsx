import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {localStorage} from '../../services';
import {LocalStorageKey} from '../../constants';
import ButtonSave from '../buttons/ButtonSave';
import uuid from 'react-native-uuid';

interface InputProps {}

const CreateNote: React.FC<InputProps> = () => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [value, setValue] = useState<string | null>();
  const [tag, setTag] = useState<string | null>(value);

  const [open, setOpen] = useState(false);

  // fetch tags
  const [items, setItems] = useState([
    {label: 'Home', value: 'home'},
    {label: 'Invoice', value: 'invoice'},
  ]);

  const saveNote = async () => {
    const currentNotes = await localStorage.getItem(LocalStorageKey.notes);
    let newNote = {
      id: uuid.v4,
      title,
      description,
      tag,
    };
    if (currentNotes?.length) {
      const newNotes = [...currentNotes, newNote];
      localStorage.setItem(LocalStorageKey.notes, JSON.stringify(newNotes));
      return;
    }
    localStorage.setItem(LocalStorageKey.notes, JSON.stringify([newNote]));
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.textContainer}>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>TITLE*</Text>
          <TextInput onChangeText={e => setTitle(e)} style={styles.input} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>DESCRIPTION*</Text>
          <TextInput
            onChangeText={e => setDescription(e)}
            style={[styles.input, {height: 60}]}
            multiline={true}
          />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>Image Picker</Text>
          <TextInput style={styles.input} />
        </View>
        <View
          style={[
            styles.inputView,
            {height: '100%', flex: 1, borderWidth: 0, marginBottom: 30},
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
