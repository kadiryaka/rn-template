import React from 'react';
import {Dimensions} from "react-native";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {observer} from "mobx-react";

import Home from './screens/Home';
import Corporate from './screens/corporate/Corporate';
import DrawerBar from "./components/sidemenu/DrawerBar";
import DrawerText from "./components/sidemenu/DrawerText";
import DrawerSearch from "./components/sidemenu/DrawerSearch";
import DrawerCustomComponent from "./components/sidemenu/DrawerCustomComponent";
import EStyleSheet from "react-native-extended-stylesheet";
import NavigationService from "./utils/configuration/NavigationService";
import Login from "./screens/login/Login";
import DrawerLabel from "./components/sidemenu/DrawerLabel";
import DrawerIcon from "./components/sidemenu/DrawerIcon";
import Logout from "./screens/login/Logout";
import LanguageStore from "./utils/store/LanguageStore";

const HomeStack = createStackNavigator({
    RouteHome: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerLeft: () => (<DrawerBar navigation={navigation}/>),
            headerTitle: () => (<DrawerText title={LanguageStore.resource.side_menu.home.title}/>),
            headerTitleAlign: 'center'
        }),
    }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        headerBackTitle : LanguageStore.resource.router.back_title,
        headerTintColor: EStyleSheet.value('$gColor'),
        initialRouteName: 'RouteHome',
    }),
});

const CorporateStack = createStackNavigator({
    RouteCorporate: {
        screen: Corporate,
        navigationOptions: ({ navigation }) => ({
            headerLeft: () => (<DrawerBar navigation={navigation}/>),
            headerTitle: () => (<DrawerText title={LanguageStore.resource.side_menu.corporate.title} />),
            headerTitleAlign: 'center'
        }),
    },
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        headerBackTitle : LanguageStore.resource.router.back_title,
        headerTintColor: EStyleSheet.value('$gColor'),
    }),
});

const LoginStack = createStackNavigator({
    RoutLogin: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            headerLeft: () =>  (<DrawerBar navigation={navigation}/>),
            headerTitle: () => (<DrawerText title={LanguageStore.resource.side_menu.login.title} />),
        }),
    },
    RoutLogout: {
        screen: Logout,
        navigationOptions: ({ navigation }) => ({
            headerLeft: () => (<DrawerBar navigation={navigation}/>),
            headerTitle: () => (<DrawerText title={LanguageStore.resource.side_menu.logout.title} />),
            headerTitleAlign: 'center'
        }),
    },
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        headerBackTitle : LanguageStore.resource.router.back_title,
        headerTintColor: EStyleSheet.value('$gColor'),
    }),
});

const Drawer = createDrawerNavigator({
    DrawerHome: {
        screen: HomeStack,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: LanguageStore.resource.side_menu.home.title,
            drawerIcon: ({ tintColor }) => ( <Icon name="home" size={20} color={tintColor} /> )
        }),
    },
    DrawerCorporate: {
        screen: CorporateStack,
        navigationOptions: {
            drawerLabel: LanguageStore.resource.side_menu.corporate.title,
            drawerIcon: ({ tintColor }) => ( <Icon name="info" size={25} color={tintColor} /> )
        }
    },
     DrawerLogin: {
        screen: LoginStack,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: (label) => <DrawerLabel label={label} visibleWhenWithoutLogin={true} title={LanguageStore.resource.side_menu.login.title} />,
            drawerIcon: (icon) => <DrawerIcon icon={icon} size={25} visibleWhenWithoutLogin={true} iconName={'user'} />,
        }),
    },
    DrawerLogout: {
        screen: Logout,
        navigationOptions: {
            drawerLabel: (label) => <DrawerLabel label={label} visibleWhenWithoutLogin={false} title={LanguageStore.resource.side_menu.logout.title} />,
            drawerIcon: (icon) => <DrawerIcon icon={icon} size={25} visibleWhenWithoutLogin={false} iconName={'sign-out-alt'} />,
        }
    },
}, {
    initialRouteName: 'DrawerHome',
    drawerPosition: "left",
    drawerWidth: (Dimensions.get('window').width < 450 ? 240 : 350),
    drawerType: 'slide',
    contentOptions: {
        /*activeTintColor: "#fff",
        inactiveTintColor: "#882065",
        activeBackgroundColor: "#882065",
        inactiveBackgroundColor: "#fff"*/
    },
    defaultNavigationOptions: ({ navigation }) => ({
        headerRight:  (<DrawerSearch navigation={navigation}/>),
    }),
    contentComponent: (props) => (
      <DrawerCustomComponent drawerItem={props} />
    )
});

//export default createAppContainer(Drawer);
const AppContainer = createAppContainer(Drawer);

@observer
export default class App extends React.Component {
    render() {
        return (
          <AppContainer
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        )
    }
}
