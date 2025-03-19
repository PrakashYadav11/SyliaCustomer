import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomHeaderText from '../../components/CustomHeaderText';
import {Images} from '../../assets/Images';
import styles from './style';

const TrackAndViewOrder = () => {
  const orderStatus = [
    {id: 1, status: 'Order Confirmed', completed: true},
    {id: 2, status: 'Order Shipped', completed: true},
    {id: 3, status: 'Out For Delivery', completed: false},
    {id: 4, status: 'Order Delivered', completed: false},
  ];

  return (
    <View style={styles.container}>
      <CustomHeaderText headerText={'Adidas Shoes For Men'} />

      <View style={styles.productContainer}>
        <Image source={Images.cart_photo} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>ADIDAS</Text>
          <Text style={styles.productDescription}>Badminton Shoes For Men</Text>
          <View style={styles.priceRow}>
            <Text style={styles.oldPrice}>$899 </Text>
            <Text style={styles.newPrice}>$399.00</Text>
          </View>
          <Text style={styles.freeDelivery}>Free Delivery</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.ratingTitleContainer}>
        <Image source={Images.product} style={styles.img} />
        <Text style={styles.ratingTitle}>Product Rating</Text>
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Terrible</Text>
        <View style={styles.stars}>
          {[...Array(4)].map((_, index) => (
            <FontAwesome key={index} name="star" size={20} color="black" />
          ))}
          <FontAwesome name="star-o" size={20} color="black" />
        </View>
      </View>

      <View style={styles.divider} />

      <FlatList
        data={orderStatus}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <View style={styles.orderStepContainer}>
            <View style={styles.lineContainer}>
              {index !== 0 && <View style={styles.solidLine} />}
              <Ionicons
                name={item.completed ? 'checkmark-circle' : 'ellipse-outline'}
                size={24}
                color={item.completed ? 'green' : 'gray'}
              />

              {index !== orderStatus.length - 1 && (
                <View style={styles.solidLine} />
              )}
            </View>
            <Text
              style={[
                styles.orderStatusText,
                item.completed && styles.completedText,
              ]}>
              {item.status}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default TrackAndViewOrder;
