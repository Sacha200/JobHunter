import instance from "./api";


class Website {
    // récuperer tous les sites de la table 
    async getAll() {
        // @todo : gestion fine des erreurs
        const response = await instance.get(`/website/`, {
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

    async create(title, url, image, description) {
        const response = await instance.get(`/website/`, {
            title: title,
            url: url,
            image: image,
            description: description,
        });
        return response.data;
    }


    
}


const websiteInstance = new Website();

export default websiteInstance;