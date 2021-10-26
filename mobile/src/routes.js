import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Incidents from './pages/Incidents';
import Details from './pages/Details'

const AppStack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer >

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Incidents' component={ Incidents } />
                <AppStack.Screen name='Details' component={ Details } />
            </AppStack.Navigator>

        </NavigationContainer>
    )
};