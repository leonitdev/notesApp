import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../styles';

const ButtonSave = ({save}) => {
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
    flex: 1,
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
