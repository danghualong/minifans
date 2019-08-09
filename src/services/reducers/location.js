export default function (state = {
    positioningBy: "",
    cityName: "请选择城市",
    cityId: "0",
    hospitalName: "",
    hospitalId: "0",
    distance: "",
}, action) {
    switch (action.type) {
        case 'locationUpdate': {
            state = {
                ...state,
                ...action.payload,
            };
            return state;
        }
        case 'selectedCityUpdate': {
            state = {
                ...state,
                ...action.payload,
            };
            return state;
        }
        case 'selectedHospitalUpdate': {
            state = {
                ...state,
                ...action.payload,
            };
            return state;
        }
        default: {
            return state;
        }
    }
}
