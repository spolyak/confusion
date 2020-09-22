import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Main" component={Main} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;