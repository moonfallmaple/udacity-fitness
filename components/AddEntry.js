import React,{Component} from 'react';
import { StyleSheet, Platform, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {getMetricMetaInfo, timeToString} from '../utils/helpers';
import UdaciStepper from './UdaciStepper';
import UdaciSlider from './UdaciSlider';
import DateHeader from './DateHeader';
import TextButton from './TextButton';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'
import { red, orange, blue, lightPurp, pink, white,purple } from '../utils/colors'


function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={Platform.OS ==='ios'? styles.iosSubmitBtn : styles.AndroidSubmitBtn}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

export default class AddEntry extends Component {

  state = {
    run:0,
    bike:0,
    swim:0,
    sleep:0,
    eat:0,
  }

  increment = (metric)=>{
    const {max,step}=getMetricMetaInfo(metric)
    this.setState((state)=>{
      const count =state[metric]+step
      return {
        ...state,
        [metric]: count > max ? max : count
      
      }

    })
  }

  decrement = (metric)=>{
    this.setState((state)=>{
      const count =state[metric]-getMetricMetaInfo(metric).step
      return {
        ...state,
        [metric]: count < 0 ? 0 : count,
      
      }

    })
  }

 slide = (key,value)=>{
   this.setState(()=>({
     [key]:value,
    })
  )
 }

 submit =()=>{
    const key= timeToString()
    const entry = this.state
    // update redux
    this.setState(()=>(
      {
        run:0,
        bike:0,
        swim:0,
        sleep:0,
        eat:0, 
      }
    ))
 }

 reset =()=>{
  const key= timeToString()
   // update redux
   // route to home 
   // update db
 }

  render() {

    const MetaInfo=getMetricMetaInfo()
    // if(true){
    //   return (
    //     <View style={styles.center}>
    //       <Ionicons  name={Platform.OS === "ios" ? "ios-happy" : "md-happy"} size={100} />
    //       <Text style={{textAlign:'center'}}>You already logged your information for today.</Text>
    //       <TextButton style={{ padding: '10', margin:'10' }} onPress={this.reset}>Reset</TextButton>
    //     </View>
    //   )
    // }
    return (
        //ScrollView: make the view can be scrolled
        <View style={styles.container}>
          <DateHeader date={(new Date()).toLocaleDateString()}/>
          {Object.keys(MetaInfo).map((key)=>{
              const { getIcon, type, ...rest } = MetaInfo[key]
              const value = this.state[key] 
                  return (
                    <View key={key} style={styles.row}>            
                          {getIcon()}
                          {type== "steppers" ? 
                            <UdaciStepper
                              value={value} 
                              onIncrement={() => this.increment(key)}
                              onDecrement={() => this.decrement(key)}
                              {...rest}/>
                              :
                            <UdaciSlider 
                              value={value} 
                              onChange={(value)=>this.slide(key,value)}
                              {...rest}
                              />

                          }
                    </View>
                    )})
          }
          <SubmitBtn onPress={this.submit} />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding:20,
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 18,
    textAlign: 'center',
  },
  row: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
   
  },
  center:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})