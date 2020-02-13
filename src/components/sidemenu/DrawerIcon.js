import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from "react-native-extended-stylesheet";
import {observer} from "mobx-react";
import MenuStore from "../../utils/store/MenuStore";

@observer
export default class DrawerIcon extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      size: 25,
      ...props
    };
  }
  showWithoutLogin = () => {
    if (MenuStore.isLogin) {
      return () => null;
    } else {
      return (<Icon name={this.props.iconName} size={this.state.size} color={(this.props.icon.focused) ? 'white' : EStyleSheet.value('$gColor')} />);
    }
  };

  showWithLogin = () => {
    if (MenuStore.isLogin) {
      return (<Icon name={this.props.iconName} size={this.state.size} color={(this.props.icon.focused) ? 'white' : EStyleSheet.value('$gColor')} />);
    } else {
      return () => null;
    }
  };

  render() {
    if (this.props.visibleWhenWithoutLogin) {
      return this.showWithoutLogin();
    } else {
      return this.showWithLogin();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
});
