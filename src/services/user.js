import instance from "./api.js";

class User {
    // méthodes nécessaires pour la classe utilisateur avec les données attribuées pour chaque fonctions
    async exists(email) { 
        const response = await instance.get(`/user/`, {
            params: {
                where: `(email,eq,${email})`,
            }
        });     
        return response.data;

    }
    async login(email, password) {
        // verifier si l'email correspond ainsi que le mot de passe 
        const response = await instance.get(`/user/`, {
            params: {
                where: `(email,eq,${email})~and(password,eq,${password})`,
            }
        });
        return response.data;

     }

    async create(email, password, name) { 
        const response = await instance.post('/user/', {
            email: email, 
            password: password,
            name: name, 
        });
        return response.data;
     }
    
}

const userInstance = new User ();

export default userInstance;