import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationRoutes } from '../../shared/NavigationRoutes'
import CustomBackBtn from '../CustomBackBtn'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

interface inputTypes {
    headerText:string,
    onPress: any
  }

const CustomHeaderText = ({headerText,onPress}:inputTypes) => {
    const navigation = useNavigation();
  return (
    <View style={styles.head}>
     <CustomBackBtn onPress={onPress}/>
    <Text style={styles.headText}>{headerText}</Text>
     </View>
  )
}

export default CustomHeaderText

