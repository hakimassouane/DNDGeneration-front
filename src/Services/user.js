import { Api } from '../Api/axios';

const UserService = {

    async logUser(email, password) {
        /*const valideEmailType = this.validEmailType(email);
        if (!valideEmailType) {
            throw new Error('Email is not valid');
        }
        const valideEmailAndPasswod = this.validEmailAndPassword(email, password);
        if (valideEmailAndPasswod) {*/
            return await Api.getInstance().post('/users/login', { email, password });
       /* }
        throw new Error('Email and password is required!');*/
    },

    async createUser(user) {
        /*const validProperty = user.validProperty();
        if (!validProperty) {
            throw new Error('Tous les champs sont obligatoires!');
        }
        const valideEmailType = this.validEmailType(user.email);
        if (valideEmailType) {*/
            return await Api.getInstance().post('/users/register', user);
        /*}
        throw new Error('Email is not valid');*/
    },

};

export default UserService;