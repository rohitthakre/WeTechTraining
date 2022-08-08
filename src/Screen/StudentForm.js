import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import SelectBox from 'react-native-multi-selectbox'
import Feather from 'react-native-vector-icons/Feather';


export default class StudentForm extends Component {
   render() {
      return (
         <View>
            <Text>StudentForm</Text>
            <Text>Personal</Text>
            <View>
               <Text>First Name </Text>
               <TextInput />
               <Text>Middel Name</Text>
               <TextInput />
               <Text>Last Name</Text>
               <TextInput />
            </View>
            <View>
               <Text>Date Of Birth</Text>
               <TextInput />
            </View>
            <View>
               <Text>Email </Text>
               <TextInput />
               <Text>Email </Text>
               <TextInput />
               <Text>Contact</Text>
               <TextInput />
               <Text>Alternet Contact / phone</Text>
               <TextInput />
            </View>
            <View>
               <Text>Address</Text>
               <TextInput />
               <Text>City</Text>
               <View>
                  <SelectBox
                     label="Select single"
                     options={K_OPTIONS}
                     //   value={}
                     //   onChange={onChange()}
                     hideInputFilter={false}
                  />
               </View>
               <View>
                  <Text>State</Text>
                  <SelectBox
                     label="Select single"
                     options={K_OPTIONS}
                     //   value={}
                     //   onChange={onChange()}
                     hideInputFilter={false}
                  />
               </View>
            </View>
            <View>
               <Text>Education</Text>
               <View>
                  <Text>Higher Education</Text>
                  <SelectBox
                     label="Select single"
                     options={K_OPTIONS}
                     //   value={}
                     //   onChange={onChange()}
                     hideInputFilter={false}
                  />
               </View>
               <View>
                  <Text>Language Knows</Text>
                  <SelectBox
                     label="Select single"
                     options={K_OPTIONS}
                     //   value={}
                     //   onChange={onChange()}
                     hideInputFilter={false}
                  />
               </View>
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({})