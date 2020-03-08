import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import AuthNavigator from "./src/navigation/AuthNavigation";

Amplify.configure(awsconfig);

const App = () => <AuthNavigator />;

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
