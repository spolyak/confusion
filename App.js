import 'react-native-gesture-handler';
import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeComponent} options={{
            drawerIcon: config => <Icon
              size={23}
              type={'font-awesome-5'}              
              name={'home'}></Icon>
          }} />
          <Drawer.Screen name="Menu" component={MainComponent} options={{
            drawerIcon: config => <Icon
              size={23}
              type={'font-awesome-5'}              
              name={'utensils'}></Icon>
          }}/>
          <Drawer.Screen name="About Us" component={AboutComponent} options={{
            drawerIcon: config => <Icon
              size={23}
              type={'font-awesome-5'}
              name={'address-card'}></Icon>
          }}/>
          <Drawer.Screen name="Contact Us" component={ContactComponent} options={{
            drawerIcon: config => <Icon
              size={23}
              type={'font-awesome-5'}              
              name={'comment-alt'}></Icon>
          }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;