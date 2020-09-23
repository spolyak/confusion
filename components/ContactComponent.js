import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

const contactTitle = "Contact"
const contactText = "This is our contact text"

class ContactComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Card>
                    <Card.Title>{contactTitle}</Card.Title>
                    <Card.Divider />
                    <Text style={{ margin: 10 }}>
                        {contactText}
                    </Text>
                </Card>
            </View>
        );
    }
}

export default ContactComponent;