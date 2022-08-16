import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View ,KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Images } from '../assets/constants';
import Feather from 'react-native-vector-icons/Feather';
import Display from '../utils/Display';
import Seprator from '../Component/Seprator';

const LoginScreeen = ({navigation}) => {
  return (
    <SafeAreaView>

    <KeyboardAvoidingView style={styles.conatiner} >
      <View style={styles.imageContainer}>
        <Image source={Images.AIRFRAFT}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.title}>WellCome</Text>
        <Text style={styles.content}>New Way for Login And Authontication </Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.imputSubContainer}>
          <Feather name='user' size={20} style={{ marginRight: 10 }} />
          <TextInput
            placeholder='UserName'
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
           secureTextEntry={true}
           width={Display.setWidth(70)}

          />
        </View>
      </View>
      <Seprator height={15} />

      <View style={styles.loginContaner}>
        <TouchableOpacity onPress={(()=>navigation.navigate("DashBoard"))}>
          <Text style={styles.fontStyle}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContaner}>
        <TouchableOpacity onPress={(()=>navigation.navigate('Registration'))}>
          <Text style={styles.fontStyle}>Registration</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreeen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderColor: Colors.DEFAULT_LIGHT_GREY,
    marginBottom:10
  },
  imputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Display.setWidth(80),
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 10,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  title: {
    fontSize: 20,
    lineHeight: 20 ,
    marginTop: 50,
    marginBottom: 5,
    marginTop: 50,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop: 20
  },
  image: {
    width: '50%',
    height: '50%'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Display.setHeight(20),
  },
  loginContaner: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
    margin: 20,
    padding: 10,
    borderRadius: 8
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: "700",
    color: 'white'
  }
})