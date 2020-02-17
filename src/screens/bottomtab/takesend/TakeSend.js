import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View} from 'react-native';
import RenderLoadingView from '../../../components/RenderLoadingView';
import {Button} from 'react-native-elements';
import {fetchSuccessCall} from '../../../api/sample/SampleAPI';
import LanguageStore from '../../../utils/store/LanguageStore';

export const TakeSend = ({ navigation, route }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('Mesaj');

  useEffect(() => {
    //
  }, []);

  successCall = async () => {
    navigation.navigate('TakeSendList');
  };

  const renderForm = () => {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          buttonStyle={styles.success}
          title="Navigate List"
          onPress={() => this.successCall()}
        />
      </View>
    );
  };

  if (!isVisible) {
    return <RenderLoadingView />;
  } else {
    return renderForm();
  }
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
