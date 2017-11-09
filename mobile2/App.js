import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignUp from './SignUp';
import SignIn from './SignIn';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  static navigationOptions = {
    title: 'Home Page'
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Sign In'}
          onPress={() => {
            this.props.navigation.navigate('SignIn');
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
    backgroundColor: '#145A32',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Routes = StackNavigator({
  Home: { screen: Home },
  // SignIn: { screen: SignIn },
  // SignUp: { screen: SignUp },
});

export default Routes;