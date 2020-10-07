import { Api } from '../Api/axios';

const RaceService = {
    
    async getRace() {
        return await Api.getInstance().get('/races');
    },

};

export default RaceService;