/**
 * Burdaki function lar gelen API'den dönen veriyi incelemek içindir.
 * Ancak bazı durumlarda bu işe yaramayabilir. Dönen veri standart dışı ise, bu function'ı kullanmamak gerekir.
 * diğer hatalar için özel hata mesajları verilmelidir. bkn. 401
 * @param responseData response.json() objesinden dönen değer verilmelidir.
 * @param emptyMessage responseData'dan boş veri dönmesi durumunda, ekranda gösterilmesi istenen mesajı belirtir. Default'u = "Veri bulunamadı"
 * @param doActionsPop hata ya da verinin boş gelmesi durumunda Actions.pop() ile geri gitsin mi? kontrolü için gereklidir. default'u false.
 * @param showMessage eğer emptyMessage ın görünmesini istemiyorsak parametreyi false yapmalıyız defaultu true.
 * @returns {*}
 */
import {errorMessage, warningMessage} from '../../components/MessageToast';
import NavigationService from '../configuration/NavigationService';
import LanguageStore from '../store/LanguageStore';

/**
 * analyse response data. if
 */
export const analyzeResponse = ({
  responseData,
  emptyMessage = LanguageStore.resource.messages.others.empty_data,
  showMessage = true,
  doActionsPop = false,
}) => {
  if (
    responseData == null ||
    (isArray(responseData) && responseData.length === 0)
  ) {
    showMessage ? warningMessage(emptyMessage) : true;
    doActionsPop ? NavigationService.goBack() : true;
  }
  return responseData;
};

/**
 * chech http response status
 * @param response
 * @param doActionsPop
 * @returns {null|*}
 */
export const checkHttpResponseStatus = ({response, doActionsPop = false}) => {
  if (response.ok && response.status === 200) {
    return response;
  } else {
    errorMessage(
      response.status +
        ' ' +
        (response.statusText === undefined
          ? responseStatus(response.status)
          : response.statusText),
    );
    doActionsPop ? NavigationService.goBack() : true;
    return null;
  }
};

/**
 * @param status = http status code in response
 * @returns {*} message of http status code
 */
const responseStatus = status => {
  return status != null
    ? LanguageStore.httpCodes[status.toString()].message
    : null;
};

/*
check for is array
 */
const isArray = x => {
  return x.constructor.toString().indexOf('Array') > -1;
};
