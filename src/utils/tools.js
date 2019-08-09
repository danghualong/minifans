function checkPhoneNumber(phoneNumber) {
    if (phoneNumber.trim().length !== 11) {
        return false
    }

    if ((/^(1[3-9][0-9])\d{8}$/.test(phoneNumber.trim()))) {
        return true
    } else {
        return false;
    }
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
function DateFormat(dateObject, fmt) { //author: meizz 
    var o = {
        "M+": dateObject.getMonth() + 1, //月份 
        "d+": dateObject.getDate(), //日 
        "h+": dateObject.getHours(), //小时 
        "m+": dateObject.getMinutes(), //分 
        "s+": dateObject.getSeconds(), //秒 
        "q+": Math.floor((dateObject.getMonth() + 3) / 3), //季度 
        "S": dateObject.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (dateObject.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function getAgesFromBirthday(str) {
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4]);
    if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
        var Y = new Date().getFullYear();
        return Y - r[1];
    }

    throw new Error("输入的日期格式错误！");
}

module.exports = {
    checkPhoneNumber,
    DateFormat,
    getAgesFromBirthday
}