import React from 'react';
import {MessageBarManager} from 'react-native-message-bar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';

/*********************************

 Message toast çeşitleri ve kullanım alanları:

 infoMessage:
    -Kullanıcı yapılan aksiyon sonucunda bilgilendirilirken.
    -Örn. "Veri oluşturulamadı", "Tarih aralığında veri bulunamadı"

 warningMessage:
    -Kullanıcıya yapması gereken bir aksiyon iletirilirken. Genelde Emir kipi kullanılan mesajlar.
    -Örn. "Önce il seçiniz"

 errorMessage:
    -Hata ile sonuçlanan ve "hata" ibaresi içeren mesajlar.
    -Örn. "Liste getirilirken hata oluştu"

 successMessage:
    -Barşarı ile sonuçlanan aksiyonlardan sonra.
    -Örn. "Kaydetme işlemi başarıyla tamamlandı"

 *********************************/

export const successMessage = (
  message = 'İşlem başarıyla gerçekleşti',
  duration = 3,
  title = 'Başarılı',
) => {
  return MessageBarManager.showAlert({
    alertType: 'success',
    stylesheetSuccess: {
      backgroundColor: '#34a853',
      strokeColor: '#34a853',
      titleColor: '#ffffff',
      messageColor: '#ffffff',
    },
    avatar: <Icon name="check-circle" color={'white'} size={20} />,
    title: title,
    message: message,
    animationType: 'SlideFromTop',
    viewTopOffset: 0,
    messageNumberOfLines: 10,
    duration: duration * 1000,
    viewTopInset: 30,
    viewLeftInset: 20,
    viewRightInset: 20,
    durationToShow: 400,
    durationToHide: 2000,
    titleStyle: {fontSize: 18, fontFamily: EStyleSheet.value('$gFontBold')},
    messageStyle: {
      fontSize: 18,
      fontFamily: EStyleSheet.value('$gFontRegular'),
    },
  });
};

export const errorMessage = (
  message = 'Hata meydana geldi',
  duration = 3,
  title = 'Başarısız',
) => {
  return MessageBarManager.showAlert({
    alertType: 'error',
    stylesheetError: {
      backgroundColor: '#ea4335',
      strokeColor: '#ea4335',
      titleColor: '#ffffff',
      messageColor: '#ffffff',
    },
    avatar: <Icon name="times" color={'white'} size={20} />,
    title: title,
    message: message,
    animationType: 'SlideFromTop',
    viewTopOffset: 0,
    messageNumberOfLines: 10,
    duration: duration * 1000,
    viewTopInset: 30,
    viewLeftInset: 20,
    viewRightInset: 20,
    durationToShow: 400,
    durationToHide: 2000,
    titleStyle: {fontSize: 18, fontFamily: EStyleSheet.value('$gFontBold')},
    messageStyle: {
      fontSize: 18,
      fontFamily: EStyleSheet.value('$gFontRegular'),
    },
  });
};

export const infoMessage = (
  message = 'Veri bulunamadı',
  duration = 3,
  title = 'Bilgilendirme',
) => {
  return MessageBarManager.showAlert({
    alertType: 'info',
    stylesheetInfo: {
      backgroundColor: '#4285f4',
      strokeColor: '#4285f4',
      titleColor: '#ffffff',
      messageColor: '#ffffff',
    },
    avatar: <Icon name="info-circle" color={'white'} size={20} />,
    title: title,
    message: message,
    animationType: 'SlideFromTop',
    viewTopOffset: 0,
    messageNumberOfLines: 10,
    duration: duration * 1000,
    viewTopInset: 30,
    viewLeftInset: 20,
    viewRightInset: 20,
    durationToShow: 400,
    durationToHide: 2000,
    titleStyle: {fontSize: 18, fontFamily: EStyleSheet.value('$gFontBold')},
    messageStyle: {
      fontSize: 18,
      fontFamily: EStyleSheet.value('$gFontRegular'),
    },
  });
};

export const warningMessage = (
  message = 'Uyarı',
  duration = 3,
  title = 'Uyarı',
) => {
  return MessageBarManager.showAlert({
    alertType: 'warning',
    stylesheetWarning: {
      backgroundColor: '#fbbc05',
      strokeColor: '#fbbc05',
      titleColor: '#ffffff',
      messageColor: '#ffffff',
    },
    avatar: <Icon name="exclamation-triangle" color={'white'} size={20} />,
    title: title,
    message: message,
    animationType: 'SlideFromTop',
    viewTopOffset: 0,
    messageNumberOfLines: 10,
    duration: duration * 1000,
    viewTopInset: 30,
    viewLeftInset: 20,
    viewRightInset: 20,
    durationToShow: 400,
    durationToHide: 2000,
    titleStyle: {fontSize: 18, fontFamily: EStyleSheet.value('$gFontBold')},
    messageStyle: {
      fontSize: 18,
      fontFamily: EStyleSheet.value('$gFontRegular'),
    },
  });
};

export const sumErrorMessage = errorList => {
  let message = '';
  Object.keys(errorList).map(value => {
    if (errorList[value] !== false) {
      message = message + errorList[value];
    }
  });

  if (message !== '') {
    errorMessage(message);
    return true;
  } else {
    return false;
  }
};
