import { Image, StyleSheet, View, Dimensions, FlatList } from 'react-native';
import React, { useRef } from 'react';
import styles from './style';
import { Images } from '../../assets/Images';

const images = [Images.imgone, Images.imgtow, Images.imgthree, Images.imgfour,Images.imgfive];

const CustomAdCarousa = () => {
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.img} />
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default CustomAdCarousa;

