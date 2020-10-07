import { Api } from '../Api/axios';

const BackgroundService = {

    async createBackground(background) {
        return await Api.getInstance().post('/backgrounds/create', background);
    },

    async getBackground() {
        return await Api.getInstance().get('/backgrounds');
    },

};

export default BackgroundService;