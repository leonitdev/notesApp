import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {getNotesBySearchThunk} from '../../redux/slices/notes';
import {RootState} from '../../redux/store';

interface InputProps {
  placeholder: string;
}

const SearchBox: React.FC<InputProps> = ({placeholder}: InputProps) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.users);

  const [searchText, setSearchText] = useState<string>('');

  const searchNotes = () => {
    dispatch(getNotesBySearchThunk({userId: user.id, searchText}));
  };

  return (
    <View style={styles.parentView}>
      <View style={styles.inputView}>
        <TextInput
          onChangeText={setSearchText}
          value={searchText}
          placeholder={placeholder}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={searchNotes}>
          <Ionicons name="search" size={25} style={styles.icon} />
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
    backgroundColor: '#F2F1F2',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
  },

  textInput: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    paddingLeft: 5,
  },

  icon: {
    fontWeight: '600',
    alignSelf: 'center',
    borderRadius: 15,
    color: '#121212',
  },
});

export default SearchBox;
