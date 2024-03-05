

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
    <h1>Détails de la candidature</h1>

    <!-- <pre>{{ candidacy }}</pre> -->

    <div class="blog-single gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 ">
                    <article class="article w-80 ms-4">
                        <div class="article-img">
                            <img src="/src/assets/img/image1.jpg" alt="" />
                        </div>
                        <div class="article-title">
                            <h1>{{ candidacy.title}}</h1>
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
.contact-info__wrapper {
    overflow: hidden;
    border-radius: .625rem .625rem 0 0
}

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
/* Blog
---------------------*/
.blog-grid {
    box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
    border-radius: 5px;
    overflow: hidden;
    background: #ffffff;
    margin-top: 15px;
    margin-bottom: 15px;
}

.blog-grid .blog-img {
    position: relative;
}

.blog-grid .blog-img .date {
    position: absolute;
    background: #fc5356;
    color: #ffffff;
    padding: 8px 15px;
    left: 10px;
    top: 10px;
    border-radius: 4px;
}

.blog-grid .blog-img .date span {
    font-size: 22px;
    display: block;
    line-height: 22px;
    font-weight: 700;
}

.blog-grid .blog-img .date label {
    font-size: 14px;
    margin: 0;
}

.blog-grid .blog-info {
    padding: 20px;
}

.blog-grid .blog-info h5 {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 10px;
}

.blog-grid .blog-info h5 a {
    color: #20247b;
}

.blog-grid .blog-info p {
    margin: 0;
}

.blog-grid .blog-info .btn-bar {
    margin-top: 20px;
}


/* Blog Sidebar
-------------------*/


.blog-aside .widget-title h3 {
    font-size: 20px;
    font-weight: 700;
    color: #fc5356;
    margin: 0;
}

.blog-aside .widget-author .media {
    margin-bottom: 15px;
}

.blog-aside .widget-author p {
    font-size: 16px;
    margin: 0;
}

.blog-aside .widget-author .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
}

.blog-aside .post-aside .post-aside-title a {
    font-size: 18px;
    color: #20247b;
    font-weight: 600;
}



.blog-aside .post-aside .post-aside-meta a {
    color: #6F8BA4;
    font-size: 12px;
    text-transform: uppercase;
    display: inline-block;
    margin-right: 10px;
}

.blog-aside .latest-post-aside+.latest-post-aside {
    border-top: 1px solid #eee;
    padding-top: 15px;
    margin-top: 15px;
}





.blog-aside .latest-post-aside .lpa-meta a {
    color: #6F8BA4;
    font-size: 12px;
    text-transform: uppercase;
    display: inline-block;
    margin-right: 10px;
}

.tag-cloud a {
    padding: 4px 15px;
    font-size: 13px;
    color: #ffffff;
    background: #20247b;
    border-radius: 3px;
    margin-right: 4px;
    margin-bottom: 4px;
}

.tag-cloud a:hover {
    background: #fc5356;
}

.blog-single {
    padding-top: 30px;
    padding-bottom: 30px;
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

.article .article-title h6 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 20px;
}

.article .article-title h6 a {
    text-transform: uppercase;
    color: #fc5356;
    border-bottom: 1px solid #fc5356;
}

.article .article-title h2 {
    color: #20247b;
    font-weight: 600;
}

.article .article-title .media {
    padding-top: 15px;
    border-bottom: 1px dashed #ddd;
    padding-bottom: 20px;
}

.article .article-title .media .avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
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






.article .article-content blockquote .blockquote-footer {
    color: #20247b;
    font-size: 16px;
}

.article .article-content blockquote .blockquote-footer cite {
    font-weight: 600;
}

.article .tag-cloud {
    padding-top: 10px;
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
