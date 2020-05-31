import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const { navigation } = this.props
        this.time = setTimeout(() => {
            navigation.navigate("Home")
        }, 1000);
    }

    componentWillUnmount() {
        this.time && clearTimeout(this.time)
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 40, color: '#789' }} > Welcome </Text>
            </View>
        );
    }
}
