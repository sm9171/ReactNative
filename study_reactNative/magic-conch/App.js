import React from 'react';
import {Image,TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const url='https://thumb.pann.com/tc_480/http://fimg4.pann.com/new/download.jsp?FileID=50220705';

const answers=[
  '"둘 다."',
  '"하지마."',
  '"안돼."',
  '"다시 질문해 봐."',
  '"언젠가는."',
  '"조만간."',
]


export default function App() {
  const [answer,setAnswer]=React.useState('');
  function ask(){
    const index =Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  }
  const answerStyle ={fontSize:24,fontWeight:'bold'};
  return (
    <View style={styles.container}>
      <Text>질문을 말한 후 소라고둥을 터치해 주세요</Text>
      <TouchableOpacity onPress={ask}>
        <Image source={{uri:url}} style={{width:256,height:256}}/>
      </TouchableOpacity>
      <Text style={answerStyle}>{answer}</Text>
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
