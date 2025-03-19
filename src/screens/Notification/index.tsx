import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBackBtn from '../../components/CustomBackBtn'
import { NavigationRoutes } from '../../shared/NavigationRoutes'
import OrderConfirmationCard from '../../components/OrderConfirmationCard'
import styles from './style'
import CustomHeaderText from '../../components/CustomHeaderText'


const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeaderText headerText={'Notifications 🔔'}/>
      <ScrollView>
      <View style={styles.card}>
        <OrderConfirmationCard/>
        <OrderConfirmationCard/>
        <OrderConfirmationCard/>
      </View>
      </ScrollView>
    </View>
  )
}

export default Notification

