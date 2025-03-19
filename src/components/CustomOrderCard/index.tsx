import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../assets/Images';
import styles from './style';

interface OrderCardProps {
  title: string; 
  description: string; 
  orderId: string; 
  onPress?: any; 
}

const CustomOrderCard: React.FC<OrderCardProps> = ({ title, description, orderId, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
     
      <Image source={Images.cart_photo} style={styles.image} />
      
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.orderId}>Order ID: {orderId}</Text>
      </View>

      
      <TouchableOpacity style={styles.arrowButton} onPress={onPress}>
        <Ionicons name="arrow-forward" size={22} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};


export default CustomOrderCard;
