import React from 'react';
import Main from './Pages/Splashpage';
import Login from './Pages/Loginpage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Verification from './Pages/Verification';
import Address from './Pages/Address';
import Items from './Pages/Food items';
import Foods from './Pages/Items page';
import Profile from './Pages/Profilepage';
import Restaurant from './Pages/Items page/restaurant';
import Cart from './Pages/Address/cart';
import Payment from './Pages/Profilepage/payment';

const Stack = createNativeStackNavigator();

function CustomNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Main'>
      <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Verification' component={Verification} options={{ headerShown: false }} />
      <Stack.Screen name='Address' component={Address} options={{ headerShown: false }} />
      <Stack.Screen name='Items' component={Items} options={{ headerShown: false }} />
      <Stack.Screen name='Foods' component={Foods} options={{ headerShown: false }} />
      <Stack.Screen name='Restaurant' component={Restaurant} options={{ headerShown: false }} />
      <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name='Payment' component={Payment} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

export default CustomNavigator;
