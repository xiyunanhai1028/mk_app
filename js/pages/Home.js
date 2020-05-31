import React, { Component } from 'react';
import DynamicTabNavigator from '../navigation/DynamicTabNavigator'
import NavigationUtils from '../navigation/NavigationUtils';

export default class Home extends Component {
    render() {
        NavigationUtils.navigation = this.props.navigation
        return (
            <DynamicTabNavigator />
        );
    }
}
