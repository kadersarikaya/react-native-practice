/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, FlatList, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import patistore from './patistore.json';
import ProductCard from './components/ProductCard';
const App = () => {
  return (
    <SafeAreaView style={styles.coverView}>
      <View style={styles.content}>
        <Text style={styles.title}>PATIKOSTORE</Text>
        <TextInput style={styles.search} placeholder="Ara..." />
        <FlatList numColumns={2} data={patistore}
          renderItem={({ item }) => <ProductCard product={item}
          />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  search: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  coverView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
  },
});



export default App;
