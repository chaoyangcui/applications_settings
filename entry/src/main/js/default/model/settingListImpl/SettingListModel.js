/**
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import BaseModel from '../BaseModel.js';
import BaseParseConfModel from '../baseParseConfImpl/BaseParseConfModel.js';
import LogUtil from '../../common/baseUtil/LogUtil.js';

/**
 * app setting homepage service class
 */
let baseParseConfModel = new BaseParseConfModel();
let logUtil = new LogUtil();
var settingList;

export default class SettingListModel extends BaseModel {
    setSettingListener(callback) {
        settingList = baseParseConfModel.getJsonData('/data/accounts/account_0/applications/com.ohos.settings/com.ohos.settings/assets/entry/resources/rawfile/settinglist.json');
        logUtil.info('settings settingList get by json:' + JSON.stringify(settingList));
        callback(settingList);
    }
}