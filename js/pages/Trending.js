import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import actions from '../store/actions'

class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 40, color: '#789' }}> Trending </Text>
                <Text style={{ marginTop: 30, fontSize: 40, color: '#789' }}
                    onPress={() => this.props.changeTheme('blue')}> 修改主题 </Text>
            </View>
        );
    }
}
export default connect(null,
    actions
)(Trending)