import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    Detail: Detail
})

const WelcomeStack = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            headerShown: false
        }
    }
})

export default createAppContainer(createSwitchNavigator({
    Welcome: WelcomeStack,
    Home: HomeStack
}, {
    navigationOptions: {
        headerShown: false
    }
}))