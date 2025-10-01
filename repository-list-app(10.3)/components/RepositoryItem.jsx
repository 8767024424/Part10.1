import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white', // Ensure it stands out against the separator
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
    color: 'grey',
  },
  language: {
    backgroundColor: '#0366d6', // Blue background for the language tag
    color: 'white',
    padding: 4,
    borderRadius: 5,
    alignSelf: 'flex-start', // Important for the background to wrap the text
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'grey',
    fontSize: 12,
  }
});

// Helper function to format large numbers
const kFormatter = (num) => {
  return Math.abs(num) > 999 
    ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k'
    : Math.sign(num) * Math.abs(num);
};

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      {/* Header/Title Section */}
      <Text style={styles.title}>{repository.fullName}</Text>
      <Text style={styles.description}>{repository.description}</Text>
      <Text style={styles.language}>{repository.language}</Text>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{kFormatter(repository.stargazersCount)}</Text>
          <Text style={styles.statLabel}>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{kFormatter(repository.forksCount)}</Text>
          <Text style={styles.statLabel}>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{repository.ratingAverage}</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{repository.reviewCount}</Text>
          <Text style={styles.statLabel}>Reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;