import React from 'react';
import{View} from 'react-native';

const Seprator=({height,width,...extraProps})=>(
   <View style={{height,width,...extraProps}}/>
);

Seprator.defaultProps ={
   height:0,
   width:0,
};

export default Seprator;
