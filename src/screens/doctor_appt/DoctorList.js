import {FlatList, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import { UseGetAllDoctors } from '../../components/gteDoctorList';

const DoctorList = () => {
 const{data, isLoading }= UseGetAllDoctors();


//   const renderItem = ({item}) => {
//     return (
//      
//         <Text>{item.fullname}</Text>
//       </View>
//     );
//   };
  return (
    <View>
     {isLoading ? (
        <Text>Loading...</Text>
     ): data ?(
        data.map((item, key)=>{
            return(
                <View>
                    <Text>{item.fullname}</Text>
                </View>
            )
        })
     ) : (
        <Text>Data not available</Text>
     )}
       
   
    </View>
  );
};

export default DoctorList;
