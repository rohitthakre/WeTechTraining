import { Button, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../assets/constants';
import { Display } from '../utils';

export default function RegistrationScreen({navigation}) {
  return (
    <View style={styles.conatiner}>
      <View style={{justifyContent:'flex-start',alignItems:'center'}}>
        <Text style={{fontSize:30,fontWeight:"700",color:Colors.DEFAULT_GREEN}}>Uddan</Text>
      </View>
      <View style={styles.Textconatiner}>
        <Text style={styles.textcontent}>Uddan n Wings User Registration for Fly new way</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.imputSubContainer}>
          <Feather name='user' size={20} style={{ marginRight: 10 }} />
          <TextInput
            placeholder='User Name'
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            width={Display.setWidth(70)}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.imputSubContainer}>
          <Feather name='mail' size={20} style={{ marginRight: 10 }} />
          <TextInput
            placeholder='Email '
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            width={Display.setWidth(70)}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.imputSubContainer}>
          <Feather name='lock' size={20} style={{ marginRight: 10 }} />
          <TextInput
            placeholder='Password'
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            width={Display.setWidth(70)}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.loginContaner} onPress={(()=>navigation.navigate('Login'))} >
        <Text style={styles.fontStyle}>Registration</Text>
      </TouchableOpacity>
      <View>
        <Text>OR</Text>
      </View>
      <TouchableOpacity style={styles.loginContaner}>
        <Text style={styles.fontStyle}>Login With Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginContaner}>
        <Text style={styles.fontStyle}>Login With FaceBook</Text>
      </TouchableOpacity>
      <View style={{justifyContent:'space-around'}}>
        <Text>Need Help Other Thing?<TouchableOpacity><Text>Help</Text></TouchableOpacity></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderColor: Colors.DEFAULT_LIGHT_GREY,
    marginBottom: 10
  },
  imputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Display.setWidth(80),
  },
  loginContaner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
    margin: 20,
    padding: 10,
    borderRadius: 8,
    width:Display.setWidth(80),
  },
  Textconatiner:{
    justifyContent:'center',
    alignContent:'center',
    padding:10,
    width:Display.setWidth(90)
  },
  textcontent:{
    fontSize:25,
    fontWeight:"700"
  },
  fontStyle:{
    fontSize:15,
    color:Colors.DEFAULT_WHITE,
    fontWeight:"700"

  }

});