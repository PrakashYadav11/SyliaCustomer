import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import CustomeInput from '../../../components/CustomInput';
import { Strings } from '../../../shared/strings';
import CustomButton from '../../../components/CustomButton';
import styles from './style';
import { NavigationRoutes } from '../../../shared/NavigationRoutes';


const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headText}>
        <Text style={styles.header} numberOfLines={1} adjustsFontSizeToFit>New Here?</Text>
        <Text style={styles.subHeader} numberOfLines={2} adjustsFontSizeToFit>Create Your Account 👋</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <CustomeInput label={Strings.firstname} placeholder={Strings.enterfirst} />
        <CustomeInput label={Strings.lastname} placeholder={Strings.enterlast} />
        <CustomeInput label={Strings.mobile} placeholder={Strings.enternumber} />
        <CustomeInput label={Strings.email} placeholder={Strings.enterEmail} />
        <CustomeInput label={Strings.enterPassword} placeholder={Strings.enterPassword} secureTextEntry />
        <CustomeInput label={Strings.confirmpass} placeholder={Strings.enterconfirm} secureTextEntry />
      </View>

      {/* Sign Up Button */}
      <View style={styles.signupButtonContainer}>
        <CustomButton label="Sign Up" onPress={() => navigation.navigate(NavigationRoutes.bottom)}/>
      </View>

      {/* Login Redirect */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText} numberOfLines={1} adjustsFontSizeToFit>Already Have An Account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationRoutes.login)}>
          <Text style={styles.loginLink} numberOfLines={1} adjustsFontSizeToFit>Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;


