import { createAppContainer } from 'react-navigation';
import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import { createStackNavigator } from 'react-navigation-stack';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const Main = createAppContainer(MenuNavigator);

export default Main; 