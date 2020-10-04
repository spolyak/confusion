import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { fetchDishes, fetchComments, fetchLeaders, fetchPromotions } from '../redux/ActionsCreator';

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromotions: () => dispatch(fetchPromotions())
});

const mapStateToProps = state =>  {
    return {
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions 
    }
}

const homeTitle = "Home"

function RenderItem(props) {
  const item = props.item;
  if (item != null) {
    return (
      <Card>
        <Card.Image source={{uri: baseUrl + item.image}} />        
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

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchLeaders();
  }

  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation
    };
  }

  render() {
    return (
      <ScrollView>
        <RenderItem item={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} />
        <RenderItem item={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]} />
        <RenderItem item={this.props.leaders.leaders.filter((leader) => leader.featured)[0]} />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
