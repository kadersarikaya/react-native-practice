import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text>Winter is coming...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  card_container: {
    backgroundColor: "#fff",
    margin: 10,
    borderWidth:1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  card_body: {
    padding: 10,
  },
  card_title: {
    
  }
});

export default App;
