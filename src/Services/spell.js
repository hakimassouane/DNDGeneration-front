import { Api } from '../Api/axios';

const SpellService = {

    async createSpell(spell) {
        return await Api.getInstance().post('/spells/create', spell);
    },

};

export default SpellService;