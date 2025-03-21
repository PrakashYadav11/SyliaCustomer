import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; 
import {Images} from '../../assets/Images';
import styles from './style';
import { NavigationRoutes } from '../../shared/NavigationRoutes';

const PaymentMethod = ({navigation}) => {
  return (
    
      <View style={styles.container}>
        {/* Header with Back Button and Title */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate(NavigationRoutes.DeliveryStep2)}>
            <View>
              <Feather name="arrow-left" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>Payment Method</Text>
        </View>
        <ScrollView>
        {/* Payment Options */}
        {[
          {name: 'Paypal', image: Images.paypal},
          {name: 'Bank Transfer', image: Images.bank},
          {name: 'Apple Pay', image: Images.apple},
          {name: 'Google Pay', image: Images.google},
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.paymentOption}>
            <Image source={item.image} style={styles.icon} />
            <Text style={styles.paymentText}>{item.name}</Text>
            <Text style={styles.linkText}>Link</Text>
          </TouchableOpacity>
        ))}

        {/* Credit/Debit Card Section */}
        <Text style={styles.cardTitle}>Credit/ Debit/ ATM card</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Card holder name"
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Card number"
            placeholderTextColor="gray"
          />

          {/* Expiry Date & CVV */}
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="Expired Date"
              placeholderTextColor="gray"
            />
            <TextInput
              style={[styles.input, styles.smallInput]}
              placeholder="CVV"
              placeholderTextColor="gray"
            />
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={()=> navigation.navigate(NavigationRoutes.PaymentSuccess)}> 
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    
  );
};



export default PaymentMethod;
