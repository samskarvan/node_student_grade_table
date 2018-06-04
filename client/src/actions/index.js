import types from './types';
import axios from 'axios';

export function studentData(){
    const response = axios.get('/api/students');
    return{
        type: types.STUDENT_DATA,
        payload: response
    }
}