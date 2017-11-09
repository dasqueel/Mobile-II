import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import SignUp from './SignUp';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  static navigationOptions = {
    title: 'Sign In'
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>E-Mail:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
          keyboardType = {'email-address'}
          value={this.state.email} />

        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
          keyboardType = {'email-address'}
          value={this.state.email} />

        <Button
          title={'Sign In'}
          onPress={() => {
            // this.props.navigation.navigate('SignUp');
            // execute login function of sending email and password inputs to server
          }} />

        <Button
          title={'Sign Up'}
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '60%'
  }
});

const Routes = StackNavigator({
  Home: { screen: Home },
  SignUp: { screen: SignUp },
  SignIn: { screen: SignIn }
});

export default Routes;