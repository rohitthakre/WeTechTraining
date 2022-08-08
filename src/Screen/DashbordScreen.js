import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Seprator from '../Component/Seprator';
import { Display } from '../utils'
import { Colors, Images } from '../assets/constants';

const dataItem = [
   {
      "name": 'Product',
      "data": require("../assets/images/productDis.png")
   },
   {
      "name": 'Product',
      "data": require("../assets/images/ProductList.png")
   },
   {
      "name": 'Users',
      "data": require("../assets/images/users.png")
   },
   {
      "name": 'Add ',
      "data": require("../assets/images/AddToCard.png")
   },
   {
      "name": 'Daily',
      "data": require("../assets/images/Daily.png")
   },
   {
      "name": 'Need',
      "data": require("../assets/images/Need.png")
   },
   {
      "name": 'Product',
      "data": require("../assets/images/product.png")
   },
   {
      "name": 'Store',
      "data": require("../assets/images/Store.png")
   },
   {
      "name": 'Add',
      "data": require("../assets/images/AddToCard.png")
   },
   {
      "name": 'Intro',
      "data": require("../assets/images/AddToCard.png")
   },
   {
      "name": 'Add to Card',
      "data": require("../assets/images/AddToCard.png")
   },
   {
      "name": 'Stat',
      "data": require("../assets/images/statistik.png")
   },
   {
      "name": 'Logout',
      "data": require("../assets/images/Logout.png")
   },
   {
      "name": 'Notification',
      "data": require("../assets/images/notification.png")
   },
   {
      "name": 'Product',
      "data": require("../assets/images/productDis.png")
   },
   {
      "name": 'Product',
      "data": require("../assets/images/ProductList.png")
   },
   {
      "name": 'Users',
      "data": require("../assets/images/users.png")
   },
   {
      "name": 'User',
      "data": require("../assets/images/User.png")
   },



];

const DashbordScreen = ({navigation}) => {
   console.log("Log navigation props",navigation)
   return (
      <FlatList
         data={dataItem}
         numColumns={3}
         renderItem={({ item }) =>
            <View style={styles.container}  >
               <TouchableOpacity onPress={() =>navigation.navigate("Details")} >
                  <Image source={(item.data)} resizeMode="contain" style={{ width: Display.setWidth(15), height: Display.setWidth(15) }} />
                  <View style={styles.textContainer}>
                     <Text style={styles.textdecore}>{item.name}</Text>
                  </View>
               </TouchableOpacity>
            </View>}
      />
   )
}


export default DashbordScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.DEFAULT_LIGHT_GREY,
      margin: 8,
      borderRadius: 5,
      width: Display.setWidth(35),
      height: Display.setWidth(35),
   },
   textdecore: {
      fontSize: 15,
      fontWeight: '500',
      paddingVertical: 10
   },
   textContainer:{
      justifyContent:'center',
      alignItems:'center'
   }
})