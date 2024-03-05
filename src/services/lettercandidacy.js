import instance from "./api.js";

class LetterCandidacy {

    async create(nameuser, mailuser, linkedin, contentletter) { 
        const response = await instance.post('/candidacy/', {
            nameuser: nameuser,
            mailuser: mailuser, 
            linkedin: linkedin,
            contentletter: contentletter, 
        });
        console.log(response)
        return response.data;
     }
    
}

const LetterInstance = new LetterCandidacy ();

export default LetterInstance;