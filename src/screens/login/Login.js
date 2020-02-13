import React, {Component} from 'react';

import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Button} from 'react-native-elements';
import Constants from '../../utils/constants/Constants';
import MenuStore from '../../utils/store/MenuStore';
import {observer} from "mobx-react";
import {successMessage} from '../../components/MessageToast';
import LanguageStore from '../../utils/store/LanguageStore';

@observer
export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    Constants.USER_ACCESS_TOKEN = "jwt_token";
    MenuStore.setLogin();
    this.props.navigation.navigate({ routeName: 'RouteHome'});
    successMessage(LanguageStore.resource.messages.success.login)
  };

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.login} title="Login" onPress={ () => this.login()} />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    width:100,
  },
});
