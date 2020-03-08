import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Auth } from "aws-amplify";

class Home extends React.Component {
  handleSignOut = () => {
    Auth.signOut().then(() =>
      this.props.navigation
        .navigate("Authentication")
        .catch(err => console.log(err))
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign Out" onPress={this.handleSignOut} />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
