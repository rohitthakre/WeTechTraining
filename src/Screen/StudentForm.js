import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { Display } from '../utils';
import { Colors,ConstantData } from '../assets/constants';
import { ComponentText, DropDown, CheckBoxComponent, Seprator, SwitchComponent, RadioButtonComponent } from '../Component/index'

export default class StudentForm extends Component {
   render() {
      return (
         <SafeAreaView >
            <ScrollView
               contentContainerStyle={styles.contentContainer}
               contentInset={{ top: 10 }}
               contentOffset={{ y: 10 }}>
               {/* <Text style={{ fontSize: 18, fontWeight: '900' }} >StudentForm</Text> */}
               {/* This is the section related to the student information related  persional information */}
               <Text style={styles.TextHeading}>Personal</Text>
               <ComponentText
                  place={'First Name eg. Name'}
                  icon={'user'}
                  label={'First Name'} />

               <ComponentText
                  place={'Middle Name eg. shrikisan'}
                  icon={'book'}
                  label={'Middle Name'}
               />
               <ComponentText
                  place={'Last Name eg. Thakre'}
                  icon={'user'}
                  label={'Last Name'}
                  keyBoardColor={'dark'}
               />
                  <RadioButtonComponent />
               {/* This is the section related to the DOB   */}
               <View style={{flexDirection:'row'}}>
               <DropDown data={ConstantData.Day} />
               <DropDown data={ConstantData.Month}/>
               <DropDown data={ConstantData.Year}/>
               </View>
               <View style={styles.ContaintContainer}>
                  <ComponentText
                     place={'Email eg. example@gmail.com'}
                     icon={'voicemail'}
                     label={'Email'}
                     keyBoardType={'email-address'}
                     keyBoardColor={'dark'}
                  />
                  <ComponentText
                     place={'Email eg. example@gmail.com'}
                     icon={'voicemail'}
                     label={'Conform Email'}
                     keyBoardType={'email-address'} />
                  <ComponentText
                     place={'Contact eg. 0000000000'}
                     icon={'phone'}
                     label={'Contact'}
                     keyBoardType={'decimal-pad'} />
                  <ComponentText
                     place={'Contact eg. 0000000000'}
                     icon={'phone'}
                     label={'Alternate Contact'}
                     keyBoardType={'decimal-pad'} />
                  <View>
                  </View>
               </View>
               <View style={{ margin: 20 }}>
                  {/* In that section student Addes section on it  */}
                  <Text>Address</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                     <Text>Student from India</Text>
                     <SwitchComponent />
                  </View>
                  <ComponentText
                     place={'Address  eg. Plot no 5o No '}
                     icon={'user'}
                     label={'Address'} />
               </View>
               <View style={{ margin: 20 }}>
                  <Text>City</Text>
                  <DropDown />
               </View>
               <View style={{ margin: 20 }}>
                  <Text>State</Text>
                  <DropDown />
               </View>
               <View style={{ margin: 20 }}>
                  <Text>Country</Text>
                  <DropDown />
               </View>
               <ComponentText
                  place={'Pin Code  eg. 440008'}
                  icon={'phone'}
                  label={'Pin code '}
                  keyBoardType={'decimal-pad'} />

                  {/* This is the section related to student information like education details  */}
               <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <CheckBoxComponent />
                     <Text>DBMS</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <CheckBoxComponent />
                     <Text>Java</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <CheckBoxComponent />
                     <Text>JavaScript</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <CheckBoxComponent />
                     <Text>Software Testing</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <CheckBoxComponent />
                     <Text>Embbaded System</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <CheckBoxComponent />
                     <Text>Gaming Android </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <CheckBoxComponent />
                     <Text>Artificial Inteligence</Text>
                  </View>
               </View>
               <View>
               </View>
               <Seprator height={50} />
            </ScrollView>
         </SafeAreaView>
      );
   }
}

const styles = StyleSheet.create({
   contentContainer: {
      paddingVertical: 20,
      marginLeft: 20,
      marginRight: 20
   },
   ContaintContainer: {
      flex: 1
   },
   TextHeading: {
      fontSize: 15,
      fontWeight: "700"
   },
   TextLabel: {
      fontSize: 12,
      fontWeight: '700'
   },
   IconTextInputContainer: {
      borderRadius: 8,
      borderWidth: 0.5,
      justifyContent: 'center',
      borderColor: Colors.DEFAULT_LIGHT_GREY,
      marginBottom: 2
   }

})