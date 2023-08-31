import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import BgChanger from './components/BgChanger';
import RollDice from './components/RollDice';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Screen name="bgChanger" component={BgChanger}></Stack.Screen>
      <Stack.Screen name="rollDice" component={RollDice}></Stack.Screen>
    </NavigationContainer>
  );
}
