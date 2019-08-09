import { toast } from "@wxa/core"
import Network from "../utils/network"
import Session from '../utils/session'
import Location from '../utils/location'

export default class Init {
    async onLaunch(setting) {
        //获取地理位置
        let location = await Location.apiGetLocation()

        //获取城市和位置
        let cityAndHospital = await Network.RequestApi('LOCATION_TO_CITY_HOSPITAL', location)
        this.$store.dispatch({type: 'locationUpdate', payload: cityAndHospital});

        //微信登录
        let wxLoginRes = await this.$wxapi.login();

        let loginRes = await Network.RequestApi('SILENT_LOGIN', { code: wxLoginRes.code })
        if (loginRes.sessionId) {
            //设置sessionId
            Session.login(loginRes.sessionId)
            //设置全局用户信息
            this.$store.dispatch({ type: 'userInfoUpdate', payload: loginRes })
        } else {
            await this.$router.push('/pages/login');
        }

        //设置tabbar的红点角标
        //this.$wxapi.showTabBarRedDot({index:1})

    }

    onError(msg) {
        toast('发生错误')
    }

    onPageNotFound(res) {
        toast('页面不存在')
    }
}