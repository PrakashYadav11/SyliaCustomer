import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomSearchBar from '../../components/CustomSearchBar'
import images from '../../dummyData/carouselData';
import CustomMostPopularProducts from '../../components/CustomMostPopularProducts';
import CustomFeatured from '../../components/CustomFeatured';
import CustomNewArrivals from '../../components/CustomNewArrivals';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import CustomAdCarousa from '../../components/CustomAdCarousa';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomSearchBar onnotPress={()=>navigation.navigate(NavigationRoutes.notification)}/>
      <ScrollView>
      <CustomAdCarousa/>
      <CustomMostPopularProducts/>
      <CustomFeatured/>
      <CustomNewArrivals/>
      </ScrollView>
    </View>
  )
}

export default Home
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  coursel:{},
});
