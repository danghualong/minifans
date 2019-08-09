const API_HOST = "WXA_ENV" === "production" ? "http://weixin.qishengvet.com/Api" : ("WXA_ENV" === "development" ? "http://weixin.dev.qishengvet.com/Api" : "http://weixin.local.qishengvet.com/Api")
const LOG_HOST = "WXA_ENV" === "production" ? "http://weixin.qishengvet.com/Api/Logger/Index" : ("WXA_ENV" === "development" ? "http://weixin.dev.qishengvet.com/Api/Logger/Index" : "http://weixin.local.qishengvet.com/Api/Logger/Index")
const API_URI = {
    //基础
    SILENT_LOGIN: '/Users/SilentLogin',
    BASE_LOGIN: '/Users/Login',
    SEND_LOGIN_SMS: '/Users/GetVerifyCode',
    //数据
    DATA_BASE: '/Data/BaseData',
    //地理位置
    LOCATION_TO_CITY: '/Location/CoordinateToCity',
    LOCATION_TO_CITY_HOSPITAL: '/Location/MyCityAndNearestHospital',
    CITY_AND_HOSPITAL_WITH_DISTANCE: '/Location/CityAndHospitalList',
}

module.exports = {
    API_HOST,
    LOG_HOST,
    API_URI
}