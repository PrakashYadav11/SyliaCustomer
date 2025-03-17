import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../shared/NavigationRoutes';
import BootamTabNavigation from './BootamTabNavigation';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}>
        
        <Stack.Screen
          name={NavigationRoutes.bottom}
          component={BootamTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
