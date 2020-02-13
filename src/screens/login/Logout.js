import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {observer} from "mobx-react";
import MenuStore from "../../utils/store/MenuStore";

@observer
export default class Logout extends Component {

  componentDidMount(): void {

    MenuStore.setLogout();
    this.props.navigation.navigate({ routeName: 'RouteHome'});

    this.props.navigation.addListener('willFocus', (route) => {
      MenuStore.setLogout();
      this.props.navigation.navigate({ routeName: 'RouteHome'});
    });

  }

  render() {
    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
