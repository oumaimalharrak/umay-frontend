import {View, StyleSheet, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import DropDown from '../components/DropDown';
import Custumbutton from '../components/Custumbutton';


const format = 'YYYY-MM-DD';
const today = moment().format(format);
const maxDate = moment().add(100, 'days').format(format);

const CalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({today});
  const [selectedDates, setSelectdates] = useState([]);
  const [value, setValue] = useState(null);
  const [nextMens, setNextMens] = useState([]);
  const [ovulation, setOvulation] = useState([]);
  const [show, setShow] = useState(false);

//get stored data on load
  useEffect(() => {
    getdates();
  }, []);

  const onDaySelect = async day => {
    let temp = [...selectedDates];
    const selectedDay = moment(day.dateString).format(format);

    let selected = true;
    if (markedDates[selectedDay]) {
      delete temp[selectedDay];
      selected = !markedDates[selectedDay].selected;
    } else {
      temp.push(selectedDay);
      setSelectdates(temp);
    }
    const updatedMarkedDates = {
      ...markedDates,
      ...{[selectedDay]: {selected: true, selectedColor: '#f57687'}},
    };

    setMarkedDates(updatedMarkedDates);
    //stored the multi-selected dates (localstorage)
    try {
      await AsyncStorage.setItem(
        'selectedDates',
        JSON.stringify(updatedMarkedDates),
      );
      await AsyncStorage.setItem(
        'markedDates',
        JSON.stringify(updatedMarkedDates),
      );
      // console.log(temp);
      console.log(updatedMarkedDates);
    } catch (error) {
      // Error saving data
      console.log(error);
    }

  };
  //reading stored dates
  const getdates = async () => {
    try {
      const savedDates = await AsyncStorage.getItem('selectedDates');
      const savedTemplate = await AsyncStorage.getItem('markedDates');
      const currentDates = JSON.parse(savedDates);
      const currentColor = JSON.parse(savedTemplate);
  
    } catch (error) {
      console.log(error);
    }
  };

  // calculate next menstruation

// predict ovulation function
  const predictOvulation = () => {
    const selectedDay = new Date(selectedDates[0]);
    let cycleLength = parseInt(value);
    let ovulationPeriod = cycleLength - 1 - 14;
    selectedDay.setDate(selectedDay.getDate() + ovulationPeriod);
    setOvulation(selectedDay.toLocaleDateString('en-GB'));
    //set true the component
    setShow(!show);
    //call next period function
    nextMen();
  };
  const nextMen = () => {
    const selectedDay = new Date(selectedDates[0]);
    let cycleLength = parseInt(value);
    let nextDate = cycleLength - 1;

    console.log('selecteeed', selectedDay);
    selectedDay.setDate(selectedDay.getDate() + nextDate);
    setNextMens(selectedDay.toLocaleDateString('en-GB'));

  };
//rendering Prediction component
  const Rows = () => {
    return (
      <View style={styles.rowContainer}>
        <View style={{flexDirection:'row', marginTop:10}}>
        <Image source={require('../assets/images/blood-icon.png')} style={{width: 40, height: 40}} />
        <View style={{flexDirection:'row', marginTop:15}}>
          <Text style={styles.text}> Period start on</Text>

          <Text style={styles.dates}>
          {'                 '}{nextMens}
          </Text>
        </View>
        </View>

        
      <View style={{flexDirection:'row', marginVertical:30}} >
            
        <Image source={require('../assets/images/baby-icon.png')} style={{width: 40, height: 40}} />
          <View style={{ flexDirection: 'row', marginTop:15}} >
          <Text style={styles.text}>{'  '}Fertile phase start on</Text>
          <Text style={styles.dates} >{'     '}{ovulation}</Text>
          </View>
          </View>
       
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DropDown
        onChange={item => {
          setValue(item.label);
        }}
        style={{backgroundColor:'red'}}
      />
      <Calendar
        markingType="multi-period"
        minDate={today}
        maxDate={maxDate}
        onDayPress={onDaySelect}
        markedDates={markedDates}
        theme={{
          // backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: 'gray',
          textSectionTitleDisabledColor: '#d9e1e8',
          // selectedDayBackgroundColor: 'black',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#fd6f7f',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#f57687',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '200',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
        style={styles.calendar}
      />
      <Custumbutton
        text="Predict"
        onPress={predictOvulation}
        shadow={20}
        shadowColor="#6b6b6b"
      />
    
      { show && <Rows/>}
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
  },
  
 rowContainer: {
    // flex: 2,
    flexDirection:'column',
    // justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 180,
    elevation: 20,
    shadowColor: '#6b6b6b',
    borderRadius: 15,
    padding:20,
    alignItems: 'flex-start',
    

  },
 
  text: {
    flexDirection: 'row',
    fontSize: 14,
    color: '#3f5092',
    fontFamily: 'Outfit-Medium',
  
   
    // lineHeight:1
  },
  dates: {
    fontWeight:'bold'
  },
  calendar: {
    elevation: 20,
    shadowColor: '#6b6b6b',
    borderRadius: 15,
  },
  btn: {
    elevation: 20,
    shadowColor: '#6b6b6b',
  },
});

export default CalendarScreen;
