import React, { Component } from 'react';
import { StyleSheet, View , Text } from 'react-native';
import UdaciStatusBar from './components/UdaciStatusBar';
import AddEntry from './components/AddEntry';
import UdaciFitnessCalendar from 'udacifitness-calendar';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <UdaciStatusBar backgroundColor={"grey"}/>
       <AddEntry />
       {/* <UdaciFitnessCalendar/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


let magazine=['two', 'times', 'three', 'is', 'not', 'four']
let note=['two', 'times', 'two', 'is', 'four']


function checkMagazine(magazine=['give', 'me', 'one', 'grand', 'today' ,'night'], note=['give', 'one' ,'grand', 'today']) {
  let map={}
  let replicable= true
	for (let i of magazine){
    map[i]=(map[i]||0)+1
  }
  for (let n of note){
    map[n]= (map[n]||0)-1
  }
  for ( let i in map ) {
    if ( map[i] < 0 ) {
        replicable = false;
        break;
    }
  }
console.log(replicable ? 'Yes' : 'No');
}

