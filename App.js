import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import MenuComponent from './components/MenuComponent';
import DishDetailComponent from './components/DishDetailComponent';
import { DrawerContent } from './components/DrawerContent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore();

const menuOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon
        name="menu"
        size={23}
        style={{ padding: 12 }}
      />
    </TouchableOpacity>
  )
});

const Home = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="Ristorante Con Fusion" component={HomeComponent} options={menuOptions} />
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
      <Stack.Screen name="Dishdetail" component={DishDetailComponent}
        options={{ title: 'Menu Details' }} />
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home"
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Menu" component={Menu} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Contact" component={Contact} />
  </Drawer.Navigator>
)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}