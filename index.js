/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
//import codePush from "react-native-code-push";
import SplashScreen from 'react-native-splash-screen';

import {name as appName} from './app.json';
//stillerin import etmesi için bu kalacak
import UtilStyle from './src/utils/styles/UtilStyle';
import MessageBar from './src/utils/configuration/MessageBar';
import Router from './src/Router';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
//let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide();
    /**codePush.sync({
      updateDialog: false,
      installMode: codePush.InstallMode.IMMEDIATE
    }).then( () => {
      SplashScreen.hide();
    });
     */
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Router />
        <MessageBar />
      </View>
    );
  }
}

//App = codePush(codePushOptions)(App);
AppRegistry.registerComponent(appName, () => App);
