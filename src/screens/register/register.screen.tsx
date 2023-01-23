import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ButtonSave from '../../components/buttons/ButtonSave';
import Input from '../../components/inputs/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {registerUserThunk} from '../../redux/slices/users';
import uuid from 'react-native-uuid';
import {UserModel} from '../../interfaces/models/user.models';
import {RootState} from '../../redux/store';
import Toast from 'react-native-toast-message';

const RegisterScreen = ({}): JSX.Element => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>('');
  const [hobby, setHobby] = useState<string>('');
  const {error} = useSelector((state: RootState) => state.users);

  const saveUser = async () => {
    const userCreated: UserModel = {
      id: uuid.v4().toString(),
      username,
      hobby,
    };

    if (username.length < 2) {
      return Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Username must have more characters!',
      });
    }

    if (hobby.length < 2) {
      return Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Hobby must have more characters!',
      });
    }
    dispatch(registerUserThunk(userCreated));
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
        />

        <Input
          label={'HOBBY*'}
          placeholder={'e.g Football'}
          currentValue={hobby}
          setValue={setHobby}
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
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RegisterScreen;
