import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsconfig);

const App = () => (
  <View style={styles.container}>
    <Text> Hello World !</Text>
  </View>
);

export default withAuthenticator(App, true);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
