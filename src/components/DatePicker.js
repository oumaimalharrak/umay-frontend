import { View} from 'react-native'
import React, {useState} from 'react'
import DatePicker from 'react-native-modern-datepicker';
import { getToday } from 'react-native-modern-datepicker';


const Date = () => {
    const [selectedDate, setSelectedDate] = useState('');
  return (
    <View>
      <DatePicker
       onSelectedChange={date => {
        // console.log(date)
        setSelectedDate(date)}}
      options={{
        // backgroundColor: '#090C08',
        textHeaderColor: '#f97580',
        textDefaultColor: '#3f5092',
        selectedTextColor: '#fff',
        mainColor: '#f57687',
        textSecondaryColor: '#3f5092',
        borderColor: 'rgba(122, 146, 165, 0.1)',
        textHeaderFontSize: 16,
        
      }}
     
      current={getToday()}
      selected={selectedDate}
      mode="calendar"
      minuteInterval={30}
      style={{ borderRadius: 10 }}/>
    </View>
  )
}

export default Date