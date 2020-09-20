import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

function Menu(props) {


    const renderMenuItem = ({ item, index }) => {
        return (
            <ListItem key={index} onPress={() => props.onPress(item.id)}>
                <Avatar size="small"
                    rounded
                    title="FD"
                />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <View style={styles.subtitleView}>
                        <Text >{item.description}</Text>
                    </View>
                </ListItem.Content>
            </ListItem>
        );
    }
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

    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    )



}


export default Menu;