const WEEK_TEXT=['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

// 获取与当前日期相差几天的日期
function getDateDiff(diff) {
    let date=new Date();
    date.setDate(date.getDate()+diff);
    return date;
}
// 获取指定日期是一周中的周几
function getDayInWeek(date) {
    let index=date.getDay();
    return WEEK_TEXT[index];
}
// 获取指定日期的月份（并且自动补前面的0）
function getMonthText(date) {
    let monthText=(date.getMonth()+1)+'';
    if (monthText.length<2) {
        monthText='0'+monthText;
    }
    return monthText;
}
// 获取指定日期的日期（并且自动补前面的0）
function getDayText(date) {
    let dayText=date.getDate()+'';
    if (dayText.length<2) {
        dayText='0'+dayText;
    }
    return dayText;
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
function DateFormat(dateObject, fmt) { // author: meizz 
    let o = {
        'M+': dateObject.getMonth() + 1, // 月份 
        'd+': dateObject.getDate(), // 日 
        'h+': dateObject.getHours(), // 小时 
        'm+': dateObject.getMinutes(), // 分 
        's+': dateObject.getSeconds(), // 秒 
        'q+': Math.floor((dateObject.getMonth() + 3) / 3), // 季度 
        'S': dateObject.getMilliseconds(), // 毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (dateObject.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (let k in o)
        {
if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
}
    return fmt;
}
// 获取时间范围的整点和半点
function getSharpClocks(date, startTimeText, stopTimeText) {
    let sharpTimes=[];
    try {
        let startHour=startTimeText.split(':')[0];
        let startMinute=startTimeText.split(':')[1];
        let stopHour=stopTimeText.split(':')[0];
        let stopMinute=stopTimeText.split(':')[1];
        let year=date.getFullYear();
        let month=date.getMonth();
        let day=date.getDate();

        let startDate=new Date(year, month, day, parseInt(startHour), parseInt(startMinute), 0);
        if (startMinute>30) {
            startDate=new Date(year, month, day, parseInt(startHour)+1, 0, 0);
        }
        else if (startMinute>0) {
            startDate=new Date(year, month, day, parseInt(startHour), 30, 0);
        }

        let stopDate=new Date(year, month, day, parseInt(stopHour), parseInt(stopMinute), 0);
        if (stopMinute>30) {
            stopDate=new Date(year, month, day, parseInt(stopHour), 30, 0);
        }
        else if (stopMinute>0) {
            stopDate=new Date(year, month, day, parseInt(stopHour), 0, 0);
        }
        else {
            stopDate=new Date(year, month, day, parseInt(stopHour)-1, 30, 0);
        }
        let tmpTime=startDate;
        let i=0;
        while (tmpTime.getTime()<=stopDate.getTime()) {
            sharpTimes.push({
                index:i++,
                date: tmpTime,
                dateText: DateFormat(tmpTime, 'yyyy-MM-dd hh:mm:ss'),
                desc: DateFormat(tmpTime, 'hh:mm'),
                preserved:false,
                selected:false
            });
            tmpTime=new Date(tmpTime.getTime()+30*60*1000);
        }
    } catch (err) {
        console.log(err);
    }
    return sharpTimes;
}


module.exports={
    getDateDiff,
    getDayInWeek,
    getMonthText,
    getDayText,
    getSharpClocks,
};
