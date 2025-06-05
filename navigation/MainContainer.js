import * as React from 'react'
import {View, Text, TabBarIOSItem} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import StoreLocationScreen from './screens/StoreLocationScreen'

const homeName = 'Home'
const settingsName = 'Settings'
const SLName = 'Store Locator'


export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        } else if (rn === SLName) {
                            iconName = focused ? 'list' : 'list-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: {padding: 10, height: 70}
                }}
                
                > 

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={settingsName} component={SettingsScreen}/>
                <Tab.Screen name={SLName} component={StoreLocationScreen}/>
            </Tab.Navigator>
        </NavigationContainer>

    )
}