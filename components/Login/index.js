import React, {useState} from 'react';
import style from './styles';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '../IcoMoon';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const letsgo = () => {
    return navigation.navigate('Home', {email: email, password: password});
  };

  return (
    <View style={style.container}>
      <View style={style.headers}>
        <Text style={style.heading}>Hello Again!</Text>
        <Text>Please Login to your account</Text>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text style={style.label}>Email address</Text>

        <View style={style.inputView}>
          <TextInput
            value={email}
            onChangeText={e => setEmail(e)}
            style={style.TextInput}
            placeholder="Enter email address"
          />
          <Icon name="mail3" size={30} style={{padding: 5, paddingTop: 10}} />
        </View>
      </View>
      <Text style={style.label}>Password</Text>
      <View style={style.inputView}>
        <TextInput
          value={password}
          style={style.TextInput}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />
        <Icon name="eye" size={30} style={{padding: 5, paddingTop: 10}} />
      </View>
      <Text style={{marginBottom: 15, color: 'black', marginLeft: '42%'}}>
        Forget Password?
      </Text>
      <TouchableOpacity onPress={() => letsgo()} style={style.loginbtn}>
        <Text
          style={{
            color: 'white',
          }}>
          Let's Go
        </Text>
      </TouchableOpacity>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
        <Text style={{color: 'black'}}>Don't have an account? </Text>
        <Text>Register</Text>
      </View>
    </View>
  );
};

export default Login;
