import { Api } from '../Api/axios';

const ClasseService = {
    
    async getClasse() {
        return await Api.getInstance().get('/classes');
    },

};

export default ClasseService;