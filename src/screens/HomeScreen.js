import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Background from '../components/Background';

const HomeScreen = () => {
  const navigation =useNavigation();

  const onRegisterPressed =()=>{
    navigation.navigate('SignUp')
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 2, }}>
        <Text style={styles.text}>
          Predict Cycle accurately &{' '}
          <Text style={styles.text2}> {'\n'}Track period </Text>{'\n'}Easily
        </Text>
      </View>
      <View style={{flex: 2, paddingBottom:5}}>
        <Background style={styles.image} />
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.button} onPress={onRegisterPressed} >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              lineHeight: 25,
              fontWeight: 'bold',
              
            }}>
           Register
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policyText} >If you continue, you agree to the{'\n'}<Text style={{color: "#47477e", textDecorationLine: "underline", fontFamily: "Montserrat-Regular"}} onPress={() => Linking.openURL('http://google.com')} >Privacy Policy </Text> &  the <Text style={{color: "#47477e", textDecorationLine: "underline"}} onPress={() => Linking.openURL('http://google.com')} >Terms of Service</Text> </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    // marginBottom: 30,
    // borderTopColor: 'red',
    // marginBottom: 30,
  },
  text: {
    color: '#3c4e90',
    fontSize: 38,
    lineHeight: 54,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 25,
    paddingTop: 25,
    fontFamily: 'Outfit-Bold',
  },
  text2: {
    color: '#fd6f7f',
    // fontFamily: 'Outfit-Bold',
  },
  button: {
    backgroundColor: '#f57687',
    height: 50,
    width: '80%',
    position: 'absolute',
    bottom: 100,
    right: 38,
    borderRadius: 14,
    marginBottom: 10,
    padding: 12,
  },
  policyText:{
    
    color: "#b3b6b7",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    textAlign:"center",
    bottom: 30,
    marginLeft:55,
    lineHeight: 25,
    fontFamily: "Montserrat-Regular"
  }
});

export default HomeScreen;
