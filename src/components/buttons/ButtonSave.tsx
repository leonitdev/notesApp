import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../styles';

interface ButtonSaveProps {
  save: () => any;
}

const ButtonSave: React.FC<ButtonSaveProps> = ({save}: ButtonSaveProps) => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity onPress={save} style={styles.buttonSave}>
        <Text style={styles.buttonSaveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    height: 'auto',
    width: '100%',
  },
  buttonSave: {
    backgroundColor: colors.black,
    paddingVertical: 12,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonSaveText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
});

export default ButtonSave;
