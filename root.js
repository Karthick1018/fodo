import React from 'react';
import Main from './Pages/Splashpage';
import Login from './Pages/Loginpage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Verification from './Pages/Verification';
import Address from './Pages/Address';

const Stack = createNativeStackNavigator();

function CustomNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Main'>
      <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Verification' component={Verification} options={{headerShown:false}}/>
      <Stack.Screen name='Address' component={Address} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default CustomNavigator;
