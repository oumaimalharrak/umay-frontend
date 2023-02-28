import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';


const Time = ({onPress}) => {
  const times = [
    {id: 1, time: '9:00 - 09:30'},
    {id: 2, time: '11:00 - 11:30'},
    {id: 3, time: '12:00 - 12:00'},
    {id: 4, time: '15:00 - 15:30'},
    //   {id:5, time:'1:00 PM'},
    //   {id:6, time:'2:00 PM'},
    //   {id:7, time:'3:00 PM'},
    //   {id:8, time:'4:00 PM'},
    //  { id:9, time:'5:00 PM'},
    //  { id:10, time:'6:00 PM'},
  ];




const onTimePress =()=>{
  console.log('time pressed')
}

  const renderItem = ({item, id}) => {
    return (
      <TouchableOpacity style={styles.item} >
        <Text  onPress={onTimePress} >{item.time}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.itemTitle} >Booking Time</Text>
      <FlatList
        numColumns={2}
        data={times}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        
        

      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    width:350,
    height:150,
    borderRadius:15,
    margin:10,
    padding:10,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 5,
  },
  item: {
    padding: 10,
    margin: 5,
    borderRadius:15,
    width:150,
    alignItems:'center',
    backgroundColor:'#eaeced'
  },
itemTitle:{
  fontWeight: 'bold',
  fontSize: 18,
  color: '#3f5092',
  textTransform: 'capitalize',
  textAlign: 'left',
  marginBottom:5
}
});

export default Time;
