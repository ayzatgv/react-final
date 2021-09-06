import { SET_LOGINSTATUS } from '../Actions/types';

const LoginStatus = (state = false, action) => {
    switch (action.type) {
        case SET_LOGINSTATUS: {
            return action.payload;
        }
        default:
            return state;
    }
}

export default LoginStatus;