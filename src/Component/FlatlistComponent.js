import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Display } from '../utils';

const FlatlistComponent = ({Images,Name,Massege,Icon,Time}) => {
   return (
      <View style={styles.mainContainer}>
         <Image source={Images}
            style={styles.imageSize}
            resizeMode="contain" />
         <View style={{ flex: 1 }}>
            <Text style={styles.textFontName}>{Name}</Text>
            <Text numberOfLines={1} ellipsizeMode={'tail'}>{Massege}</Text>
         </View>
         <View style={styles.callContainer} >
            <TouchableOpacity onPress={() => alert("Call")}>
               <Ionicons name={Icon} size={25} style={{ marginRight: 10,elevation:10 }} />
            </TouchableOpacity>
            <Text>{Time}</Text>
         </View>
      </View>
   );
}

export default FlatlistComponent

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