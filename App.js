/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import ButtonE from './example/button';
import AvatarE from './example/avatarE';
import TextInputE from './example/textInputE';
import MessageE from './example/messageE';
import ProgressE from './example/ProgressE';
import RadioE from './example/radioE';
import BadgeE from './example/BadgeE';
import DividerE from './example/DividerE';
import ToolTipE from './example/ToolTipE';
import RadioGroupE from './example/radioGroupE';
import CardE from './example/cardE';
import SwitchE from './example/SwitchE';
type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
      <SwitchE/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding : 10,
  },
  arrow:{
  borderWidth:10,
  borderWidth:10,
  borderTopColor:'#fff',//下箭头颜色
  borderLeftColor:'#171717',//右箭头颜色
  borderBottomColor:'#fff',//上箭头颜色
  borderRightColor:'#fff'//左箭头颜色
},
  top:{
    borderWidth:10,
    borderTopColor:'rgba(255,255,255, 0)',//下箭头颜色
    borderLeftColor:'rgba(255,255,255, 0)',//右箭头颜色
    borderBottomColor:'#171717',//上箭头颜色
    borderRightColor:'rgba(255,255,255, 0)'//左箭头颜色
  },
  bottom:{
    borderWidth:10,
    borderTopColor:'#171717',//下箭头颜色
    borderLeftColor:'rgba(255,255,255, 0)',//右箭头颜色
    borderBottomColor:'rgba(255,255,255, 0)',//上箭头颜色
    borderRightColor:'rgba(255,255,255, 0)'//左箭头颜色
  },
  left:{
    borderWidth:10,
    borderTopColor:'rgba(255,255,255, 0)',//下箭头颜色
    borderLeftColor:'rgba(255,255,255, 0)',//右箭头颜色
    borderBottomColor:'rgba(255,255,255, 0)',//上箭头颜色
    borderRightColor:'#171717'//左箭头颜色
  },
  right:{
    borderWidth:10,
    borderTopColor:'rgba(255,255,255, 0)',//下箭头颜色
    borderLeftColor:'#171717',//右箭头颜色
    borderBottomColor:'rgba(255,255,255, 0)',//上箭头颜色
    borderRightColor:'rgba(255,255,255, 0)'//左箭头颜色
  }

});
