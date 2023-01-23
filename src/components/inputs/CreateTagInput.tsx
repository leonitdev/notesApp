import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {createTagThunk} from '../../redux/slices/tags';
import uuid from 'react-native-uuid';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

interface InputProps {
  placeholder: string;
}

const SearchBox: React.FC<InputProps> = ({placeholder}: InputProps) => {
  const dispatch = useDispatch();
  const [tagName, setTagName] = useState<string>('');

  const createTag = () => {
    dispatch(createTagThunk({id: uuid.v4().toString(), name: tagName}));
    setTagName('');
    return Toast.show({
      type: 'success',
      text1: 'SUCCESS',
      text2: 'Tag is created successfully!',
    });
  };

  return (
    <View style={styles.parentView}>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={setTagName}
          value={tagName}
          placeholder={placeholder}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={createTag}>
          <Ionicons
            name="md-add-circle-outline"
            size={25}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: 'white',
    marginBottom: 15,
  },

  label: {
    marginBottom: 5,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 21,
  },

  inputView: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'whitesmoke',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 5,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
  },

  textInput: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    paddingLeft: 10,
  },

  icon: {
    fontWeight: '600',
    alignSelf: 'center',
    borderRadius: 15,
    color: '#121212',
  },
});

export default SearchBox;
