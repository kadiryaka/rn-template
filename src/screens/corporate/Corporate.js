import React, {Component} from 'react';

import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LanguageStore from '../../utils/store/LanguageStore';
import {fetchSuccessCall} from '../../api/sample/SampleAPI';
import RenderLoadingView from '../../components/RenderLoadingView';

export default class Corporate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      message: '',
    };
  }

  componentDidMount = async () => {
    this.successCall();
  };

  successCall = async () => {
    this.setState({isVisible: false});
    let responseData = await fetchSuccessCall({
      emptyMessage: LanguageStore.resource.messages.others.empty_data,
      showMessage: false,
      doActionsPop: false,
    });
    setTimeout(() => {
      this.setState({
        isVisible: true,
        message: responseData.message,
      });
    }, 1000);
  };

  renderData() {
    return (
      <View style={styles.container}>
        <Text> {this.state.message} </Text>
      </View>
    );
  }

  render() {
    if (!this.state.isVisible) {
      return <RenderLoadingView />;
    } else {
      return this.renderData();
    }
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    width: 100,
  },
});
