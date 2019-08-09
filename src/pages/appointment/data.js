let appointments = [
{
    'id': 1,
    'hospitalName':'启晟宠物测试医院',
    'hospitalId': 1,
    'stateName': '待确认',
    'stateId': 1,
    'appointmentCode': '123001',
    'items': [
        {
            'typeId': 1,
            'productId': 1,
            'imgUrl': 'https://n.sinaimg.cn/ent/transform/175/w105h70/20190702/7816-hzfeken9002034.jpg',
            'productName': '洗澡',
            'count': 1
        },
        {
            'typeId': 1,
            'productId': 2,
            'productName': '美容',
            'count': 1
        }
    ],
    'startTime': '2019-08-01 10:00:00',
    'endTime': '',
    'startTimeDesc': '2019-08-01(周三) 上午10:00',
    'phoneNum': '13811990290',
    'commitTime': '2019-07-12 10:00:00'
},
{
    'id': 2,
    'hospitalName': '启晟宠物测试医院',
    'hospitalId': 1,
    'stateName': '未使用',
    'stateId': 2,
    'appointmentCode': '123002',
    'items': [
        {
            'typeId': 1,
            'productId': 1,
            'productName': '洗澡',
            'count': 2
        },
        {
            'typeId': 2,
            'productId': 11,
            'productName': '疫苗',
            'count': 1
        }
    ],
    'startTime': '2019-08-01 11:00:00',
    'endTime': '',
    'startTimeDesc': '2019-08-01(周三) 上午11:00',
    'phoneNum': '13811990290',
    'commitTime': '2019-07-12 10:00:00',
    'appCode':'354'
},
{
    'id': 3,
    'hospitalName':'启晟宠物测试医院',
    'hospitalId': 1,
    'stateName': '待评价',
    'stateId': 3,
    'appointmentCode': '123003',
    'items': [
        {
            'typeId': 1,
            'productId': 1,
            'productName': '洗澡',
            'count': 2
        },
        {
            'typeId': 2,
            'productId': 11,
            'productName': '疫苗',
            'count': 1
        }
    ],
    'startTime': '2019-08-03 12:00:00',
    'endTime': '',
    'startTimeDesc': '2019-08-03(周三) 上午12:00',
    'phoneNum': '13811990290',
    'commitTime': '2019-07-12 10:00:00',
    'appCode':'356'
},
{
    'id': 4,
    'hospitalName': '启晟宠物测试医院',
    'hospitalId': 1,
    'stateName': '已完结',
    'stateId': 4,
    'appointmentCode': '123004',
    'items': [
        {
            'typeId': 1,
            'productId': 1,
            'productName': '洗澡',
            'count': 2
        },
        {
            'typeId': 2,
            'productId': 11,
            'productName': '疫苗',
            'count': 1
        }
    ],
    'startTime': '2019-08-02 10:00:00',
    'endTime': '',
    'startTimeDesc': '2019-08-02(周四) 上午10:00',
    'phoneNum': '13811990290',
    'commitTime': '2019-07-12 10:00:00'
},
{
    'id': 5,
    'hospitalName': '启晟宠物测试医院',
    'hospitalId': 1,
    'stateName': '已关闭',
    'stateId': 5,
    'appointmentCode': '123005',
    'items': [
        {
            'typeId': 1,
            'productId': 1,
            'productName': '洗澡',
            'count': 2
        },
        {
            'typeId': 2,
            'productId': 11,
            'productName': '疫苗',
            'count': 1
        }
    ],
    'startTime': '2019-08-02 15:00:00',
    'endTime': '',
    'startTimeDesc': '2019-08-02(周四) 上午15:00',
    'phoneNum': '13811990290',
    'commitTime': '2019-07-12 10:00:00'
}];
let hospitals=[
    {
        cityId:456,
        cityName:'北京市',
        hospitalId:35,
        hospitalName:'三里屯宠物医院',
        distance:'距您8km'
    },
    {
        cityId:456,
        cityName:'北京市',
        hospitalId:1,
        hospitalName:'启晟宠物测试医院',
        distance:'距您0.2km'
    },
    {
        cityId:457,
        cityName:'上海市',
        hospitalId:3,
        hospitalName:'上海宠物测试医院',
        distance:'距您1225km'
    },
];
let states=[
    {
        typeId:0,
        typeName:'全部',
        count:0
    },{
        typeId:1,
        typeName:'待确认',
        count:0
    },{
        typeId:2,
        typeName:'未使用',
        count:0
    },{
        typeId:3,
        typeName:'待评价',
        count:0
    },{
        typeId:4,
        typeName:'已完结',
        count:0
    }
];
module.exports = {
    appointments,
    hospitals,
    states
}