import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import DateAvailable from '../../components/DateAvailable';
import DocImg from '../../assets/images/docIcon.jpg';
import Time from '../../components/Time';
import DoctorItem from '../../components/DoctorItem';
import Custumbutton from '../../components/Custumbutton';
import Header from '../../components/Header';

const Bookingscreen = ({route, navigation}) => {
  const item = route.params;
  const {id, fullname, adresse, price, speciality} = item;

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <Header onPress={()=> navigation.navigate('doctorList')} />
      <Text style={styles.title}>Detail Doctor</Text>
      </View>
   
      <View style={styles.calendar}>
        <DateAvailable getId={id}  />
      </View>
      <View style={styles.docDetails}>
        <DoctorItem
          image={DocImg}
          fullname={fullname}
          speciality={speciality}
          adresse={`, ${adresse} Maroc`}  
          itemHeight='95%'
        />
        
       </View>

      <View style={styles.hours}>
        <Time />
      </View>
      <View style={styles.bookingBtn} >
      <Custumbutton text='Book Now' bgcolor='#2d47ae' type='BOOKING'  />

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#3f5092',
    textTransform: 'capitalize',
    padding: 20,
    marginLeft:50,
    textAlign: 'center',
    justifyContent:'center'
  },
  docDetails: {
    flex: 1,
    width:'92%' ,
    // height:100,
    flexDirection: 'row',
    // marginTop: 30,
    paddingLeft: 10,
    margin:10,
    // backgroundColor:'red',


  },
  docInfo: {
    flexDirection: 'column',
    paddingLeft: 15,
  },
  textInfo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#3f5092',
    textTransform: 'capitalize',
    paddingLeft: 10,
    // textAlign:'center'
  },
  calendar: {
    alignItems: 'center',
    
    
  },
  docImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  hours: {
    flex: 1,
    marginHorizontal:10,
    marginBottom:30,
    

  },
  bookingBtn:{
    flex:1,
    paddingTop:25,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  }
});
export default Bookingscreen;
