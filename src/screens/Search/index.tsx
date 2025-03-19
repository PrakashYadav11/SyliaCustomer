import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {style} from './Style';
import CustomSearchBar from '../../components/CustomSearchBar';
import {Images} from '../../assets/Images';
import {Strings} from '../../shared/strings';
import CustomCartItem from '../../components/CustomCartItem';
import { NavigationRoutes } from '../../shared/NavigationRoutes';

const Search = ({navigation}) => {
  return (
    <View style={style.container}>
      <CustomSearchBar />
      <View style={style.totalProduct}>
        <View style={style.resultBox}>
          <View>
            <Text style={style.tx}>{Strings.SearchResults}</Text>
            <Text>{Strings.TotalProductAvailable}</Text>
          </View>
          <TouchableOpacity style={style.filter}>
            <Image source={Images.filter}/>
            <Text style={style.filterTxt}>{Strings.Filters}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <CustomCartItem showBtn={false} onPress={()=>navigation.navigate(NavigationRoutes.ProductDetail)}/>
        <CustomCartItem showBtn={false} />
        <CustomCartItem showBtn={false} />
      </ScrollView>
    </View>
  );
};

export default Search;
