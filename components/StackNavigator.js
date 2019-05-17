import React,{Component} from 'react';
import { Text,View , Platform} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator,createStackNavigator  } from 'react-navigation';
import {Ionicons} from '@expo/vector-icons';
import TabNavigator from './TabNavigator'

export default MainNavigator = createStackNavigator ({
    Home:{
        screen:TabNavigator
    },
    Dashboard:{
        screen:Dashboard,
    }
})


