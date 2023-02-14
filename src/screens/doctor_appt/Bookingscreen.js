import { View, Text } from 'react-native'
import React from 'react'
import DateAvailable from '../../components/DateAvailable'

const Bookingscreen = ({route, navigation}) => {

const item= route.params

console.log('the item is',item)
  return (
    <View>
      <Text style={{color:'red'}}>{item.fullname}</Text>
      <DateAvailable/>
    </View>
  )
}

export default Bookingscreen