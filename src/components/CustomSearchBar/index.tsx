import {
    Dimensions,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

interface inputTypes {
    showNotificationIcon?: boolean;
    onPress?: any;
    showSearchBar?: boolean;
    onnotPress?: any;
}

const { width, height } = Dimensions.get('window');

const CustomSearchBar = ({
    showNotificationIcon = true,
    onPress,
    showSearchBar = true,
    onnotPress
}: inputTypes) => {
    return (
        <View>
            <View style={[styles.row,{justifyContent:'center'}]}>
                {showSearchBar && (
                    <View style={[styles.serch, { width: width * 0.8 }]}>
                        <Feather name="search" size={20} style={styles.icon} />
                        <TextInput
                            style={styles.searchStl}
                            placeholder="Search naything here..."
                            placeholderTextColor="grey"
                            onPress={onPress}
                        />
                    </View>
                )}
                {showNotificationIcon && (
                    <TouchableOpacity style={styles.notification} onPress={onnotPress}>
                        <Ionicons name="notifications-outline" size={30} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CustomSearchBar;
