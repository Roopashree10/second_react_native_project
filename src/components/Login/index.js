import React, {useState} from 'react';
import style from './styles';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from '../IcoMoon';
import {loginApi} from '../../Services/Api';
import {setToken} from '../Redux/actions';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Login = ({}) => {
  const [email, setEmail] = useState('');
  const [showpassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const loginapi = () => {
    const requestBody = {
      email,
      password,
    };
    loginApi(requestBody)
      .then(response => {
        console.log(response);
        navigation.navigate('Home');
      })
      .catch(e => console.log(e));
    setEmail('');
    setPassword('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              onChangeText={setEmail}
              style={style.TextInput}
              placeholder="Enter email address"
            />
            <Icon name="mail3" size={20} style={style.icons} />
          </View>
        </View>

        <Text style={style.label}>Password</Text>
        <View style={style.inputView}>
          <TextInput
            value={password}
            style={style.TextInput}
            placeholder="Enter password"
            secureTextEntry={showpassword}
            onChangeText={e => setPassword(e)}
          />
          <Icon
            name="eye"
            onPress={() => setShowPassword(!showpassword)}
            size={20}
            style={style.icons}
          />
        </View>
        <Text style={style.forgetpassword}>Forget Password?</Text>
        <TouchableOpacity onPress={loginapi} style={style.loginbtn}>
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
    </TouchableWithoutFeedback>
  );
};

export default Login;
