import { combineReducers } from 'redux';
import LoginStatus from './LoginReducer';
import Posts from './PostReducer';
import Categories from './CategoryReducer';

export default combineReducers({
    LoginStatus,
    Posts,
    Categories
});