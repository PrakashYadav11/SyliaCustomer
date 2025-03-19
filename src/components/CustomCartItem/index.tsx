import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {cartData} from '../../dummyData/cartData';
import {style} from './Style';
import {Images} from '../../assets/Images';

const CustomCartItem = () => {
  const [buttonTexts, setButtonTexts] = useState(
    cartData.reduce((acc, item) => {
      acc[item.id] = item.txt1; // Initialize with txt1
      return acc;
    }, {}),
  );

  const handleToggleText = (id, txt1, txt2) => {
    setButtonTexts(prevState => ({
      ...prevState,
      [id]: prevState[id] === txt1 ? txt2 : txt1,
    }));
  };

  return (
    <View>
      <FlatList
        data={cartData}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <View style={style.container}>
            <Image source={item.image} style={style.imgStyle} />
            <TouchableOpacity
              style={style.btnStyle}
              onPress={() => handleToggleText(item.id, item.txt1, item.txt2)}>
              <Text style={style.txtStyle}>
                {buttonTexts[item.id]} {/* Dynamically changing text */}
              </Text>
              <Image source={Images.dustbin} style={style.iconStyle} />
            </TouchableOpacity>
            <Text style={style.nameStyle}>{item.name}</Text>
            <Text style={style.descriptionStyle}>{item.description}</Text>
            <View style={style.priceStl}>
              <Text style={style.prvAmount}>{item.prvAmount}</Text>
              <Text style={style.amountStyle}>{item.amount}</Text>
            </View>
            <Text style={style.typeStyle}>{item.delivery_type}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CustomCartItem;
