import {
  Text,
  View,
} from 'react-native';
import React from 'react';
import {style} from './Style';
import {Strings} from '../../shared/strings';
import CustomCategoryName from '../../components/CustumCatagoryName';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import CustomBtn from '../../components/CustomBackBtn';

const Categories = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <CustomBtn onPress={()=>navigation.navigate(NavigationRoutes.home)}/>
        <Text style={style.headerTxt}>{Strings.All_Categories}</Text>
      </View>
      <CustomCategoryName onPress={()=>navigation.navigate(NavigationRoutes.Search)}/>
    </View>
  );
};

export default Categories;
