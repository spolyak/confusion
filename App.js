import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import MenuComponent from './components/MenuComponent';
import DishDetailComponent from './components/DishDetailComponent';

const menuOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon
        size={23}
        style={{ padding: 12 }}
        type={'font-awesome-5'}
        name={'bars'}></Icon>
    </TouchableOpacity>
  )
});

const Home = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="Confusion Restaurant" component={HomeComponent} options={menuOptions} />
  </Stack.Navigator>
)
const About = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="About" component={AboutComponent} options={menuOptions} />
  </Stack.Navigator>
)
const Contact = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="Contact" component={ContactComponent} options={menuOptions} />
  </Stack.Navigator>
)

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Menu() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuComponent} options={menuOptions} />
      <Stack.Screen name="Dishdetail" component={DishDetailComponent} />
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} options={{
      drawerIcon: config => <Icon
        size={23}
        type={'font-awesome-5'}
        name={'home'}></Icon>
    }} />
    <Drawer.Screen name="Menu" component={Menu} options={{
      drawerIcon: config => <Icon
        size={23}
        type={'font-awesome-5'}
        name={'utensils'}></Icon>
    }} />
    <Drawer.Screen name="About" component={About} options={{
      drawerIcon: config => <Icon
        size={23}
        type={'font-awesome-5'}
        name={'address-card'}></Icon>
    }} />
    <Drawer.Screen name="Contact" component={Contact} options={{
      drawerIcon: config => <Icon
        size={23}
        type={'font-awesome-5'}
        name={'comment-alt'}></Icon>
    }} />
  </Drawer.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
