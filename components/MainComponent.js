import React from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Main() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Dishdetail" component={Dishdetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
