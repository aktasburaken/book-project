import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Icon from 'react-native-vector-icons/FontAwesome';

import HomePage from './components/HomePage_Component/HomePage'
import Books from './components/HomePage_Component/Books'
import Profile from './components/HomePage_Component/Profile'
import Review from './components/HomePage_Component/Review';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: '#B8255F',
      }}>
        <Tab.Screen name="Home" component={HomePage} options={{
          tabBarIcon: () => {
            return (
              <Icon name="home" size={25} color="#000" />
            )
          },
        }} />
        <Tab.Screen name="Books" component={Books} options={{
          tabBarIcon: () => {
            return (
              <Icon name="book" size={25} color="#000" />
            )
          },
        }} />
        <Tab.Screen name="Reviews" component={Review} options={{
          tabBarIcon: () => {
            return (
              <Icon name="star" size={25} color="#000" />
            )
          },
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: () => {
            return (
              <Icon name="user" size={25} color="#000" />
            )
          },
        }} />
      </Tab.Navigator>

    </NavigationContainer>


  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>

      <Stack.Screen name="Home" component={App} />
      {/* <Stack.Screen name="Books" component={App} />
      <Stack.Screen name="Reviews" component={App} />
      <Stack.Screen name="Profile" component={App} /> */}


    </Stack.Navigator>
  )
}

export { StackNavigator }