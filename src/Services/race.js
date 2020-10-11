import { Api } from '../Api/axios';

const RaceService = {
    
    async getRace() {
        return await Api.getInstance().get('/races');
    },

    async createRace(race) {
        return await Api.getInstance().post('/races/create', race);
    },

};

export default RaceService;