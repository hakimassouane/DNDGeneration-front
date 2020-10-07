import { Api } from '../Api/axios';

const CharacterService = {

    async createCharacter(character) {
        return await Api.getInstance().post('/characters/create', character);
    },

};

export default CharacterService;