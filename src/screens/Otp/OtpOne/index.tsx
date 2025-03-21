import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {NavigationRoutes} from '../../../shared/NavigationRoutes';
import {OtpInput} from 'react-native-otp-entry';
import Icon from 'react-native-vector-icons/Feather';

const OtpOne = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const handleConfirm = () => {
    console.log('Entered OTP:', otp);
    // Handle OTP verification logic here
  };

  return (
    <>
    <View style={styles.container}>

    <TouchableOpacity onPress={()=>navigation.navigate(NavigationRoutes.login)} style={{padding: 10}}>
        <Icon name="arrow-left" size={35} color="#ccc" />
      </TouchableOpacity>
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Verification Code</Text>
        <Text style={styles.subtitle}>
          We have sent the verification{'\n'}
          code to your email address
        </Text>
      </View>
      <View style={styles.otpWrapper}>
        {/* <OtpInputs
          handleChange={handleOtpChange}
          numberOfInputs={4}
          autofillFromClipboard={true}
          style={styles.otpContainer}
          inputStyles={styles.otpBox}
          inputContainerStyles={styles.otpBoxContainer}
        /> */}
        <OtpInput
          numberOfDigits={4}
          onChangeText={setOtp}
          style={styles.otpContainer}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(NavigationRoutes.OtpTow)}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.resendText}>
          Didn't Receive OTP?{' '}
          <Text style={styles.resendButton}>Resend OTP</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
    </>
  );
};

export default OtpOne;
