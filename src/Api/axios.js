import axios from 'axios';

export class Api {
    static getInstance() {
        return axios.create();
    }
}