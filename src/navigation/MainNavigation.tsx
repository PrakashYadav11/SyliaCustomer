import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../shared/NavigationRoutes';
import BootamTabNavigation, { Category } from './BootamTabNavigation';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Welcom from '../screens/Welcom';

import ProductDetail from '../screens/ProductDetail/Index';

import Notification from '../screens/Notification';
import Settings from '../screens/Settings';
import Categories from '../screens/Categories';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={NavigationRoutes.welcom} component={Welcom} />
        <Stack.Screen name={NavigationRoutes.login} component={Login} />
        <Stack.Screen name={NavigationRoutes.signup} component={Signup} />
        <Stack.Screen name={NavigationRoutes.Search} component={Search} />

       
        <Stack.Screen
          name={NavigationRoutes.notification}
          component={Notification}
        />
        <Stack.Screen name={NavigationRoutes.settings} component={Settings} />

        <Stack.Screen
          name={NavigationRoutes.bottom}
          component={BootamTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
