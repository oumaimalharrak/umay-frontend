import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Custumbutton from '../components/Custumbutton';
import {ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewPwdScreen = () => {
  const [code, setcode] = useState('');
  const [password, setPassword] = useState('')
  const navigation =useNavigation()

  const onSubmitPress = () => {
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    navigation.navigate('Login')
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <Input
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setcode}
          type="BORDER"
        />
         <Input
          placeholder="Enter new password"
          value={password}
          setValue={setPassword}
          type="BORDER"
        />

        <Custumbutton text="Submit" onPress={onSubmitPress} />

        <Custumbutton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // flexDirection: 'column',
    backgroundColor: '#fff9fa',
    alignItems: 'center',
    padding: 20,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3c4e90',
    padding: 20,
    justifyContent: 'flex-start',
  },
  text: {
    color: '#a1a4a5',
    fontSize: 15,
    fontFamily: 'Outfit-Regular',
    marginVertical: 10,
    lineHeight: 20,
  },
  link: {
    color: '#47477e',
    textDecorationLine: 'underline',
    fontFamily: 'Outfit-Regular',
  },
});

export default NewPwdScreen;
