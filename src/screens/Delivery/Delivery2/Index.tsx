import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {style} from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Strings} from '../../../shared/strings';
import {Images} from '../../../assets/Images';
import { NavigationRoutes } from '../../../shared/NavigationRoutes';

const DeliveryStep2 = ({navigation}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        <TouchableOpacity onPress={()=> navigation.navigate(NavigationRoutes.DeliveryStep1)}>
          <Ionicons name="arrow-back" size={20} color="black" />
        </TouchableOpacity>
        <View style={style.textContainer}>
          <Text style={style.stepText}>Step 2 of 3</Text>
          <Text style={style.title}>{Strings.Delivery_Details}</Text>
        </View>
      </View>
      <View style={style.card}>
        {/* Buttons */}
        <View style={style.buttonContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={style.button}>
              <Text style={style.buttonText}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
              <Text style={style.buttonText}>DEFAULT</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={style.changeText}>Add / Change</Text>
          </TouchableOpacity>
        </View>

        {/* Address Info */}
        <Text style={style.name}>{Strings.name}</Text>
        <Text style={style.address}>{Strings.location}</Text>
        <Text style={style.address}>{Strings.pinCode}</Text>
        <Text style={style.phone}>{Strings.phone}</Text>

        {/* Divider */}
        <View style={style.divider} />

        {/* Delivery Info */}
        <View style={style.deliveryContainer}>
          <Text style={style.codText}>{Strings.deliveryType}</Text>
          <Text style={style.estDelivery}>
            Est delivery <Text style={style.boldText}>08 Jan</Text>
          </Text>
        </View>
      </View>
      <View style={style.deliverycontainer}>
        {/* Title */}
        <Text style={style.header}>Expected Delivery</Text>
        <Text style={style.subHeader}>
          Estimated delivery dates for your order
        </Text>

        {/* Product Details */}
        <View style={style.productContainer}>
          <Image
            source={Images.cart_photo} // Replace with actual image URL
            style={style.productImage}
          />
          <View style={style.details}>
            <Text style={style.brand}>ADIDAS</Text>
            <Text style={style.productTitle}>{Strings.shoes}</Text>
            <View style={style.priceContainer}>
              <Text style={style.originalPrice}>$999</Text>
              <Text style={style.discountedPrice}>$399.00</Text>
            </View>
            <Text style={style.freeDelivery}>{Strings.Free_Delivery}</Text>
          </View>
        </View>
      </View>
      <View style={style.btncontainer}>
        <View style={style.priceContaine}>
          <Text style={style.price}>₹586.00</Text>
          <Text style={style.viewDetails}>{Strings.View_Details}</Text>
        </View>
        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate(NavigationRoutes.PaymentMethod)}>
          <Text style={style.btnText}>{Strings.payment}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryStep2;
