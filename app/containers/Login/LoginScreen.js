import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/action';
import { View, StyleSheet, TextInput, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    errorStatus:false
  };

  static navigationOptions = {
    header: null
  }


  signInAsync = async () => {
    const { password, username } = this.state;
    let loggedInUser = false;
    if (username === this.props.username && password === this.props.password) {
      loggedInUser = true;
      this.setState({errorStatus:false});
    }
    else{
      this.setState({errorStatus:true});
    }
    await this.props.login(username, password, loggedInUser);
  };

  render() {
    const { username, password,errorStatus} = this.state;
    return (
      <View style={styles.container}>
        <Image
          resizeMode='cover'
          source={require('../../assets/background.png')}
          style={styles.backdrop}
        />
        <View style={styles.subContainer}>
          <Image
            resizeMode='cover'
            source={require('../../assets/appiness_logo.png')}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Username"
            onChangeText={usr => this.setState({ username: usr })}
            value={username}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={pass => this.setState({ password: pass })}
            secureTextEntry
          />
          {errorStatus ? <Text style={{color:'red',fontSize:13}}>Username/Password is incorrect</Text> : null}
          <View
            style={styles.button}>
            <TouchableOpacity
              onPress={this.signInAsync}>
              <Text style={styles.buttonTitle}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.auth.username,
    password: state.auth.password,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  subContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 600,
    width: '90%',
    borderColor: 'grey',
    elevation: 10,
    marginTop:100,
    paddingBottom:150
  },
  input: {
    borderColor: '#01AFCC',
    borderWidth: 1,
    width: '80%',
    height: 44,
    borderRadius: 4,
    marginVertical: 5,
    paddingLeft: 10
  },
  button: {
    backgroundColor: '#01AFCC',
    borderWidth: 0,
    width: '80%',
    height: 44,
    justifyContent: 'center',
    marginTop:10,
    borderRadius:4
  },
  logo: {
    height: 100,
    width: 200,
    position: 'absolute',
    top: 0,
    left: '23%',
  },
  buttonTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },
  backdrop:{
    position:'absolute',
    bottom:0,
    right:0,
    width:'80%',
    height:300
  }
})

export default connect(mapStateToProps, {
  login,
})(LoginScreen);
