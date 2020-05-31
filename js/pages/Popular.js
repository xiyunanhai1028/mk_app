import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import NavigationUtils from '../navigation/NavigationUtils';

export default class Popular extends Component {
    constructor(props) {
        super(props);
        this.tabNames = ["Android", "Java", "HTML", "IOS", "PHP", "Go", "Kotlin"]
    }

    _getTabs = () => {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <Fragment {...props} tabBarLabel={item} />,
                navigationOptions: {
                    title: item
                }
            }
        })
        return tabs
    }

    _topTabNavigator = () => {
        return createAppContainer(createMaterialTopTabNavigator(this._getTabs(), {
            tabBarOptions: {
                upperCaseLabel: false,
                indicatorStyle: {
                    backgroundColor: 'white'
                },
                scrollEnabled: true,
                tabStyle: {
                    minWidth: 40,
                    width: 80
                }
            }
        }))
    }

    render() {
        const Tabs = this._topTabNavigator()
        return (
            <View style={{ flex: 1 }}>
                <Tabs />
            </View>
        );
    }
}

class Fragment extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 40, color: '#789' }}> Popular </Text>
                <Text style={{ fontSize: 40, color: '#789', marginTop: 20 }}
                    onPress={() => NavigationUtils.goToPage('Detail')}> To Detail </Text>
            </View>
        )
    }
} 
