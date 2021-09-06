import { GET_POST, ADD_POST, EDIT_POST, DELETE_POST } from '../Actions/types';

const initialState = {
    items: []
};

export default function PostReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                items: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case EDIT_POST:
            {
                const index = state.items.findIndex((item) => item.id === action.payload.id);
                const newArray = [...state.items];
                newArray[index] = action.payload;
                return {
                    ...state,
                    items: newArray,
                }
            }
        case DELETE_POST:
            return {
                items: state.items.filter((item) => item.id !== action.payload)
            }
        default:
            return state;
    }
}