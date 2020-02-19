import React, {Component, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {observer} from "mobx-react";
import MenuStore from "../../utils/store/MenuStore";

export const Logout = ({navigation, ...props}) => {
  useEffect(() => {
    //alert("sdfsd");
    //MenuStore.setLogout();
    //navigation.navigate('Corporate');
    //this.props.navigation.navigate({ routeName: 'RouteHome'});
    /*
        this.props.navigation.addListener('willFocus', (route) => {
          MenuStore.setLogout();
          this.props.navigation.navigate({ routeName: 'RouteHome'});
        });*/
  }, []);

  return (
    <View>
    </View>
  );
};

const styles = StyleSheet.create({});
