import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class My extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 40, color: '#789' }}> My </Text>
            </View>
        );
    }
}
