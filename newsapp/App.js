
 /*  File : router.js
  *  Description : initial screen for the app
  *  Integrations : @react-navigation/native, 
  *  Version : v1.1
  */

import 'react-native-gesture-handler';
import React, { useEffect, useReducer, useMemo, useRef, useState } from 'react'; 
import { Text, LogBox } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import icoMoonConfig from './App/Assets/icomoon/selection.json'; // custom icon list
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { home } from './App/Src/Containers/Home';

Icon = createIconSetFromIcoMoon(icoMoonConfig);
Text.defaultProps = { allowFontScaling: false };
console.reportErrorsAsExceptions = false;

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

function HomeStackScreen() {
  return(
    <Stack.Navigator headerShown='none'>
      <Stack.Screen name= 'home' 
        component= {home} 
        options= {{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS 
        }} />
    </Stack.Navigator>
  )
}

export default function App({ navigation }) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}