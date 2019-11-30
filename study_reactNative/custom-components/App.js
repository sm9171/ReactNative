import React from 'react';
import {TextInput, StyleSheet, View } from 'react-native';
import Button from './components/Button'
import Input from './components/Input'
import TextArea from './components/TextArea'


export default function App() {
  return (
    <View style={styles.container}>
      <Input/>
    <TextArea/>
     <Button>
        내가 만든 버튼
     </Button>
     <Button>
        내가 만든 버튼1
     </Button>
     <Button type="danger">
        삭제
     </Button>
     <Button type="warning">
        경고
     </Button>
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
