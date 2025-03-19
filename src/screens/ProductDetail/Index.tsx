import {Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './Style';
import CustomBackBtn from '../../components/CustomBackBtn';
import {NavigationRoutes} from '../../shared/NavigationRoutes';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Images} from '../../assets/Images';
import {Strings} from '../../shared/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPixel } from '../../Utils/ResponsiveDimensions';

const ProductDetail = ({rating = 3, totalStars = 5}) => {
  const navigation = useNavigation();

  return (
    <View style={style.containe}>
      <View style={style.header}>
        <CustomBackBtn
          onPress={() => navigation.navigate(NavigationRoutes.Search)}
        />
        <View style={style.rightHeader}>
          <Entypo
            name="heart-outlined"
            size={30}
            color="black"
            style={style.iconStyle}
          />
          <AntDesign name="shoppingcart" size={30} color="black" />
        </View>
      </View>
      <ScrollView>
        <Image source={Images.cart_photo} style={style.imgStyle} />
        <View style={style.productDetail}>
          <View style={style.productDetailBox}>
            <Text style={style.productName}>{Strings.EYEBOGLER}</Text>
            <View style={style.star}>
              {[...Array(totalStars)].map((_, index) => (
                <Icon
                  key={index}
                  name={index < rating ? 'star' : 'star-o'}
                  size={24}
                  color="black"
                  style={{marginHorizontal: 2}}
                />
              ))}
            </View>
            <View style={style.price}>
              <Text style={style.txt}>₹ 468 MRP</Text>
              <Text style={style.txt2}>₹ 1,299</Text>
              <Text style={style.offer}> 64% off</Text>
            </View>
            <Text style={style.tax}>Price inclusives of all taxes.</Text>
          </View>
          <View>
            <Text style={style.txt3}>6 Colors</Text>
          </View>
        </View>
        <View style={style.offers}>
          <View style={{alignSelf: 'center'}}>
            <View style={style.coupon}>
              <Text style={style.cpnTxt}>{Strings.Coupon}</Text>
              <Text style={style.cpnTxt}>{Strings.offer_price}</Text>
              <Text style={style.cpnTxt}>{Strings.offer_detail}</Text>
              <Text style={style.cpnTx}>T&C</Text>
            </View>
            <Text style={style.offerNo}>{Strings.Offers}</Text>
          </View>
          <View style={{alignSelf: 'center',bottom:heightPixel(10)}}>
            <View style={style.BankOffer}>
              <Text style={style.cpnTxt}>{Strings.BankOffer}</Text>
              <Text style={style.cpnTxt}>{Strings.BankOfferDetail}</Text>
              <Text style={style.cpnTxt}>{Strings.offer_detail}</Text>
              <Text style={style.cpnTx}>T&C</Text>
              <Text style={style.bankOffer}>{Strings.Bank_Offer}</Text>
            </View>
          </View>
        </View>
        <View style={style.line}></View>
        <View style={style.colorSection}>
          <Text style={style.color}>{Strings.Color}</Text>
          <Text>Navy Blue 5 percent</Text>
        </View>
        <View style={style.colors}>
            <View style={style.circle}></View>
        </View>
        <View style={style.line}></View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
