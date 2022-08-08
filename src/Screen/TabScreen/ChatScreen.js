import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class
   extends Component {
   render() {
      return (
         <View style={styles.conatiner}>
            <Text>Chat Screen</Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   conatiner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})