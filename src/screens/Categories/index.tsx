import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {style} from './Style';
import Icon from 'react-native-vector-icons/AntDesign';
import {Strings} from '../../shared/strings';
import CustomCategoryName from '../../components/CustumCatagoryName';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import CustomBackBtn from '../../components/CustomBackBtn';
import CustomHeaderText from '../../components/CustomHeaderText';

const Categories = ({navigation}) => {
  return (
    <View style={style.container}>
      <CustomHeaderText headerText={'All Categories'}/>
      <CustomCategoryName onPress={()=>{}}/>
    </View>
  );
};

export default Categories;
