import { StyleSheet, FlatList, SafeAreaView, } from 'react-native'
import React, { Component } from 'react'
import { ConstantData, Images } from '../../assets/constants'
import { FlatlistComponent, Seprator } from '../../Component'
import { SafeAreaView } from 'react-native-safe-area-context';

const Data = ConstantData.CallConmonetData;

export default class CallScreen extends Component {
   render() {
      return (
         <SafeAreaView>
            <FlatList
               data={Data}
               keyExtractor={(item) => item.key}
               renderItem={({ item }) => {
                  return (
                     <FlatlistComponent
                        Images={Images.USER}
                        Name={item.name}
                        Massege={item.massege}
                        Icon={"call"}
                        Time={"3.5 Pm"}
                     />
                  );
               }}
            />
         </SafeAreaView>
      )
   }
}

const styles = StyleSheet.create({

})