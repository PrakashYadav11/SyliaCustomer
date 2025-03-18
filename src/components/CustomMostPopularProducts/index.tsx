import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import mostPopular from '../../dummyData/mostPopularData';
import styles from './style';

const CustomMostPopularProducts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Most Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mostPopular}
        horizontal
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>
                Starts from <Text style={styles.pricetag}>{item.price}</Text>
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CustomMostPopularProducts;
