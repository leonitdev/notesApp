import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonSave from '../buttons/ButtonSave';

interface InputProps {
  title: string;
  description: string;
  tag: string;
  createdDate: string;
  imageUri: string | null;
  onDeleteNote: () => void;
}

const CreateNote: React.FC<InputProps> = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  // fetch tags
  const [items, setItems] = useState([
    {label: 'Home', value: 'home'},
    {label: 'Invoice', value: 'invoice'},
  ]);

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.textContainer}>
        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>TITLE*</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputLabel}>DESCRIPTION*</Text>
          <TextInput style={[styles.input, {height: 60}]} multiline={true} />
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
        <ButtonSave />
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
