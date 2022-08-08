import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class ContactScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ContactScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
   }
})