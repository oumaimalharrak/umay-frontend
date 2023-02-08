import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const DoctorItem = ({image, fullname, onPress, speciality, image2}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      
      <Image style={styles.image} source={image} />
      <View style={styles.description}>
        <Text style={styles.name}>{fullname}</Text>
        <Text style={styles.speciality}>{speciality}</Text>
    
      </View>
        <Image source={image2} style={{position:'absolute', right:0, margin:20}}/>
        </TouchableOpacity>
  
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection:'row',
    //   alignItems: 'flex-start',
    padding: 15,
    borderRadius:15,
  
    backgroundColor:'white',
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 5
   
    
  },

  description: {
    paddingLeft: 15,
    // justifyContent: 'space-between'
    // flexDirection:'row',
    // alignItems: 'flex-end'
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
});

export default DoctorItem;
