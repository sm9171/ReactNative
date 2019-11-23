//Ball.js

import React from 'react';
import {Text,View} from 'react-native';

function Ball(props){
    const ballStyle={
      width:50,
      height:50,
      backgroundColor:'#000',
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center'
      //flex layout
    };
    const textStyle={
      fontSize:18,
      color:'#fff',
      fontWeight:'bold'
    };
    if(props.num<16){
      ballStyle.backgroundColor='#f00';
    }else if(props.num<31){
      ballStyle.backgroundColor='#00f';
    }
    return(
      <View style={ballStyle}>
        <Text style={textStyle}>{props.num}</Text>
      </View>
    );
  }

  export default Ball;