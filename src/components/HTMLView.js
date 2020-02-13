import React from 'react';
import {WebView} from 'react-native-webview';

/**
 *
 * @param htmlContent : html content to be shown
 * @returns {*}
 * @constructor
 */
const HTMLView = ({htmlContent = ' <h1> no parameter. </h1>'}) => {
  return <WebView originWhitelist={['*']} source={{html: htmlContent}} />;
};

export default HTMLView;
