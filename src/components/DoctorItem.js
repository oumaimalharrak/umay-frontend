import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const DoctorItem = ({image, fullname, onPress, speciality, image2, fees, adresse, feesText, itemHeight}) => {
  return (
    <TouchableOpacity style={[styles.itemContainer, itemHeight ?{height :itemHeight} :{}]} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View style={styles.description}>
        <Text style={styles.name}>{fullname}</Text>
        <Text style={styles.speciality}>{speciality} <Text >{adresse}</Text></Text>
      
        <Text style={styles.fees}>
         {feesText}  <Text style={{color: '#3f5092'}}>{fees} </Text>
        </Text>
      </View>
      <Image
        source={image2}
        style={{
          position: 'absolute',
          right: 0,
          margin: 20,
          height: 40,
          width: 40,
        }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
      alignItems: 'center',
 
    padding: 15,
    borderRadius: 15,
    width:'100%',
    // height:'70%',
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 5,
  },

  description: {
    paddingLeft: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#3f5092',
    textTransform: 'capitalize',
  },
  speciality: {
    // fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
    textTransform: 'capitalize',
    marginTop: 15,
  },
  fees: {
    paddingTop: 5,
    fontWeight: 'bold',
    color: '#f57687',
  },
});

export default DoctorItem;
