import { Api } from '../Api/axios';

const BackgroundService = {

    async createBackground(background) {
        return await Api.getInstance().post('/backgrounds/create', background);
    },
};

export default BackgroundService;