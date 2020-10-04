import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

const mapStateToProps = state =>  {
    return {
        leaders: state.leaders 
    }
}

const aboutTitle = "About"
const aboutText = "This is our about text"

class AboutComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Card>
                    <Card.Title>{aboutTitle}</Card.Title>
                    <Card.Divider />
                    <Text style={{ margin: 10 }}>
                        {aboutText}
                    </Text>
                </Card>
            </View>
        );
    }
}

export default connect(mapStateToProps)(AboutComponent;