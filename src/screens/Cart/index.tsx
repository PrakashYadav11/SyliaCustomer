import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {style} from './Style';
import {NavigationRoutes} from '../../shared/NavigationRoutes';
import Icon from 'react-native-vector-icons/AntDesign';
import {Strings} from '../../shared/strings';
import CustomCartItem from '../../components/CustomCartItem';

const Cart = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationRoutes.HomeStake)}>
          <Icon name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={style.headerTxt}>{Strings.Your_Cart}</Text>
      </View>
      <CustomCartItem />
      <View style={style.line}></View>
      <View style={style.priceDetailStyle}>
        <Text style={style.priceDetailTxt}>{Strings.Price_Details}</Text>
        <View style={style.rawStyle}>
          <Text style={style.price}>{Strings.Price}</Text>
          <Text style={style.priceStyle}>₹5998.00</Text>
        </View>
        <View style={style.rawStyle}>
          <Text style={style.Discount}>{Strings.Discount}</Text>
          <Text style={style.DiscountPrice}>- ₹4378.00</Text>
        </View>
        <View style={style.rawStyle}>
          <Text style={style.Delivery}>{Strings.Delivery_Charges}</Text>
          <Text style={style.DeliveryPrice}>{Strings.Free_Delivery}</Text>
        </View>
        <View style={style.dashedLine}></View>
        <View style={style.rawStyle}>
          <Text style={style.totalPrice}>{Strings.Total_Amount}</Text>
          <Text style={style.Totalamount}>₹1620.00</Text>
        </View>
        <View style={style.bottomStyle}>
          <Text style={style.lastPrice}>₹205.00</Text>
          <TouchableOpacity style={style.placeOrder} onPress={()=>navigation.navigate(NavigationRoutes.DeliveryStep1)}>
            <Text style={style.placeOrderStl}>{Strings.Place_Order}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
