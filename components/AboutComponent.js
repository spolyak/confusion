import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

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

export default AboutComponent;