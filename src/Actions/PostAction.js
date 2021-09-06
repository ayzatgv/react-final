import { GET_POST, ADD_POST, EDIT_POST, DELETE_POST } from './types';
import api from '../api';
import { Link } from 'react-router-dom';

<Link id='GoToPost' style={{ display: 'none' }} to="/post">a</Link>

export const getPost = () => dispatch => {
    api.get('Posts')
        .then(res => {
            dispatch({
                type: GET_POST,
                payload: res.data.data.results
            })
        })
        .catch(error => {
            console.log(error);
        });
};

export const addPost = data => dispatch => {
    api.post('posts', data)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data.data
            });
            document.getElementById('GoToPost').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const editPost = data => dispatch => {
    api.put(`posts`, data)
        .then(res => {
            dispatch({
                type: EDIT_POST,
                payload: res.data.data
            })
            document.getElementById('GoToPost').click();
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};

export const deletePost = id => dispatch => {
    api.delete(`posts/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: id
            })
        })
        .catch(error => {
            alert(error.response.data.Message)
        });
};