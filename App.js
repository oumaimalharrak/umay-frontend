// In App.js in a new project

import * as React from 'react';


import { SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation/Navigation';




function App() {
  return (
    
    <SafeAreaView style={styles.root} >
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#fff9fa',
    
  }
})

export default App;