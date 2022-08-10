import { Text, StyleSheet, View, FlatList } from 'react-native'
import React, { Component } from 'react'

export default class FlatlistComponent extends Component {
   render() {
      return (
         <View>
            <FlatList 
            data={data}
            renderItem={({})=>
         <View></View>
         }
            />
         </View>
      )
   }
}

const styles = StyleSheet.create({})