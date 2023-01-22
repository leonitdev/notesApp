import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Tag from '../../components/common/Tag';
import CreateTagInput from '../../components/inputs/CreateTagInput';
import {TagModel} from '../../interfaces/models/tag.models';
import {getTagsThunk} from '../../redux/slices/tags';
import {RootState} from '../../redux/store';

const TagScreen = (): JSX.Element => {
  const {tags, loading, error} = useSelector((state: RootState) => state.tags);
  const dispatch = useDispatch();
  const renderTags = () => {
    return tags.map((tag: TagModel) => {
      return <Tag key={tag.id} id={tag.id} name={tag.name} />;
    });
  };

  useEffect(() => {
    dispatch(getTagsThunk());
  }, [dispatch]);

  return (
    <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Tags screen</Text>
        <CreateTagInput placeholder="Tag name.." />
        <View style={styles.tagContainer}>{renderTags()}</View>
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

  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default TagScreen;
