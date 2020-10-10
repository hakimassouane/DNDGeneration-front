import { Api } from '../Api/axios';

const CharacterService = {

    async createCharacter(character) {
        return await Api.getInstance().post('/characters/create', character);
    },

    async getCharacter(id) {
        return await Api.getInstance().get('/characters/'+id)
    },

};

export default CharacterService;