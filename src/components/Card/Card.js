import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "./Card.style";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Kişi: {props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Merhabağ" + props.title)}
      >
        <Text styles={styles.button_title}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
