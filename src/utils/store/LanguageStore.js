import {observable} from 'mobx';
import * as RNLocalize from 'react-native-localize';

const languageTR = require('../languages/tr.json');
const languageEN = require('../languages/en.json');

const httpCodes_tr = require('../languages/HttpCode_tr');
const httpCodes_en = require('../languages/HttpCode_en');

class MenuStore {
  @observable resource =
    RNLocalize.getLocales()[0].languageCode === 'tr' ? languageTR : languageEN;

  @observable httpCodes =
    RNLocalize.getLocales()[0].languageCode === 'tr' ? httpCodes_tr : httpCodes_en;
}

export default new MenuStore();
