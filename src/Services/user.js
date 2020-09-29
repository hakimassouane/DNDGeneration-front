import { Api } from '../Api/axios';

const UserService = {

    async logUser(email, password) {
        return await Api.getInstance()
        .post('/users/login', { email, password })
    },

    async createUser(user) {
        return await Api.getInstance().post('/users/register', user);
    },

};

export default UserService;