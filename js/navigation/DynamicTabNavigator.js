import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Popular from '../pages/Popular';
import Trending from '../pages/Trending';
import Favorite from '../pages/Favorite';
import My from '../pages/My';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux';
const TABS = {
    Popular: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name='whatshot'
                    size={26}
                    color={tintColor}
                />
            )
        }
    },
    Trending: {
        screen: Trending,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name='trending-up'
                    size={26}
                    color={tintColor}
                />
            )
        }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons
                    name='favorite'
                    size={26}
                    color={tintColor}
                />
            )
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Feather
                    name='user'
                    size={26}
                    color={tintColor}
                />
            )
        }
    }
}

class DynamicTabNavigator extends Component {
    _tabNavigator = () => {
        if (this.tab) {
            return this.tab
        }
        const { Popular, Trending, Favorite, My } = TABS;
        Popular.navigationOptions.tabBarLabel = '最热1'
        const tabs = { Popular, Trending, Favorite, My };
        return this.tab = createAppContainer(createBottomTabNavigator(tabs, {
            tabBarComponent: props => <TabBarComponent {...props} theme={this.props.theme} />
        }))
    }
    render() {
        const Tab = this._tabNavigator()
        return <Tab />
    }
}

class TabBarComponent extends Component {

    render() {
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.props.theme}
        />
    }
}

export default connect(
    state => ({ theme: state.theme.theme })
)(DynamicTabNavigator)