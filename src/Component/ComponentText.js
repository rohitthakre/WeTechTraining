import { View, Text, TextInput, StyleSheet, } from 'react-native'
import React from 'react'
import { Display } from '../utils';
import { Colors } from '../assets/constants';
import Feather from 'react-native-vector-icons/Feather';

export default function ComponentText({place,icon,label,keyBoardColor,keyBoardType}) {

  return (
    <View style={styles.ContaintContainer}>
      <Text style={styles.TextLabel}>{label}</Text>
      <View style={styles.IconTextInputContainer
      }>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, width: Display.setWidth(90), }} >
          <Feather name={icon} size={20} style={{ marginRight: 5 }} />
          <TextInput
            placeholder={place}
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            width={Display.setWidth(80)}
            keyboardType={keyBoardType}
            keyboardAppearance={keyBoardColor}
          />
        </View>
      </View>
    </View>
    )}
const styles = StyleSheet.create({
  ContaintContainer: {
    flex: 1
  },
  TextLabel: {
    fontSize: 12,
    fontWeight: '700'
  },
  IconTextInputContainer: {
    borderRadius: 7,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderColor: Colors.DEFAULT_LIGHT_GREY,
    marginBottom: 2
  },


});

