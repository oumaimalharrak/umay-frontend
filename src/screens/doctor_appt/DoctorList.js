import {
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UseGetAllDoctors} from '../../components/getDoctorList';
import DoctorItem from '../../components/DoctorItem';
import docIcon from '../../assets/images/doc.png';
import {TextInput} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';


const DoctorList = () => {
  const navigation =useNavigation();

  const {data, isLoading} = UseGetAllDoctors();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const handleDoctorPress = (item) => {
    // console.log('the id is',item.id);
    setSelectedDoctorId(item.id);
    navigation.navigate('bookingScreen', item)

  };



  const handleSearch = text => {
    setSearchTerm(text);
    setFilteredData(
      data.filter(item =>
        item.fullname.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  };
  // const renderItem = ({item}) => {
  //   return (
  //    <View>
  //       <DoctorItem
  //           name={item.fullname}
  //           onPress={() => handleDoctorPress(item.id)}
  //         />
  //     </View>
  //   );
  // };
  return (
    <View>

      <View style={styles.searchcontainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search a Doctor"
          placeholderTextColor="#3f5092"
          onChangeText={handleSearch}
          value={searchTerm}
        />
        <Image
          source={require('../../assets/images/search.png')}
          style={styles.searchIcon}
        />
      </View>

      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <DoctorItem
                image={docIcon}
                fullname={item.fullname}
                speciality={item.speciality}
                fees={` ${item.price} $`}
                feesText='Fees'
                onPress={() => {
                  handleDoctorPress(item)
                  // navigation.navigate('bookingScreen', item)
                }}
                image2={require('../../assets/images/calendar.png')}

              />
            )}
            keyExtractor={item => item.id.toString()}
            scrollEnabled={true}
            contentContainerStyle={{flexGrow: 1}}
            ItemSeparatorComponent={() => <View style={{height: 12}} />}
          />
        ) : (
          <Text>Data not available</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  backgroundColor:'red',
    padding: 10,
  },
  searchcontainer: {
    flexDirection: 'row',
    margin: 20,
    padding: 5,
    backgroundColor: 'red',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  searchBar: {},
  searchIcon: {
    position: 'absolute',
    right: 0,
    margin: 15,
    // padding:10
  },
});
export default DoctorList;
