import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import logo from '../assets/images/logo.png';
import Input from '../components/Input';
import Custumbutton from '../components/Custumbutton';
import { ScrollView } from 'react-native';
import SocialSignUpBtn from '../components/SocialSignUpBtn';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const {height} = useWindowDimensions();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
 const navigation =useNavigation()
 
  const onSignInPress= ()=>{
    navigation.navigate('calendar')
  }
  const onForgotPasswordPress=()=>{
    navigation.navigate('ForgotPWD')
  }

  const onSignUpPress= ()=>{
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        resizeMode="contain"
        style={[styles.logoImg, {height: height * 0.3}]}
      />
      <Input placeholder="UserName" value={userName} setValue={setUserName} />
      
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Custumbutton text="Sign In" onPress={onSignInPress}  />

      <Custumbutton text="Forgot password" onPress={onForgotPasswordPress} type="TERTIARY" mgbottom={-15} />
    <SocialSignUpBtn/>
      <Custumbutton text="Dont't have an account? Create one" onPress={onSignUpPress} type="TERTIARY"  />

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:2,
    flexDirection: 'column',
    backgroundColor: '#fff9fa',
    alignItems: 'center',
    padding: 20,
    height: '100%'
  },
  logoImg: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    // flex:3,
    justifyContent: 'center',
    alignItems: 'center',

    // paddingTop: 10
  },

 
});

export default LoginScreen;
