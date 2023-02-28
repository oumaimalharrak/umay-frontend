import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import axios from 'axios';
import moment from 'moment';

const format = 'YYYY-MM-DD';
const today = moment().format(format);

const CalendarWithEvents = ({getId, onDayPress}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dates, setMarkDates] = useState({});
  const [times, setTimes] = useState([]);


  useEffect(() => {
    axios
      .get(`http://10.0.2.2:5000/api/v1/doctors/${getId}/disponibility`)
      .then(response => {
        let markedDates = {};
        response.data.map(data => {
          const {dateAvailable} = data;
          // const {timeAvailable} = data;
          const tempDate = moment(dateAvailable).format('YYYY-MM-DD');
          // console.log(dateAvailable)
          const timeAvailable = moment(dateAvailable)
            .add(1, 'hour')
            .format('hh:mm A');
          setTimes(prev => [...prev, timeAvailable]);

          if (tempDate === today || tempDate> today) {
            // console.log(timeAvailable)
            markedDates[tempDate] = {
              selected: true,
              marked: true,
              selectedColor: '#2d47ae',
            };
          } else {
            markedDates[tempDate] = {
              selected: true,
              marked: false,
              selectedColor: '#d5daef',
            };
          }
        });

        setMarkDates(markedDates);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={dates}
        onDayPress={onDayPress}
        style={{borderRadius: 15,shadowColor: 'gray',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 5,}}
        markingType="multi-period"
        theme={{
          // backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#f97580',
          textSectionTitleDisabledColor: '#d9e1e8',
          // selectedDayBackgroundColor: 'black',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#f57687',
          dayTextColor: '#000',
          textDisabledColor: '#d9e1e8',
          dotColor: '#3f5092',
          selectedDotColor: '#ffffff',
          arrowColor: '#3f5092',
          disabledArrowColor: '#3f5092',
          monthTextColor: '#3f5092',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '400',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    // padding: 15,
    // height:300,
    // flex:1,
    // backgroundColor:'black'

    // alignItems:'center'
  },
});

export default CalendarWithEvents;
