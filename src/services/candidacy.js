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

    async create(entreprise, url, image, title, location, date, description, releasedAt, suivi) {
        const response = await instance.get(`/candidacy/`, {
            entreprise: entreprise,
            url: url,
            title: title,
            location: location,
            date: date,
            image: image,
            description: description,
            releasedAt: releasedAt,
            suivi: suivi,
            
        });
        return response.data;
    }


    async getOne(id) {
        const response = await instance.get(`/candidacy/` + id, {

        });
        return response.data;
    }
}


const candidacyInstance = new Candidacy();

export default candidacyInstance;