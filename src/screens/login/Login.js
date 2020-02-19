import React from 'react';

import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Button} from 'react-native-elements';
import Constants from '../../utils/constants/Constants';
import MenuStore from '../../utils/store/MenuStore';
import {successMessage} from '../../components/MessageToast';
import LanguageStore from '../../utils/store/LanguageStore';

export const Login = ({navigation, ...props}) => {
  const login = () => {
    Constants.USER_ACCESS_TOKEN = 'jwt_token';
    MenuStore.setLogin();
    navigation.navigate('Home');
    successMessage(LanguageStore.resource.messages.success.login);
  };

  return (
    <View style={styles.container}>
      <Button style={styles.login} title="Login" onPress={() => login()} />
    </View>
  );
};

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
