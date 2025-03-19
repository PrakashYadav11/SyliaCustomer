import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Category_Name} from '../../dummyData/categoryName';
import { styles } from './Styles';


interface inputTypes {
  onPress:any
}

const CustomCategoryName = ({onPress}: inputTypes) => {
  return (
    <View>
      <FlatList
        data={Category_Name}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.txt}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CustomCategoryName;
