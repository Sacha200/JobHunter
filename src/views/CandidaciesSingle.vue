

<script setup>
import { ref, onMounted } from "vue";
import LetterInstance from "@/services/lettercandidacy.js";

import candidacyInstance from "@/services/candidacy.js";

import router from "@/router"



let form =ref({
    nameuser: "Sacha Nahmani",
    mailuser: "nahmani.sacha@2.fr",
    linkedin: "https://www.linkedin.com/in/sacha-nahmani-204108252/",
    contentletter: "Je souhaiterai travailler pour cette entreprise, car elle travaille dans un domaine qui m’intéresse tout particulièrement à travers des valeurs qui lui ont permise d’être une entreprise ouverte d’esprit."


})

async function updateLetterCandidacy() {

    console.clear();
    console.log(form.value);
    router.push("/candidacy")

    let data = await LetterInstance.create(
        form.value.nameuser,
        form.value.mailuser,
        form.value.linkedin,
        form.value.contentletter,
    );

}


let candidacy = ref([]);

const idCandidacies = ref(router.currentRoute.value.params.idCandidacies);
console.log(idCandidacies.value);

onMounted(async () => {
    let result = await candidacyInstance.getOne(idCandidacies.value);
    console.log(result);
    candidacy.value = result;
});
</script>

<template>
    

    <!-- <pre>{{ candidacy }}</pre> -->

    <div class="blog-single gray-bg mt-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 ">
                    <article class="article w-80 ms-4">
                        <div class="article-img">
                            <img src="/src/assets/img/image1.jpg" alt="" />
                        </div>
                        <div class="article-title">
                            <h2>{{ candidacy.title}}</h2>
                        </div>
                        <div class="article-text">
                            <p class="fw-bold">Descriptif du poste</p>
                            <p class="description">{{ candidacy.description }}</p>
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <p class="fw-bold mb-3">Envoyée le :</p>
                                </li>
                                <li class="list-inline-item">
                                    <p class="date">{{ candidacy.releasedAt }}</p>
                                </li>

                                <ul class="list-inline">
                                    <li class="list-inline-item">
                                        <p class="fw-bold mb-3">Etat :</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="follow">{{ candidacy.suivi }}</p>
                                    </li>
                                </ul>
                            </ul>

                        </div>

                    </article>
                    <div class="col contact-form__wrapper p-5 order-lg-1">
                        <p class="fw-bold"><i class="fas fa-copy"></i>Rédigez votre lettre de motivation</p>
                        <form action="#" class="contact-form form-validate" novalidate="novalidate">
                            <div class="row account">
                                <div class="col-sm-12 mb-3">
                                    <div class="form-group w-100">
                                        <label class="required-field" for="firstName">Nom du candidat</label>
                                        <input type="text" v-model="form.nameuser" class="form-control" id="firstName"
                                            name="firstName" placeholder="votre nom complet">
                                    </div>
                                </div>



                                <div class="col-sm-6 mb-3">
                                    <div class="form-group">
                                        <label class="required-field" for="email">Mail</label>
                                        <input type="text" v-model="form.email" class="form-control" id="email"
                                            name="email" placeholder="votre email">
                                    </div>
                                </div>

                                <div class="col-sm-6 mb-3">
                                    <div class="form-group">
                                        <label for="phone">Linkedin</label>
                                        <input type="url" v-model="form.linkedin" class="form-control" id="phone"
                                            name="phone" placeholder="">
                                    </div>
                                </div>

                                <div class="col-sm-12 mb-3">
                                    <div class="form-group">

                                        <label class="required-field" for="message">Contenu de la lettre</label>
                                        <textarea class="form-control" v-model="form.contentletter" id="message"
                                            name="message" rows="4"
                                            placeholder="Exprimez librement sur ce qui vous motive....."></textarea>

                                    </div>
                                </div>

                                <div class="col-sm-12 mb-3">
                                    <button class="fw-semibold" id="candidacies" @click="updateLetterCandidacy">Mettre à
                                        jour</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>




</template>

<style>


.blog-listing {
    padding-top: 30px;
    padding-bottom: 30px;
}

.gray-bg {
    background-color: #D2EBF3;
}

#candidacies {
    color: #f4f4f4;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    border-radius: 25px;
    border-style: none;
    background-color: #176B87;
padding-top: 10px;
    padding-right: 16px;
    padding-bottom: 10px;
    padding-left: 16px;
}

.form-control{
    background-color: transparent;
    border: solid #176B87 2px;
}

.description {
    color: #04364A;
    font-size: 16px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
}
.date {
    color: #04364A;
    font-size: 16px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
}

.follow {
    color: #27501B;
    border: solid #27501B 1px;
    background-color: #B1CEBC;
    padding-top: 5px;
    padding-right: 16px;
    padding-bottom: 5px;
    padding-left: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}
p{
    color: #176B87;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
}






.article {
    box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
    border-radius: 5px;
    overflow: hidden;
    background: #ffffff;
    padding: 15px;
    margin: 15px 0 30px;
}

.article .article-title {
    padding: 15px 0 20px;
}





.article .article-title h2 {
    color: #04364A;
    font-weight: 600;
}

.article .article-title .media {
    padding-top: 15px;
    border-bottom: 1px dashed #ddd;
    padding-bottom: 20px;
}



.article .article-title .media .media-body {
    padding-left: 8px;
}

.article .article-title .media .media-body label {
    font-weight: 600;
    color: #fc5356;
    margin: 0;
}

.article .article-title .media .media-body span {
    display: block;
    font-size: 12px;
}

img {
    width: 100%;
    height: 30vh;
}

img {
    vertical-align: middle;
    border-style: none;
}


</style>
