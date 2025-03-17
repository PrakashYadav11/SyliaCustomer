import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomeInput from '../../../components/CustomInput'

const Signup = () => {
  return (
    <View>
      <Text>New Here?</Text>
      <Text>Create Your Account</Text>

      <CustomeInput label={''} placeholder={''}/>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})