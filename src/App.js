import React from "react";
import {SafeAreaView,StyleSheet} from "react-native";
import Card from "./components/Card";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Eddard Stark" text="winter is coming" />
      <Card title="Arif Işık" text="İlhami abi" />
      <Card title="Kader S" text="Kader is coming" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
});


export default App;
