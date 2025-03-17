import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './Style';
import { Strings } from '../../shared/strings';
import { NavigationRoutes } from '../../shared/NavigationRoutes';

const Welcom = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.view}></View>
      <View style={style.view2}></View>
      <View style={style.view3}></View>
      <View style={style.screenStyle}>
        <View style={style.logoStyle}>
          <Text style={style.logoTxt}>{Strings.App_Logo}</Text>
        </View>
        <TouchableOpacity style={style.btnStyle} onPress={()=>{}}>
            <Text style={style.btnTxt}>{Strings.Lets_Get_Started}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcom;
