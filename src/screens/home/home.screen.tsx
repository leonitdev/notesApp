import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Input from '../../components/Input';
import SearchBox from '../../components/SearchBox';

const HomeScreen = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Notes</Text>
        <SearchBox
          placeholder="Search a note..."
          value={searchText}
          setValue={setSearchText}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    paddingTop: 80,
    backgroundColor: 'white',
    flex: 1,
  },
  sectionContainer: {
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#121212',
    marginBottom: 20,
  },
});

export default HomeScreen;
