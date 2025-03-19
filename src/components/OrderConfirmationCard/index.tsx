import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'


const OrderConfirmationCard = () => {
  return (
    <View style={styles.cardContainer}>
    <View style={styles.header}>
      <Text style={styles.headerText}>Order Confirmation</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.confirmationText}>📦 <Text style={{ fontWeight: 'bold' }}>Order Confirmed!</Text></Text>
      <Text style={styles.message}>
        Your order <Text style={{ fontWeight: "bold" }}>#2364</Text> has been successfully placed. 
        We’ll notify you once it ships!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>👉 View Order</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default OrderConfirmationCard

