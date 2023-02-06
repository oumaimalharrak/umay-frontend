import {View,  TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = ({value, setValue, placeholder, secureTextEntry, type}) => {
  return (
    <View style={[styles.container, 
    styles[`container_${type}`]]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: '35%',
    width: '100%',

    // backgroundColor: "#fffff9",
    paddingHorizontal: 10,
    marginVertical: 5,
    // margin: 8,
    // alignItems: "center",
    borderColor: '#f57687',
    borderBottomWidth: 1,
    // justifyContent: "center"
  },
  container_BORDER:{
    borderWidth: 1,
    borderColor: '#f57687'
  },
  input: {
    color: '#f57687',
    fontSize: 16,
    fontFamily: 'Montserrat',
    letterSpacing: 2,
    fontWeight: '500',
  },
});

export default Input;
