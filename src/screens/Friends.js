import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Friends = props => (
  <View style={styles.container}>
    <Text>Friends</Text>
  </View>
);
export default Friends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
