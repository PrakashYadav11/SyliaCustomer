import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Dimensions} from 'react-native';

import {NavigationRoutes} from '../shared/NavigationRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Cart from '../screens/Cart';
import MyProfile from '../screens/MyProfile';
import {Images} from '../assets/Images';
import Search from '../screens/Search';
import {useFocusEffect} from '@react-navigation/native';

import ProductDetail from '../screens/ProductDetail/Index';

import Wishlist from '../screens/Wishlist';
import MyOrders from '../screens/MyOrders';
import DeliveryStep1 from '../screens/Delivery/Delivery1/Index';
import DeliveryStep2 from '../screens/Delivery/Delivery2/Index';
import PaymentMethod from '../screens/PaymentMethod';
import PaymentSuccess from '../screens/PaymentSuccess';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window');
const iconSize = width * 0.07;

export const Category = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      navigation.reset({
        index: 0,
        routes: [{name: NavigationRoutes.categories}],
      });
    }, [navigation]),
  );
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Search">
      <Stack.Screen name={NavigationRoutes.categories} component={Categories} />

      <Stack.Screen name={NavigationRoutes.Search} component={Search} />
      <Stack.Screen
        name={NavigationRoutes.ProductDetail}
        component={ProductDetail}
      />
      <Stack.Screen name={NavigationRoutes.DeliveryStep1} component={DeliveryStep1}/>
      <Stack.Screen name={NavigationRoutes.DeliveryStep2} component={DeliveryStep2}/>
      <Stack.Screen name={NavigationRoutes.PaymentMethod} component={PaymentMethod}/>
      <Stack.Screen name={NavigationRoutes.PaymentSuccess} component={PaymentSuccess}/>
    </Stack.Navigator>
  );
};

export const HomeStake = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      navigation.reset({
        index: 0,
        routes: [{name: NavigationRoutes.home}],
      });
    }, [navigation]),
  );
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationRoutes.home}>
      <Stack.Screen name={NavigationRoutes.home} component={Home} />
      <Stack.Screen name={NavigationRoutes.Search} component={Search} />

      <Stack.Screen
        name={NavigationRoutes.ProductDetail}
        component={ProductDetail}
      />
      <Stack.Screen name={NavigationRoutes.DeliveryStep1} component={DeliveryStep1}/>
      <Stack.Screen name={NavigationRoutes.DeliveryStep2} component={DeliveryStep2}/>
      <Stack.Screen name={NavigationRoutes.PaymentMethod} component={PaymentMethod}/>
      <Stack.Screen name={NavigationRoutes.PaymentSuccess} component={PaymentSuccess}/>
    </Stack.Navigator>
  );
};

export const profile = ({navigation}) => {
  useFocusEffect(
    useCallback(() => {
      navigation.reset({
        index: 0,
        routes: [{name: NavigationRoutes.my_profile}],
      });
    }, [navigation]),
  );
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NavigationRoutes.my_profile} component={MyProfile} />
      <Stack.Screen name={NavigationRoutes.wishlist} component={Wishlist} />
      <Stack.Screen name={NavigationRoutes.myorders} component={MyOrders} />
    </Stack.Navigator>
  );
};

const BootamTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}>
      <Tab.Screen
        name={NavigationRoutes.HomeStake}
        component={HomeStake}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.home}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault(); // Prevent default behavior
            navigation.navigate(NavigationRoutes.HomeStake, {
              screen: NavigationRoutes.home, // Ensure it goes to Categories
            });
          },
        })}
      />
      <Tab.Screen
        name={NavigationRoutes.Category}
        component={Category}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={Images.categories}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault(); // Prevent default behavior
            navigation.navigate(NavigationRoutes.Category, {
              screen: NavigationRoutes.categories, // Ensure it goes to Categories
            });
          },
        })}
      />

      <Tab.Screen
        name={NavigationRoutes.cart}
        component={Cart}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({color}) => (
            <Image
              source={Images.cart}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.profile}
        component={profile}
        options={{
          // tabBarStyle:{display:"none"},
          tabBarIcon: ({color}) => (
            <Image
              source={Images.myprofile}
              style={{
                width: iconSize,
                height: iconSize,
              }}
            />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault(); // Prevent default behavior
            navigation.navigate(NavigationRoutes.profile, {
              screen: NavigationRoutes.my_profile, // Ensure it goes to Categories
            });
          },
        })}
      />
      {/* <Tab.Screen
        name={NavigationRoutes.Search}
        component={Search}
        options={{
          tabBarButton: () => null, // Hides tab button but keeps tab bar
          tabBarStyle: {display: 'flex'}, // Ensure tab bar stays visible
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BootamTabNavigation;
