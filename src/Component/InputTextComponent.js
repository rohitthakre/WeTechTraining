import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { Display } from '../utils';
import { Colors } from '../assets/constants';

export default function InputTextComponent() {
  return (
    <View style={styles.Container}>
      <TextInput
            placeholder='UserName'
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            width={Display.setWidth(70)}
          />
    </View>
  )
}

const styles =StyleSheet.create({
Container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
}
});
