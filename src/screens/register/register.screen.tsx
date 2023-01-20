import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ButtonSave from '../../components/buttons/ButtonSave';
import Input from '../../components/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Alert} from 'react-native';
import {LocalStorageKey} from '../../constants';
import {localStorage} from '../../services';

const RegisterScreen = ({}): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [hobby, setHobby] = useState<string>('');
  const [error, setError] = useState<string>('');

  const saveUser = async () => {
    Alert.alert(username, hobby);
    const user = {username, hobby};
    localStorage.setItem(LocalStorageKey.user, JSON.stringify(user));

    const localStorageUser = await localStorage.getItem(LocalStorageKey.user);
    if (localStorageUser) {
      console.log('localStorageUser: ', JSON.parse(localStorageUser));
    }
    // navigation.navigate(HOME);
    return true;
  };

  return (
    <ScrollView style={styles.scroller}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Register Account</Text>
        <View />
        <Ionicons
          name="person-outline"
          size={81}
          color="#211F1F"
          style={styles.icon}
        />
        <Input
          label={'USERNAME*'}
          placeholder={'e.g John'}
          currentValue={username}
          setValue={setUsername}
          errorMessge={error}
        />

        <Input
          label={'HOBBY*'}
          placeholder={'e.g Football'}
          currentValue={hobby}
          setValue={setHobby}
          errorMessge={error}
        />

        <View style={styles.buttonContainer}>
          <ButtonSave save={saveUser} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: 'white',
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 20,
    paddingTop: 60,
    flex: 1,
  },

  icon: {
    textAlign: 'center',
    marginBottom: 50,
  },

  title: {
    fontSize: 35,
    fontWeight: '400',
    marginBottom: 30,
    textAlign: 'center',
  },

  buttonContainer: {
    height: '30%',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default RegisterScreen;
