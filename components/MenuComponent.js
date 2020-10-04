import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl'

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                <Tile
                    imageSrc={{ uri: baseUrl + item.image }}
                    title={item.name}
                    featured
                    onPress={() => navigate('Dishdetail', { dishId: item.id })}
                    caption={item.description}
                />
            );
        }

        const { navigate } = this.props.navigation;
        return (
            <FlatList
                data={this.props.dishes.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default connect(mapStateToProps)(Menu);