import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class MainComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name="Menu" component={Menu} />
                    <Stack.Screen name="Dishdetail" component={Dishdetail} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default MainComponent;