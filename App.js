import 'react-native-gesture-handler';
import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import HomeComponent from './components/HomeComponent';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeComponent} />
        <Drawer.Screen name="Main" component={MainComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;