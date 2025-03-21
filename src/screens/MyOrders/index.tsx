import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomHeaderText from '../../components/CustomHeaderText';
import CustomSearchBar from '../../components/CustomSearchBar';
import {Images} from '../../assets/Images';
import {Strings} from '../../shared/strings';
import {heightPixel, widthPixel} from '../../Utils/ResponsiveDimensions';
import CustomOrderCard from '../../components/CustomOrderCard';
import { NavigationRoutes } from '../../shared/NavigationRoutes';

const MyOrders = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeaderText headerText={'My Orders'} onPress={()=>navigation.navigate(NavigationRoutes.bottom)}/>
      <View style={styles.search}>
        <CustomSearchBar showNotificationIcon={false} customWidth={'64%'} />
        <TouchableOpacity style={styles.filter}>
          <Image source={Images.filter} />
          <Text style={styles.filterTxt}>{Strings.Filters}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <CustomOrderCard title={'Delivery On Feb 26'} description={'Badminton Shoes For Man'} orderId={'#02316'} onPress={()=>navigation.navigate(NavigationRoutes.trackandvieworder)}/>
        <CustomOrderCard title={'Delivery On Feb 26'} description={'Badminton Shoes For Man'} orderId={'#02316'} onPress={()=>navigation.navigate(NavigationRoutes.trackandvieworder)}/>
        <CustomOrderCard title={'Delivery On Feb 26'} description={'Badminton Shoes For Man'} orderId={'#02316'} onPress={()=>navigation.navigate(NavigationRoutes.trackandvieworder)}/>
        <CustomOrderCard title={'Delivery On Feb 26'} description={'Badminton Shoes For Man'} orderId={'#02316'} onPress={()=>navigation.navigate(NavigationRoutes.trackandvieworder)}/>
      </View>
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  filter: {
    justifyContent: 'center',
    backgroundColor: 'white',
    height: heightPixel(50),
    width: widthPixel(100),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth:0.6,
    top:2,
    marginLeft:10,
  },
  filterTxt: {
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: widthPixel(10),
  },
  search: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
});
