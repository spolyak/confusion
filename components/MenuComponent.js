import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    };
    
    styles = StyleSheet.create({
        subtitleView: {
            flexDirection: 'row',
            paddingLeft: 10,
            paddingTop: 5
        },
        ratingImage: {
            height: 19.21,
            width: 100
        },
        ratingText: {
            paddingLeft: 10,
            color: 'grey'
        }
    })

    render() {
        const renderMenuItem = ({ item, index }) => {
            return (
                <ListItem key={index} onPress={() => navigate('Dishdetail', { dishId: item.id })}>
                    <Avatar source={require('./images/uthappizza.png')}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <View>
                            <Text >{item.description}</Text>
                        </View>
                    </ListItem.Content>
                </ListItem>
            );
        }

        const { navigate } = this.props.navigation;
        return (
            <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default Menu;