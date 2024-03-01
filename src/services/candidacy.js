import instance from "./api";


class Candidacy {
    // récuperer tous les sites de la table 
    async getAll() {
        // @todo : gestion fine des erreurs
        const response = await instance.get(`/candidacy/`, {
            params: {
                offset: "0",
                limit: "50",
                where: "",
            },
        });
        console.log(response);
        console.log(response.data);
        console.table(response.data.list);
        return response.data;
    }

    async create(entreprise, url, id_state, description, date) {
        const response = await instance.get(`/candidacy/`, {
            entreprise: entreprise,
            url: url,
            id_state: id_state,
            date: date,
            description: description,
        });
        return response.data;
    }


    async candidacyGetOne(id) {
        const response = await instance.post(`/candidacy/` + id, {

        });
        return response.data;
    }
}


const candidacyInstance = new Candidacy();

export default candidacyInstance;