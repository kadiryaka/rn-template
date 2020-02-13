import React, {Component} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {fetchFailCall, fetchSuccessCall} from '../api/sample/SampleAPI';
import LanguageStore from '../utils/store/LanguageStore';
import RenderLoadingView from '../components/RenderLoadingView';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  successCall = async () => {
    this.setState({isVisible: false});
    await fetchSuccessCall({
      emptyMessage: LanguageStore.resource.messages.others.empty_data,
      showMessage: false,
      doActionsPop: false,
    });
    setTimeout(() => {
      this.setState({isVisible: true});
    }, 1000);
  };

  failedCall = async () => {
    this.setState({isVisible: false});
    await fetchFailCall({
      emptyMessage: LanguageStore.resource.messages.others.empty_data,
      showMessage: false,
      doActionsPop: false,
    });
    setTimeout(() => {
      this.setState({isVisible: true});
    }, 1000);
  };

  renderScreen = () => {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          buttonStyle={styles.success}
          title="Success Call"
          onPress={() => this.successCall()}
        />
        <Button
          style={styles.button}
          buttonStyle={styles.fail}
          title="Failed Call"
          onPress={() => this.failedCall()}
        />
      </View>
    );
  };

  render = () => {
    if (this.state.isVisible) {
      return this.renderScreen();
    } else {
      return <RenderLoadingView />;
    }
  };
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingTop: 10,
  },
  fail: {
    backgroundColor: 'red',
  },
  success: {
    backgroundColor: 'green',
  },
});
