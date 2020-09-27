import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

const homeTitle = "Home"

function RenderItem(props) {
  const item = props.item;
  if (item != null) {
    return (
      <Card>
        <Card.Image source={require('./images/uthappizza.png')} />
        <Card.Title>{item.name}</Card.Title>
        <Card.Title>{item.designation}</Card.Title>
        <Card.Divider />
        <Text style={{ margin: 10 }}>
          {item.description}
        </Text>
      </Card>
    );
  }
  else {
    return (
      <View></View>
    );
  }
}

class HomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      navigation: props.navigation
    };
  }

  render() {
    return (
      <ScrollView>
        <RenderItem item={this.state.dishes.filter((dish) => dish.featured)[0]} />
        <RenderItem item={this.state.promotions.filter((promotion) => promotion.featured)[0]} />
        <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />
      </ScrollView>
    );
  }
}

export default HomeComponent;
