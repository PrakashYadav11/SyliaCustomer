import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';
import {NavigationRoutes} from '../../shared/NavigationRoutes';

const {width, height} = Dimensions.get('window');

const PaymentSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.iconContainer}>
        <Icon name="checkmark" size={width * 0.15} color="white" />
      </View>

      {/* Success Message */}
      <Text style={styles.successText}>Payment Successfully</Text>

      {/* Button Container at the Bottom */}
      <View style={styles.buttonContainer}>
        {/* Download Invoice Button */}
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.buttonText}>Download Invoice</Text>
        </TouchableOpacity>

        {/* Back to Home Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate(NavigationRoutes.Search)}>
          <Text style={styles.buttonText}>Back To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentSuccess;
