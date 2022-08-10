import React, { useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [{
   id: '1', // acts as primary key, should be unique and non-empty string
   label: 'Male',
   value: 'option1'
}, {
   id: '2',
   label: 'Female',
   value: 'option2'
}]

export default function RadioButtonComponent() {

   const [radioButtons, setRadioButtons] = useState(radioButtonsData)

   function onPressRadioButton(radioButtonsArray) {
      setRadioButtons(radioButtonsArray);
   }

   return (
      <RadioGroup
         layout='row'
         radioButtons={radioButtons}
         onPress={onPressRadioButton}
      />
   );

}