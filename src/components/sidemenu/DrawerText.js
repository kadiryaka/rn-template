import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * color : text'in rengi
 * title: başlıkta ne yazacağı
 */
export default class DrawerText extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      title: 'AppLogist',
      color: EStyleSheet.value('$gColor'),
      ...props,
    };
  }

  toggleMenu = () => {
    this.props.navigation.toggleDrawer();
  };

  render() {
    return (
      <View>
        <Text style={[styles.container,{color: this.state.color}]}> {this.state.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
