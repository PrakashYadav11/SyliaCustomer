import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {style} from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Images} from '../../../assets/Images';
import {Strings} from '../../../shared/strings';
import {NavigationRoutes} from '../../../shared/NavigationRoutes';

const DeliveryStep1 = ({navigation}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        {/* Left Side - Close Icon */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationRoutes.ProductDetail)}>
            <Ionicons name="close" size={36} color="black" />
          </TouchableOpacity>

          {/* Center - Step and Bag Info */}
          <View style={style.textContainer}>
            <Text style={style.stepText}>Step 1 of 3</Text>
            <Text style={style.bagText}>Bag (1 Product)</Text>
          </View>
        </View>

        {/* Right Side - Heart Icon */}
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={36} color="black" />
        </TouchableOpacity>
      </View>
      <View style={style.delivery}>
        <MaterialCommunityIcons name="truck-outline" size={20} color="gray" />
        <Text style={style.text}>{Strings.free_Deliver}</Text>
      </View>
      <View style={style.imageContainer}>
        {/* Product Image */}
        <Image
          source={Images.cart_photo} // Replace with your actual image path
          style={style.image}
        />

        {/* Product Details */}
        <View style={style.detailsContainer}>
          <Text style={style.brand}>ADIDAS</Text>
          <Text style={style.productName}>{Strings.shoes}</Text>

          {/* Price Section */}
          <View style={style.priceContainer}>
            <Text style={style.oldPrice}>$999</Text>
            <Text style={style.newPrice}>$399.00</Text>
          </View>

          {/* Free Delivery */}
          <Text style={style.freeDelivery}>{Strings.free_Deliver}</Text>

          {/* Additional Info */}
          <View style={style.infoContainer}>
            <MaterialCommunityIcons
              name="truck-outline"
              size={16}
              color="gray"
            />
            <Text style={style.infoText}>{Strings.return}</Text>
          </View>

          <View style={style.infoContainer}>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={16}
              color="gray"
            />
            <Text style={style.infoText}>Delivery by 8 Jan</Text>
          </View>
        </View>
      </View>
      <View style={style.removeContainer}>
        <TouchableOpacity style={style.button}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={16}
            color="black"
          />
          <Text style={style.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={style.cpuponContainer}>
        <View style={style.leftSection}>
          <Image source={Images.coupon} />
          <Text style={style.tex}>{Strings.Apply_Coupon}</Text>
        </View>
        <Text style={style.selectText}>Select</Text>
      </TouchableOpacity>
      <View style={style.detailcontainer}>
        <Text style={style.header}>{Strings.Order_Details}</Text>

        <View style={style.row}>
          <Text style={style.label}>{Strings.Bag_total}</Text>
          <Text style={style.value}>₹1,299.00</Text>
        </View>

        <View style={style.row}>
          <Text style={style.label}>{Strings.Bag_Savings}</Text>
          <Text style={[style.value, style.savings]}>-₹831.00</Text>
        </View>

        <View style={style.row}>
          <Text style={style.label}>
            {Strings.Convenience_Fee}
            <Text style={style.info}>{Strings.What_this}</Text>
          </Text>
        </View>

        <View style={style.subRow}>
          <Text style={style.subLabel}>{Strings.Delivery_Fee}</Text>
          <Text style={style.value}>₹99.00</Text>
        </View>

        <View style={style.subRow}>
          <Text style={style.subLabel}>{Strings.Platform_Fee}</Text>
          <Text style={style.value}>₹19.00</Text>
        </View>

        <View style={style.row}>
          <Text style={style.totalLabel}>{Strings.Total_Amount}</Text>
          <Text style={style.totalValue}>₹586.00</Text>
        </View>
      </View>
      <View style={style.returnContainer}>
        <Text style={style.head}>{Strings.refund}</Text>
        <Text style={style.description}>{Strings.refund_policy}</Text>
        <Text style={style.link}>{Strings.Read_policy}</Text>
      </View>
      <View style={style.btncontainer}>
        <View style={style.priceContaine}>
          <Text style={style.price}>₹586.00</Text>
          <Text style={style.viewDetails}>View Details</Text>
        </View>
        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate(NavigationRoutes.DeliveryStep2)}>
          <Text style={style.btnText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryStep1;
