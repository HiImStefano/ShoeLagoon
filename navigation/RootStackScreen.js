import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Login from './screens/Login';
import Signup from './screens/Signup';
import SplashScreen from './screens/SplashScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="Signup" component={Signup}/>
        <RootStack.Screen name="Login" component={Login}/>
    </RootStack.Navigator>
}

export default RootStackScreen