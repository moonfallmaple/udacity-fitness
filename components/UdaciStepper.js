import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Platform} from 'react-native';
import { FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { white,purple } from '../utils/colors'

export default function UdaciStepper ({max,unit,step,value,onIncrement,onDecrement}) {
 
    return(
        <View style={styles.row}>
            {Platform.OS === 'ios'
        ? <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[styles.iosBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
              onPress={onDecrement}>
                <Entypo name='minus' size={30} color={purple} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.iosBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: 0}]}
              onPress={onIncrement}>
                <Entypo name='plus' size={30} color={purple} />
            </TouchableOpacity>
          </View>
        : <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.androidBtn} onPress={onDecrement}>
              <FontAwesome name='minus' size={30} color={white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.androidBtn} onPress={onIncrement}>
              <FontAwesome name='plus' size={30} color={white} />
            </TouchableOpacity>
          </View>}

          <View style={styles.metricCounter} >
            <Text style={{fontSize: 20, textAlign: 'center'}}>{value}</Text>
            <Text style={{fontSize: 18, color: 'gray'}}>{unit}</Text>
          </View>
        </View>
    )
     
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosBtn:{
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    width:60,
    paddingLeft: 15,
    paddingRight: 15,
  },
  androidBtn: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2,
  },
  metricCounter: {
    width: 80,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})