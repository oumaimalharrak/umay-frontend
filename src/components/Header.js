import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../assets/umay-logo.png'

const Header = () => {
    const {height} = useWindowDimensions();
  return (
    <View  >
      <Image source={Logo} resizeMode= 'center' style={styles.logoHeadear}  />
      <Image source={Logo} resizeMode= 'center' style={styles.logoHeadear}  />
    </View>
  )
}


 const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        // height: 800
        
    },
    logoHeadear:{
        width: 100,
        // maxWidth: 300,
        // maxHeight: 200,
        // marginBottom: 70,
        // flex:3,
        // justifyContent: 'center',
        // alignItems: 'center',
        // position: 'absolute',
        // top: 0,
        // alignItems: 'flex-start',
        height: 100,
        backgroundColor: 'blue'

    }
 })
export default Header