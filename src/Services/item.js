import { Api } from '../Api/axios';

const ItemService = {
    
    async getItem() {
        return await Api.getInstance().get('/items');
    },

};

export default ItemService;