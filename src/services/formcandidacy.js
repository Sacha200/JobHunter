import instance from "./api.js";

class Formcandidacy {
    // méthodes nécessaires pour la classe utilisateur avec les données attribuées pour chaque fonctions

    async create(title, email, entreprise, description, date) { 
        const response = await instance.post('/candidacy/', {
            title: title,
            email: email, 
            entreprise: entreprise,
            description: description, 
            date: date,
        });
        console.log(response)
        return response.data;
     }
    
}

const candidateInstance = new Formcandidacy ();

export default candidateInstance;