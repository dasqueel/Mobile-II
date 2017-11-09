import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import SignIn from './SignIn';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.signUp = this.signUp.bind(this);
  }

  signUp() {
    // const navigate = this.navigate.bind(this)
    // axios
    axios.post('https://mobile-server-ii.herokuapp.com/users', {
      email: this.state.email,
      password: this.state.password,
    })
    .then(res => {
      // store jwt
      AsyncStorage.setItem('token', response.data.token).then(() => {
        this.props.navigation.navigate('Content');
      });
    })
    .catch(err = console.log(err));
  }

  static navigationOptions = {
    title: 'Sign Up'
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
          onChangeText={(password) => this.setState({ password })}
          keyboardType = {'email-address'}
          value={this.state.password} />

        <Button
          title={'Sign Up'}
          // this.props.navigation.navigate('SignUp');
          // execute create user function of sending email and password inputs to server
          // which creates and stores user and sends back a jwt and for signing in user
          onPress={this.signUp} />

        <Button
          title={'Sign In'}
          onPress={() => {
            this.props.navigation.navigate('SignIn');
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