import { Api } from '../Api/axios';

const ClasseService = {
    
    async getClasse() {
        return await Api.getInstance().get('/classes');
    },

    async createClasse(classe) {
        return await Api.getInstance().post('/classes/create', classe);
    },

};

export default ClasseService;