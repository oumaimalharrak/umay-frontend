import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import DoctorList from '../screens/doctor_appt/DoctorList';



const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
   <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false,
    tabBarStyle: {backgroundColor: '#fefcfd', borderTopRightRadius: 15, borderTopLeftRadius:15},
    tabBarInactiveTintColor: '#60585d',
    tabBarActiveTintColor: '#f57687'
    }} >
    <Tab.Screen name='calendarTab' component={CalendarScreen}
     screenOptions={{
        tabBarIcon: ({color, size})=>
          (
            <Ionicons name="settings-outline" color={color} size={size} />

          )
        
    }} />
    <Tab.Screen name='doctorList' component={DoctorList} />

   </Tab.Navigator>
  )
}

export default TabNav