import axios from 'axios';
import {
    BANNER,

} from './types';


export function banner() { // 
    const request = axios.get(`http://ec2-3-38-93-94.ap-northeast-2.compute.amazonaws.com:19228/v1/api/test/event/do`)
        .then(response => response.data.data);

    return {
        type: BANNER,
        payload: request
    }
}
