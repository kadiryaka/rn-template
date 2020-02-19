/**
 * dummy call
 * örn: http://www.mocky.io/v2/5e3c1142300000233c214b29
 * @returns {Promise<R>}
 */
import FRequestTypes from '../../utils/functions/RequestTypes';
import {
  analyzeResponse,
  checkHttpResponseStatus,
} from '../../utils/functions/CheckApiData';

/**
 * success dummy call, response 200 and messages.
 * http://www.mocky.io/v2/5e3c1142300000233c214b29
 */
export const fetchSuccessCall = async ({
  emptyMessage = null,
  showMessage = false,
  doActionsPop = false,
}) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = 'http://www.mocky.io/v2/5e3c1142300000233c214b29';
    fetch(REQUEST_URL, FRequestTypes.GET_NOT_AUTH())
      .then(response => {
        return checkHttpResponseStatus({response, doActionsPop}) != null
          ? response.json()
          : null;
      })
      .then(responseData => {
        resolve(
          responseData != null
            ? analyzeResponse({
                responseData,
                doActionsPop,
                emptyMessage,
                showMessage,
              })
            : null,
        );
      })
      .catch(e => {
        resolve(null);
      })
      .done();
  });
};

/**
 * fail dummy call, response 400+ and messages.
 * http://www.mocky.io/v2/5e3d05f62d0000a900d95a27 - 401
 * http://www.mocky.io/v2/5e3d06fc2d0000a900d95a32 - 404
 */
export const fetchFailCall = async ({
  emptyMessage = null,
  showMessage = false,
  doActionsPop = false,
}) => {
  return new Promise((resolve, reject) => {
    let REQUEST_URL = 'http://www.mocky.io/v2/5e3d05f62d0000a900d95a27';
    fetch(REQUEST_URL, FRequestTypes.GET_NOT_AUTH())
      .then(response => {
        return checkHttpResponseStatus({response, doActionsPop}) != null
          ? response.json()
          : null;
      })
      .then(responseData => {
        resolve(
          responseData != null
            ? analyzeResponse({
                responseData,
                doActionsPop,
                emptyMessage,
                showMessage,
              })
            : null,
        );
      })
      .catch(e => {
        resolve(null);
      })
      .done();
  });
};
