export default function(state={
    name: 'Genuifx',
    email: 'genuifx@gmail.com',
}, action) {
    switch (action.type) {
        case 'userInfoUpdate': {
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
