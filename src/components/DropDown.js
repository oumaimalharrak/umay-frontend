import { View, Text , StyleSheet} from 'react-native'
import React, {useState} from 'react'
import { Dropdown } from 'react-native-element-dropdown';


const data = [
  { label: '28', value: '1' },
  { label: '29', value: '2' },
  { label: '30', value: '3' },
  { label: '31', value: '4' },
  { label: '32', value: '5' },
  { label: '33', value: '6' },
  { label: '34', value: '7' },
  { label: '36', value: '8' },
  { label: '37', value: '9' },
  { label: '38', value: '10' },
  { label: '39', value: '11' },
  { label: '40', value: '12' },
  { label: '41', value: '13' },
  { label: '42', value: '14' },
  { label: '43', value: '15' },
  { label: '44', value: '16' },
  { label: '45', value: '17' },
];

const DropDown = ({onChange, onChangeText}) => {
    const [value, setValue]= useState(null)

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        onChangeText={onChangeText}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Cycle Length : "
        value={value}
        onChange={onChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    // width: '50%',
    borderBottomColor: '#f57687',
    borderBottomWidth: 1,
    
   
  },
  icon: {
    marginRight: 10,
    
  },
  placeholderStyle: {
    fontSize: 12,
    // fontWeight: "700",
    color: '#3f5092',
    fontFamily: 'Outfit-Medium',

  },
  selectedTextStyle: {
    fontSize: 18,
    color: '#f57687',
    fontWeight: 'bold',
    fontFamily: 'Outfit-Medium',
    
   
  },
  iconStyle: {
    width: 20,
    height: 20,    
  },

});

export default DropDown