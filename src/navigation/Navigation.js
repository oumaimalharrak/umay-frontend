import {Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ForgotPwdScreen from '../screens/ForgotPwdScreen';
import NewPwdScreen from '../screens/NewPwdScreen';
import HomeScreen from '../screens/HomeScreen'
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/LoginScreen';
import Index from '../screens/Index';
import CalendarScreen from '../screens/CalendarScreen';
import TabNav from './TabNav';
import DoctorList from '../screens/doctor_appt/DoctorList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const Stack = createNativeStackNavigator();

const queryClient = new QueryClient()

const Navigation = () => {
  return (
    <QueryClientProvider client={queryClient} >
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={HomeScreen} />  */}
         {/* <Stack.Screen name='Login' component={LoginScreen}/> */}
        {/* <Stack.Screen name='Index' component={Index}/> */}
         {/* <Stack.Screen name='SignUp' component={SignUpScreen}/>  */}
        {/* <Stack.Screen name="Confirmation" component={ConfirmationScreen} /> */}
        {/* <Stack.Screen name='ForgotPWD' component={ForgotPwdScreen}/> */}
        {/* <Stack.Screen name='newPWD' component={NewPwdScreen}/>  */}
        {/* <Stack.Screen name='calendar' component={TabNav}  */}
         {/* /> */}
         <Stack.Screen name='doctorList' component={DoctorList}/>
 
      </Stack.Navigator>
    
    </NavigationContainer>
    </QueryClientProvider>
    
  );
};



export default Navigation;
