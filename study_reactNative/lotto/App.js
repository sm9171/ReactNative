import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';

let numbers =[];
_.times(45, n => numbers.push(n+1));
numbers=_.shuffle(numbers);
numbers.length=6;
numbers=_.sortBy(numbers);

//리엑트 함수형 컴포넌트
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

export default function App() {

  return (
    <View style={styles.container}>
      <Ball num={numbers[0]}/>
      <Ball num={numbers[1]}/>
      <Ball num={numbers[2]}/>
      <Ball num={numbers[3]}/>
      <Ball num={numbers[4]}/>
      <Ball num={numbers[5]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});