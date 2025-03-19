import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomHeaderText from '../../components/CustomHeaderText';
import CustomCartItem from '../../components/CustomCartItem';
import Icon  from 'react-native-vector-icons/AntDesign';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import styles from './style';


const Wishlist = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <CustomHeaderText headerText={'Your Wishlist'} />
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationRoutes.notification)}>
        <Icon name='shoppingcart' size={26} style={styles.cart}/>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <CustomCartItem showBtn={false} onPress={undefined} />
        <CustomCartItem showBtn={false} onPress={undefined} />
      </View>
    </View>
  );
};

export default Wishlist;

