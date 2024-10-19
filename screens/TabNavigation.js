import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from './Login';
import FormIkEx from './FormIkEx';
import { Form } from 'formik';
import about from './about';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Login}/>
            <Tab.Screen name='Login' component={about}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation
