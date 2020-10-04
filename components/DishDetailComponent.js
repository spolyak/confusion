import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl'

const mapStateToProps = state =>  {
    return {
        dishes: state.dishes,
        comments: state.comments 
    }
}

function RenderDish(props) {
    const dish = props.dish;

    if (dish != null) {
        return (
            <Card>
                <Card.Image source={{uri: baseUrl + dish.image}} />
                <Card.Title>{dish.name}</Card.Title>
                <Card.Divider />
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else {
        return (<View></View>)
    }
}

class DishDetailComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {  
        };
    }

    render() {
        const dishId = this.props.route.params.dishId
        return (<RenderDish dish={this.props.dishes.dishes[dishId]} />);
    }
}

export default connect(mapStateToProps)(DishDetailComponent);
