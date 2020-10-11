import { Api } from '../Api/axios';

const ItemService = {
    
    async getItem() {
        return await Api.getInstance().get('/items');
    },

    async createItem(item) {
        return await Api.getInstance().post('/items/create', item);
    },

};

export default ItemService;