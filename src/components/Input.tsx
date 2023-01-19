import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputProps {
  label: string;
  placeholder: string;
  currentValue: string;
  setValue: (value: string) => void;
  errorMessge: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  currentValue,
  setValue,
  errorMessge,
}: InputProps) => {
  return (
    <View style={styles.parentView}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputView, {borderWidth: errorMessge ? 0.5 : 0}]}>
        <TextInput
          onChangeText={value => {
            setValue(value);
          }}
          placeholder={placeholder}
          style={styles.textInput}
        />

        {currentValue.length > 1 && (
          <View style={styles.iconView}>
            <MaterialCommunityIcons
              name="check-bold"
              size={11}
              color="#211F1F"
              style={styles.icon}
            />
          </View>
        )}
      </View>
      <Text style={styles.errorMessage}>{errorMessge}</Text>
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
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 5,
    borderColor: '#EB483F',
  },

  textInput: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },

  iconView: {
    backgroundColor: '#FFDD00',
    borderRadius: 15,
    height: 22,
    width: 22,
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    fontWeight: '600',
    alignSelf: 'center',
    borderRadius: 15,
  },

  errorMessage: {
    color: '#EB483F',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
  },
});

export default Input;
