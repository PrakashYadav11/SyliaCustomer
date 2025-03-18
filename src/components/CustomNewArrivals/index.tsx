import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Arrivals from '../../dummyData/arrivalsData'
import styles from './style';

const CustomNewArrivals = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Arrivals</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Arrivals}
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

export default CustomNewArrivals;
