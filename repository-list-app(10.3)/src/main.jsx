// components/Main.jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8', // Light grey background for the whole list area
    paddingTop: 50, // To avoid status bar overlap
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

export default Main;