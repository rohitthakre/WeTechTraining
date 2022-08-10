import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { Colors, Images } from "../assets/constants";
import { Display } from '../utils'
const SplashScreen = ({ navigation }) => {
   console.log("Prpps", navigation);
   useEffect(() => {
      setTimeout(() => {
         navigation.navigate('Login');
      }, 1500);
   }, []);
   return (

      <View style={styles.container}>
         <StatusBar
            barStyle="light-content"
            backgroundColor={Colors.DEFAULT_WHITE}
            translucent
         />
         <Image source={Images.AIRFRAFT}
            resizeMode="contain"
            style={styles.image}
         />
         <Text style={{ fontSize: 32, fontWeight: "700" }}>
            Uddan AnyOne Can
         </Text>
      </View>);
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.DEFAULT_WHITE
   },
   image: {
      width: Display.setWidth(60),
      height: Display.setHeight(30),
   },
});
export default SplashScreen;