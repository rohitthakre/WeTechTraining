import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { ConstantData, Images } from '../../assets/constants'
import { Display } from '../../utils'
import { Seprator } from '../../Component'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class CallScreen extends Component {
   render() {
      return (
         <FlatList
            data={ConstantData.CallConmonetData}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
               {
                  return (
                     <View style={styles.mainContainer}>
                        <Image source={Images.USER}
                           style={styles.imageSize}
                           resizeMode="contain" />
                        <View style={{ flex: 1 }}>
                           <Text style={styles.textFontName}>{item.name}</Text>
                           <Text numberOfLines={1} ellipsizeMode={'tail'}>{item.massege}</Text>
                        </View>
                        <View style={styles.callContainer} >
                           <TouchableOpacity onPress={() => alert("Call")}>
                              <Ionicons name='ios-call' size={25} style={{ marginRight: 10 }} />
                           </TouchableOpacity>
                           <Text>3:5 Am</Text>
                        </View>
                     </View>
                  );
               }
            }}
         />
      )
   }
}

const styles = StyleSheet.create({
   mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#d7fae0',
      margin: 5,
      borderRadius: 15,
      elevation: 10
   },
   textFontName: {
      fontSize: 16,
      fontWeight: "800"
   },
   textMessage: {
      width: Display.setWidth(65),
   },
   imageSize: {
      width: 54,
      height: 54,
      margin: 5

   },
   callContainer: {
      padding: 5, 
      alignItems: 'center'
   },
   textMasseageContainer: {
      padding: 2,
      marginHorizontal: 5
   }

})