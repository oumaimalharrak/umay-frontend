import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Custumbutton from '../components/Custumbutton';
import { ScrollView } from 'react-native';
import SocialSignUpBtn from '../components/SocialSignUpBtn';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const SignUpScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const navigation =useNavigation();

  const onRegisterPress= async (userName, email, password)=>{
    // const dataHandled= JSON.stringify({  userName,
    //   email,
    //   password})
    //   const response = await axios.post('http://10.0.2.2:5000/api/v1/users/signup', dataHandled);
    //   console.log('data',data)
    //   return  response.data;
     navigation.navigate('calendar')
  } 
   
  
  const onTermsPressed=()=>{
    console.warn('pressed pwd')
  }
  const onPolicyPressed=()=>{
    console.warn('pressed pwd')
  }
  const onSignInPressed =()=>{
    navigation.navigate('Login')

  }



  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
    <Text style={styles.title} >Create an account</Text>
      <Input placeholder="UserName" value={userName} setValue={setUserName} />
      <Input placeholder="Email" value={email} setValue={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Input
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />
      <Custumbutton text="Register" onPress={onRegisterPress} />
      <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link}  onPress={onTermsPressed} >{'\n'}Terms of use</Text> and <Text style={styles.link}  onPress={onPolicyPressed} >Privacy Policy</Text> </Text>

    <SocialSignUpBtn/>
    <Custumbutton
     text="Have an account? Sign in" 
    onPress={onSignInPressed}
    type="TERTIARY"
    />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#fff9fa',
    alignItems: 'center',
    padding: 20,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  title:{
    fontSize:26,
    fontWeight: "bold",
    color: "#3c4e90",
    padding: 20
  },
  text:{
    color: "#a1a4a5",
    fontSize:15,
    fontFamily: "Outfit-Regular",
    marginVertical:10,
    lineHeight:20,
    
    
  },
  link: {
    color: "#47477e",
    textDecorationLine: "underline",
    fontFamily: "Outfit-Regular"
  }

 
});

export default SignUpScreen;
