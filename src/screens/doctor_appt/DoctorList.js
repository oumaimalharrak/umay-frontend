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
import docIcon from '../../assets/images/docIcon.jpg';
import {Dropdown} from 'react-native-element-dropdown';
import {TextInput} from 'react-native-gesture-handler';

const DoctorList = () => {
  const {data, isLoading} = UseGetAllDoctors();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const handleDoctorPress = id => {
    console.log(id);
    setSelectedDoctorId(id);
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
          // onChangeText={handleSearch}
          value={searchTerm}
        />
        <Image
          source={require('../../assets/images/search.png')}
          style={styles.searchIcon}
          onPress={handleSearch}
        />
      </View>

      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <FlatList
            data={filteredData}
            renderItem={({item}) => (
              <DoctorItem
                image={docIcon}
                fullname={item.fullname}
                speciality={item.speciality}
                onPress={() => handleDoctorPress(item.id)}
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
