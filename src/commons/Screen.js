import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  PixelRatio,
  Platform,
  Clipboard,//剪切板中存放
  Alert,
  Vibration,//震动
  CameraRoll,//将照片保存到本地
  NetInfo,//网络状态
} from 'react-native';

var Geolocation = require('Geolocation');

export default{

  width:Dimensions.get('window').width,
  height:Dimensions.get('window').height,
  onePixel:1/PixelRatio.get(),
  statysBarHeight:(Platform.OS === 'ios' ? 20 : 0),

  //粘贴板复制方法
  copyToClipboard(text){
    if (!!text) {
      Clipboard.setString(text);
    }
  },
  //粘贴板取值方法
  pastFromClipboard(){
    Clipboard.getString().then(
      (text)=>{
        return text;
      }
    ).catch(
      (error)=>{
        console.log('剪切板读取信息错误：'+error);
      }
    );
  },

  //弹出信息
  alertAny(obj){
    Alert.alert(obj);
  },

  alertAny(obj,btnText){
    Alert.alert(obj,[{text:btnText}]);
  },

  alertAny(obj,btnText,onClick){
    Alert.alert(obj,[{text:btnText,onPress:onClick}]);
  },

  alertTitleAndSubTitle(title,subTitle){
    Alert.alert(title,subTitle);
  },

  alertTitleAndSubTitle(title,subTitle,btnText){
    Alert.alert(title,subTitle,[{text:btnText}]);
  },

  alertTitleAndSubTitle(title,subTitle,btnText,onClick){
    Alert.alert(title,subTitle,[{text:btnText,onPress:onClick}]);
  },

  //定位
    //获取位置
  getLocation() {
    Geolocation.getCurrentPosition(
        location => {
            var result = "速度：" + location.coords.speed +
                        "\n经度：" + location.coords.longitude +
                        "\n纬度：" + location.coords.latitude +
                        "\n准确度：" + location.coords.accuracy +
                        "\n行进方向：" + location.coords.heading +
                        "\n海拔：" + location.coords.altitude +
                        "\n海拔准确度：" + location.coords.altitudeAccuracy +
                        "\n时间戳：" + location.timestamp;
            return result;
        },
        error => {
          console.log("获取位置失败："+ error);
        }
    )
  },

  //点击震动
  vibration() {
    Vibration.vibrate();
  },

  //检测网络状态
  checkedNetWorking(){
    
  },

};
