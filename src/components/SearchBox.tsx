import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface InputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const SearchBox: React.FC<InputProps> = ({
  placeholder,
  value,
  setValue,
}: InputProps) => {
  return (
    <View style={styles.parentView}>
      <View style={styles.inputView}>
        <Ionicons name="search" size={25} color="#211F1F" style={styles.icon} />
        <TextInput
          onChangeText={value => {
            setValue(value);
          }}
          value={value}
          placeholder={placeholder}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
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
    borderRadius: 5,
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 5,
    borderColor: '#EB483F',
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
    color: '#A7A6A7',
  },

  errorMessage: {
    color: '#EB483F',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
});

export default SearchBox;
