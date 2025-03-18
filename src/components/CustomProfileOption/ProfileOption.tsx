import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { style } from './Style';

interface inputTypes {
  tect: string,
  icon:any,
  onPress:any
}

const ProfileOption = ({tect,icon,onPress}: inputTypes) => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <Image source={icon}/>
        <Text style={style.text}>{tect}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileOption;
