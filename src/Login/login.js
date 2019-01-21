
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight , Alert} from 'react-native';


export default class Login extends Component {
    state = {
        account: "",
        password: "",
    };

    accountChangeHandler = val =>{
        this.setState({
            account: val
        });
    }

    passwordChangeHandler = val => {
        this.setState({
            password: val
        });
    }

    _onPressButton() {
        Alert.alert('You long-pressed the button!')
    }

    render() {
        let {signIn} = this.props; 
        return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Login to EnergyStation</Text>
            </View>
            <View style={styles.account}>
                <Text style={styles.input}>Account</Text>
                <TextInput
                    style={{ width: '70%'}}
                    value = {this.state.account}
                    placeholder="abc@gmail.com"
                    onChangeText={this.accountChangeHandler}
                />
            </View>
            <View style={styles.account}>
            <Text style={styles.input}>Password</Text>
            <TextInput
                value = {this.state.password}
                style={{ width: '70%'}}
                placeholder='password'
                onChangeText={this.passwordChangeHandler}
            />
            </View>
            <View style={styles.account}>
                <TouchableHighlight onPress={signIn} underlayColor="white">
                    <View style={styles.signUp}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={signIn} underlayColor="white">
                    <View style={styles.Login}>
                        <Text style={styles.buttonText}>SignUp</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
        );
    }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleContainer:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent: 'center',    
  },
  title: {
    fontSize: 25,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    color: '#333333',
    width:'30%'
  },
  account : {
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  signUp: {
    width: 100,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 10,
    marginHorizontal: 20
  },
  Login: {
    width: 100,
    alignItems: 'center',
    backgroundColor: '#9b1fd1',
    borderRadius: 10,
    marginHorizontal: 20
  },
  buttonText: {
    padding: 10,
    paddingHorizontal: 20,
    color: 'white'
  }
});