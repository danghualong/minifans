import { wxapi, storage, toast } from "@wxa/core"
import { LOCATION_KEY, LOCATION_EXPIRED } from "../setting/storage"

export default class Location {

    /**
     * 获取地理位置信息【优先从存储获取，否则从微信接口获取】
     * 
     *
     * @static
     * @returns
     * @memberof Location
     */
    static async mustGetLocation() {
        let location = this.storageGetLocation()

        if (location && location.time) {
            if (new Date().getTime() - new Date(location.time).getTime() < LOCATION_EXPIRED) {
                return location
            }
        }


        location = await this.apiGetLocation()

        return location
    }

    /**
     * 获取地理位置信息【从存储】
     *
     * @static
     * @returns
     * @memberof Location
     */
    static storageGetLocation() {
        return storage.get(LOCATION_KEY);
    }

    /**
     * 获取地理位置信息【从微信接口】
     *
     * @static
     * @returns
     * @memberof Location
     */
    static async apiGetLocation() {
        try {
            let setting = await wxapi.getSetting();

            if (setting.authSetting["scope.userLocation"] === undefined || setting.authSetting["scope.userLocation"] === true) {
                let { latitude, longitude } = await wxapi.getLocation({ type: 'gcj02' });

                let res = {
                    latitude,
                    longitude,
                    time: new Date(),
                    from: 'storage'
                }

                storage.set(LOCATION_KEY, res);

                res.from = 'api'

                return res
            }

            return
        } catch (err) {
            toast('获取位置失败')
            return
        }
    }
}