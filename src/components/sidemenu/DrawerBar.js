import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class DrawerBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ...props,
    };
  }

  toggleMenu = () => {
    this.state.navigation.toggleDrawer();
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.toggleMenu()}
        style={styles.container}>
        <Icon name="bars" size={25} color={EStyleSheet.value('$gColor')} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
    marginLeft:10,
  },
});
