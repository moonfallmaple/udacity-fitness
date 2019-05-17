import React,{Component} from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';



export default function UdaciSlider ({max,unit,step,onChange,value}) {

    return (
      <View style={styles.row}>
        <Slider
          style={{flex:1}}
           step={step}
           value={value}
           maximumValue={max}
           minimumValue={0}
           onValueChange={onChange}
        />
        <View style={styles.metricCounter}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>{value}</Text>
          <Text style={{fontSize: 18, color: 'gray'}}>{unit}</Text>
        </View>
      </View>)
 
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricCounter: {
    width: 80,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
})
