import types from './types';
import axios from 'axios';

const BASE_URL ='http://api.reactprototypes.com';
const API_KEY = '?key=c318samskarvan';

export function getListData(){
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`).then();

    return{
     type: types.GET_LIST_DATA,
     payload: response
    }
}

export function addtoDoItem(item){
    const response =axios.post(`${BASE_URL}/todos${API_KEY}`,item);
    return{
        type: types.ADD_ITEM,
        payload: response
       }
}

export function getSingleItem(id){
    const response = axios.get(`${BASE_URL}/todos/${id+API_KEY}`,id);
    return{
        type: types.GET_SINGLE_ITEM,
        payload: response
       }
}

// To toggle complete of an item:
// axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

// To Delete an item:
// axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);