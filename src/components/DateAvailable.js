import { View, Text } from 'react-native'
import React from 'react'
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {UseGetDates} from './getDoctorList'


const format = 'YYYY-MM-DD';
const today = moment().format(format);

const DateAvailable = () => {
const {data, isLoading} = UseGetDates();

const getDateAvailable =()=>{

}


  return (
    <View>
      {isLoading ?(
        <Text>Loading....</Text>
      ):data ?(  
          <CalendarStrip
        selectedDate={today}
       scrollable
       style={{height:200, paddingTop: 20, paddingBottom: 10}}
       calendarColor={'#3343CE'}
       calendarHeaderStyle={{color: 'white'}}
       dateNumberStyle={{color: 'white'}}
       dateNameStyle={{color: 'white'}}
       iconContainer={{flex: 0.1}}
     />
     ) : (
      <Text>no data</Text>
     )}
   
    </View>
  )
}

export default DateAvailable