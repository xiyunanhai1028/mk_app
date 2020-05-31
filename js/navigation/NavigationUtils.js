export default class NavigationUtils {
    static goToPage(page, params = {}) {
        const navigation = NavigationUtils.navigation;
        if (!navigation) return console.log('navigation is null');
        navigation.navigate(page, { ...params })
    }

    static goToHome(params) {
        const { navigation } = params;
        navigation.navigate('Home')
    }
}