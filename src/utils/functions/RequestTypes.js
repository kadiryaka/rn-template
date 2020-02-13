import base64 from 'base-64';
import Constants from '../../utils/constants/Constants';

let credential = 'username:pass!*';

export default {
  BASIC_ENCODED_USERS: base64.encode(credential),

  /**
   * Yetkisiz POST
   */
  POST_NOT_AUTH({body = null}) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  },

  /**
   * Basic Yetkili POST
   */
  POST_BASIC_AUTH({body = null}) {
    return {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + this.BASIC_ENCODED_USERS,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  },

  /**
   * Bearer Yetkili POST
   */
  POST_BEARER_AUTH({body = null}) {
    return {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + Constants.USER_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  },

  /**
   * Yetkisiz GET
   */
  GET_NOT_AUTH() {
    return {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },

  /**
   * Basic Yetkili GET
   */
  GET_BASIC_AUTH() {
    return {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + this.BASIC_ENCODED_USERS,
        'Content-Type': 'application/json',
      },
    };
  },

  /**
   * Bearer Yetkili GET
   */
  GET_BEARER_AUTH() {
    return {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + Constants.USER_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      },
    };
  },
};
