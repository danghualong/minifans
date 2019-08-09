import { fetch, wxapi, toast } from "@wxa/core";
import md5 from 'md5';
import Session from '../utils/session';
import { API_HOST,LOG_HOST,API_URI } from '../setting/api';

/**
 * 接口网络请求库
 *
 * @export
 * @class Network
 */
export default class Network {
    static RequestApi(resource, dataObject = {}) {
        return this._visitApi(API_HOST + API_URI[resource], dataObject);
    }

    static Report(type, content = '', attach = {}) {
        return this._visitApi(LOG_HOST, {
            type: type,
            content: content,
            attach: JSON.stringify(attach)
        });
    }

    static _visitApi(url, data) {
        wxapi.showLoading({
            title: '加载中...',
            mask: true
        })

        return fetch(url, this._buildParamers(data), { dataType: 'json' }, 'post')
            .then(function (res) {
                wxapi.hideLoading()
                if (res.statusCode != 200 && res.statusCode != 400) {
                    return Promise.reject({
                        code: 500,
                        msg: '服务器错误',
                        content: null
                    });
                }

                if (res.data.code == 200) {
                    return Promise.resolve(res.data.content)
                } else {
                    //200成功
                    //400-499特殊错误，需要客户端特殊响应的
                    //500-599服务器类错误
                    //1000及以上，普通错误

                    if (res.data.code >= 400 && res.data.code < 500) {
                        return Promise.resolve(res.data)
                    } else if (res.data.code >= 500 && res.data.code < 600) {

                    }

                    return Promise.reject(res.data);
                }
            }).catch(function (err) {
                wxapi.hideLoading()
                if (err.msg) {
                    toast(err.msg)
                } else {
                    toast('网络请求错误')
                }
                return Promise.reject(err)
            })
    }

    static _buildParamers(data = {}) {
        let salt = 'base64:7WmkTC+O5EYLSrarV1mj74GyCuimuIZlIaxwKqQDVE0='
        let allPramers = {
            HeadTimestamp: Date.parse(new Date()) / 1000,
            HeadVersion: 'miniapp_1_0_0_0',
            HeadAuthSession: Session.sessionId()
        }

        let dataKey = []
        for (let key in allPramers) {
            dataKey.push(key)
        }

        dataKey.sort()

        // 从数组依次取出，拼接字符串
        let signStr = ''
        for (let i in dataKey) {
            signStr += dataKey[i] + '=' + allPramers[dataKey[i]]
            if (i < dataKey.length - 1) {
                signStr += '&'
            }
        }

        allPramers['HeadSign'] = md5(signStr + salt)
        allPramers['HeadParams'] = JSON.stringify(data)

        return allPramers
    }
}
