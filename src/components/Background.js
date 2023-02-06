import { View, Text, ImageBackground, StyleSheet } from 'react-native'
// import loginImage from '../assets/login-background.jpg'

const Background = ({children}) => {
  return (
    <View >
      
        <ImageBackground source={require('../assets/images/login-background-removebg.png')} resizeMode="center"  style={{height: '100%', width: '100%'}}/>
        <View>
            {children}
        </View>
     
    </View>
  )
}

export default Background