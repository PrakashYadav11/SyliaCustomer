import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../shared/NavigationRoutes';
import BootamTabNavigation from './BootamTabNavigation';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Welcom from '../screens/Welcom';
import ProductDetail from '../screens/ProductDetail/Index';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={NavigationRoutes.welcom} component={Welcom} />
        <Stack.Screen name={NavigationRoutes.login} component={Login} />
        <Stack.Screen name={NavigationRoutes.signup} component={Signup} />
        <Stack.Screen name={NavigationRoutes.ProductDetail} component={ProductDetail}/>
        <Stack.Screen
          name={NavigationRoutes.bottom}
          component={BootamTabNavigation}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
