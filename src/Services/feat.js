import { Api } from '../Api/axios';

const FeatService = {

    async createFeat(feat) {
        return await Api.getInstance().post('/feats/create', feat);
    },

};

export default FeatService;