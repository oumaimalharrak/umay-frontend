import { View, StyleSheet,  } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = ({onPress}) => {
  return (
    <View style={styles.container} >
      <AntDesign name='left' size={25} color='gray' onPress={onPress} />
    </View>
  )
}


 const styles = StyleSheet.create({

  container:{
    // backgroundColor:'green',
    padding:20
  }
 })
export default Header