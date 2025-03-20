import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './Style';
import CustomBackBtn from '../../components/CustomBackBtn';
import {NavigationRoutes} from '../../shared/NavigationRoutes';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Images} from '../../assets/Images';
import {Strings} from '../../shared/strings';
import Icon from 'react-native-vector-icons/FontAwesome';
import {heightPixel} from '../../Utils/ResponsiveDimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductDetail = ({rating = 3, totalStars = 5}) => {
  const [isFavorite, setIsFavorite] = useState(false);
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
          <View style={{alignSelf: 'center', bottom: heightPixel(10)}}>
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
          <View style={style.circle2}></View>
          <View style={style.circle3}></View>
          <View style={style.circle4}></View>
          <View style={style.circle5}></View>
        </View>
        <View style={style.line}></View>
        <View style={style.SizeSelection}>
          <View>
            <Text style={style.color}>{Strings.Select_Size}</Text>
            <View style={style.boxs}>
              <View style={style.box}>
                <Text style={style.sizeTxt}>s</Text>
              </View>
              <View style={style.box}>
                <Text style={style.sizeTxt}>M</Text>
              </View>
              <View style={style.box}>
                <Text style={style.sizeTxt}>L</Text>
              </View>
              <View style={style.box}>
                <Text style={style.sizeTxt}>XL</Text>
              </View>
              <View style={style.box}>
                <Text style={style.sizeTxt}>XXL</Text>
              </View>
            </View>
          </View>
          <Text style={style.size}>Size chart</Text>
        </View>
        <View style={style.line}></View>
        <View style={style.productDetails}>
          <View style={style.headerContainer}>
            <Text style={style.headers}>{Strings.Product_Details}</Text>
            <Text style={style.more}>+ More</Text>
          </View>
          <View style={style.listContainer}>
            <Text style={style.listItem}>{Strings.List_Item1} </Text>
            <Text style={style.listItem}>{Strings.List_Item2}</Text>
            <Text style={style.listItem}>{Strings.List_Item3}</Text>
            <Text style={style.listItem}>{Strings.List_Item4}</Text>
            <Text style={style.listItem}>{Strings.List_Item5}</Text>
          </View>
        </View>
        <View style={style.line}></View>
        <View style={style.qulityBox}>
          <View style={style.IconBox}>
            <Image source={Images.smile} style={style.Icon} />
            <Text style={style.IconTxt}>{Strings.Happy_Customer}</Text>
          </View>
          <View style={style.IconBox}>
            <Image source={Images.verified} style={style.Icon} />
            <Text style={style.IconTxt}>{Strings.Genuine_Product}</Text>
          </View>
          <View style={style.IconBox}>
            <Image source={Images.hq} style={style.Icon} />
            <Text style={style.IconTxt}>{Strings.Quality_Checked}</Text>
          </View>
        </View>
        <View style={style.line}></View>
        <View style={style.container}>
          {/* Ratings Section */}
          <View style={style.ratingContainer}>
            <Text style={style.title}>Ratings</Text>
            <View style={style.starsRow}>
              <FontAwesome name="star" size={18} color="black" />
              <FontAwesome name="star" size={18} color="black" />
              <FontAwesome name="star" size={18} color="black" />
              <FontAwesome name="star" size={18} color="black" />
              <FontAwesome name="star-o" size={18} color="gray" />
            </View>
            <Text style={style.ratingText}>{Strings.Ratings}</Text>
          </View>
          <Text style={style.viewMore}>{Strings.View_More}</Text>
          {/* Divider */}
          <View style={style.divider} />

          {/* Customer Words Section */}
          <View style={style.customerWords}>
            <Text style={style.title}>{Strings.Customer_Words}</Text>
            <View style={style.wordRow}>
              <Text style={style.subText}>{Strings.size}</Text>
              <Text style={style.wordText}>{Strings.Perfect}</Text>
            </View>
            <View style={style.wordRow}>
              <Text style={style.subText}>{Strings.Product_Quality}</Text>
              <Text style={style.wordText}>{Strings.Average}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={style.contain}>
        {/* Left Buttons */}
        <View style={style.leftButtons}>
          <TouchableOpacity style={style.iconButton}>
            <Entypo name="share-alternative" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={style.iconButton}
            onPress={() => setIsFavorite(!isFavorite)}>
            <FontAwesome
              name={isFavorite ? 'heart' : 'heart-o'}
              size={20}
              color={isFavorite ? 'red' : 'black'}
            />
          </TouchableOpacity>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity
          style={style.addToCartButton}
          onPress={() => navigation.navigate(NavigationRoutes.DeliveryStep1)}>
          <Text style={style.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;
