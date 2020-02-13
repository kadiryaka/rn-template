import React, { Component } from 'react';
import {Text} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import {observer} from "mobx-react";
import MenuStore from "../../utils/store/MenuStore";

/**
 * visibleWhenWithoutLogin: eğer login olunmadan önce gösterilmesi gereken menü ise true verilmeli. Değiilse false
 */
@observer
export default class DrawerLabel extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      ...props
    };
  }

  showWithoutLogin = () => {
    if (MenuStore.isLogin) {
      return () => null;
    } else {
      return (<Text style={[styles.text, (this.props.label.focused) ? {color:'#fff'} : { color: EStyleSheet.value('$gColor')}]}> {this.props.title} </Text>);
    }
  }

  showWithLogin = () => {
    if (MenuStore.isLogin) {
      return (
        <Text style={[styles.text, (this.props.label.focused) ? {color:'#fff'} : { color: EStyleSheet.value('$gColor')}]}> {this.props.title} </Text>
      );
    } else {
      return () => null;
    }
  }

  render() {
    if (this.props.visibleWhenWithoutLogin) {
      return this.showWithoutLogin();
    } else {
      return this.showWithLogin();
    }
  }
}

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  text: {
    margin: 16,
    fontWeight: 'bold',
    fontSize: 16
  }
});
