import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Auth } from "aws-amplify";

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      modalVisible: false
    };
  }

  handleSignUp = () => {
    // alert(JSON.stringify(this.state));
    const { email, password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      Auth.signUp({
        username: email,
        password,
        attributes: { email }
      })
        .then(() => this.setState({ modalVisible: true }))
        .catch(err => console.log(err));
    } else {
      alert("Passwords do not match");
    }
  };

  handleSignIn = () => {
    const { email, password } = this.state;
    Auth.signIn(email, password).then(user =>
      this.props.navigation.navigate("Home").catch(err => console.log(err))
    );
  };

  handleConfirmationCode = () => {
    const { email, confirmationCode } = this.state;
    Auth.confirmSignUp(email, confirmationCode, {})
      .then(() => {
        this.setState({ modalVisible: false });
        this.props.navigation.navigate("Home");
      })
      .catch(err => console.log(err));
  };

  handleSignOut = () => {
    Auth.signOut()
      .then(() => this.props.navigation.navigate("Authentication"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome to CarpeMed </Text>
        <TextInput
          style={{
            width: 300,
            height: 50,
            margin: 10
          }}
          onChangeText={value => this.setState({ email: value })}
          type="flat"
          label="Username"
          placeholder="my@gmail.com"
          selectionColor="red"
          underlineColor="blue"
        />
        <TextInput
          style={{
            width: 300,
            height: 50,
            margin: 10
          }}
          onChangeText={value => this.setState({ password: value })}
          type="flat"
          label="Password"
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={{
            width: 300,
            height: 50,
            margin: 10
          }}
          onChangeText={value => this.setState({ confirmPassword: value })}
          type="flat"
          label="Confirm Password"
          placeholder="Confirm Password"
          secureTextEntry
        />
        <Button mode="contained" onPress={this.handleSignUp}>
          Sign Up
        </Button>

        <TextInput
          style={{
            width: 300,
            height: 50,
            margin: 10
          }}
          onChangeText={value => this.setState({ email: value })}
          label="Email"
          placeholder="Email"
        />
        <TextInput
          style={{
            width: 300,
            height: 50,
            margin: 10
          }}
          onChangeText={value => this.setState({ password: value })}
          label="Password"
          placeholder="Password"
        />
        <Button mode="contained" onPress={this.handleSignIn}>
          Sign In
        </Button>

        <Modal visible={this.state.modalVisible}>
          <View style={{ flex: 1 }}>
            <TextInput
              style={{
                width: 300,
                height: 50,
                margin: 10
              }}
              label="Confirmation Code"
              onChangeText={value => this.setState({ confirmationCode: value })}
            />
            <Button mode="contained" onPress={this.handleConfirmationCode}>
              Submit
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 50
  },
  welcome: {
    color: "blue"
  }
});
