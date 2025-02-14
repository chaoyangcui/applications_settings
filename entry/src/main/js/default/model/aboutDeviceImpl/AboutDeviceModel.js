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
import LogUtil from '../../common/baseUtil/LogUtil.js';
import DeviceInfo from '@ohos.deviceInfo';

let mLogUtil = null;

/**
 * about device service class
 */
export default class AboutDeviceModel extends BaseModel {
    constructor() {
        super();
        mLogUtil = new LogUtil();
    }

    setOnAboutDeviceListener(callback) {
        mLogUtil.info('settings aboutDevice get deviceInfo start');
        this.text = DeviceInfo.productModel;
        mLogUtil.info('settings aboutDevice get deviceInfo:' + JSON.stringify(DeviceInfo));
        callback(DeviceInfo);
    }
}