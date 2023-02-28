import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Custumbutton = ({onPress, text, type="PRIMARY", bgcolor, fgcolor, mgbottom, shadow, shadowColor}) => {
  return (
    <View style={[styles.btnContainer,
       styles[`btnContainer_${type}`],
      bgcolor ? {backgroundColor: bgcolor}:{},
      shadow ?{elevation : shadow}: {},
      shadowColor ?{shadowColor :shadowColor} :{}
    ]} >
     <TouchableOpacity onPress={onPress} >
          <Text
            style={[styles.text, 
              styles[`text_${type}`],
              fgcolor ?{color:fgcolor}:{},
              mgbottom ?{marginVertical :mgbottom} :{}
          ]}
            >
         {text}
          </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer:{
    // height: 50,
    width: '100%',
    // position: 'absolute',
    // bottom: 100,
    // right: 38,
    borderRadius: 5,
    // marginBottom: 10,
    padding: 12,
  },
  btnContainer_PRIMARY:{
    backgroundColor: '#f57687',
    marginVertical:25,


  },
  btnContainer_SECONDARY:{
    borderColor: '#f57687',
    borderWidth:1
  },
  btnContainer_TERTIARY:{
    marginVertical: 10
  },
  btnContainer_BOOKING:{
    width:350,
    borderRadius:15
  },
 text:{
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
  lineHeight: 25,
  fontWeight: 'bold',
 
  },
  text_TERTIARY:{
    color: "gray",
    fontSize: 14,
    
  },
  text_SECONDARY:{
    color: '#f57687',
    fontSize: 18
  }
})

export default Custumbutton