import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import Icon from 'react-native-vector-icons/AntDesign';

interface inputTypes {
    onPress:any
  }

const CustomBackBtn = ({onPress}:inputTypes) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}>
        <Icon name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomBackBtn;
