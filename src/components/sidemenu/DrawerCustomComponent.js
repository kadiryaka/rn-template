import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Image} from "react-native";
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import EStyleSheet from "react-native-extended-stylesheet";
import {observer} from "mobx-react";

const drawerCover = require("../../../assets/logo/logo.png");

@observer
export default class DrawerCustomComponent extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  render() {
    return (
      <SafeAreaView>
        <Image source={drawerCover} style={styles.sideMenuIcon} />
        <ScrollView>
          <DrawerNavigatorItems
            {...this.props.drawerItem}
            inactiveTintColor={EStyleSheet.value('$gColor')}
            activeTintColor={"#fff"}
            activeBackgroundColor={EStyleSheet.value('$gColor')}
            inactiveBackgroundColor={"#fff"}
            labelStyle={styles.label}/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = EStyleSheet.create({
  label: {
    fontSize: 15,
  },
  sideMenuIcon: {
    resizeMode: 'contain',
    width: 200,
    height: 80,
    marginVertical: 20
  },
  text: {
    margin: 16,
    fontWeight: 'bold',
    color: '$gColor',
    fontSize: 16
  }
});
