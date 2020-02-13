import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View} from 'react-native';
import {fetchSuccessCall} from '../../api/sample/SampleAPI';
import LanguageStore from '../../utils/store/LanguageStore';
import RenderLoadingView from '../../components/RenderLoadingView';

const Corporate = ({}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    successCall();
  }, []);

  const successCall = async () => {
    setIsVisible(false);
    let responseData = await fetchSuccessCall({
      emptyMessage: LanguageStore.resource.messages.others.empty_data,
      showMessage: false,
      doActionsPop: false,
    });
    setMessage(responseData.message);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  const renderData = () => {
    return (
      <View style={styles.container}>
        <Text> {message} </Text>
      </View>
    );
  };

  if (!isVisible) {
    return <RenderLoadingView />;
  } else {
    return renderData();
  }
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Corporate;
