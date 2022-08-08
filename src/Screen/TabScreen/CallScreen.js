import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { ConstantData, Images } from '../../assets/constants'
import { Display } from '../../utils'

export default class CallScreen extends Component {
   render() {
      return (
            <FlatList
               data={ConstantData}
               renderItem={({ item }) =>
                  <View style={styles.mainContainer}>
                     <View style={styles.imageContainer}>
                        <Image source={Images.USER}
                           style={styles.imageSize}
                           resizeMode="contain" />
                     </View>
                     <View style={styles.textMasseageContainer}>
                        <Text style={styles.textFontName}>{item.name}</Text>
                        <View style={styles.textMessage}>
                           <Text numberOfLines={1} ellipsizeMode={'tail'}>{item.massege}</Text>
                        </View>
                     </View>
                     <View >
                        <Text>3:5 Am</Text>
                        </View>
                  </View>}
            />
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flexDirection:'row',
   },
   mainContainer: {

   },
   textFontName: {
      fontSize: 18,
      fontWeight: "700"
   },
   textMessage: {
      width: Display.setWidth(65),
   },
   imageSize: {
      width:Display.setWidth(20),
      height:Display.setHeight(20)
   },
   imageContainer: {
      backgroundColor: 'red',
   },
   textMasseageContainer:{
      padding:2,
      marginHorizontal:5
   }

})