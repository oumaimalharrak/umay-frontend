import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Custumbutton from '../components/Custumbutton';
import {ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmationScreen = () => {
  const [code, setcode] = useState('');
const navigation =useNavigation()
  const onConfirmPress = () => {
    console.warn('pressed');
  };
  const onResendCodePressed = () => {
    console.warn('code resended');
  };
  const onSignInPressed =()=>{
    navigation.navigate('Login')
  }

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>
        <Input
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setcode}
          type="BORDER"
        />

        <Custumbutton text="CONFIRM" onPress={onConfirmPress} />

        <Custumbutton
          text="Resend code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />
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
    alignItems: "flex-start"
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

export default ConfirmationScreen;
