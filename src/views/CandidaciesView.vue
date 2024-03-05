<script setup>
import { ref, onMounted } from "vue";


import candidacyInstance from "@/services/candidacy.js";
import CandidaciesList from "@/components/CandidaciesList.vue";



const candidacies = ref([]);

import router from "@/router"

async function createCandidacy() {
  router.push("/formcandidacy")

}

async function loadData() {
  let data = await candidacyInstance.getAll();
  candidacies.value = data.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="container-fluid">
    <div class="row g-4">
      <div class="col-4 info_profile">

        <ul class="infos m-auto p-5" id="infos">
          <h3 class="hello">Bonjour <strong>Sacha</strong></h3>
          <li class="list-group-item mt-3" id="item-1"><i class="fas fa-user-circle"
              style="color: white"></i>Suivi candidatures</li>
          <li class="list-group-item"><i class="fas fa-copy"></i>Lettre de motivation</li>
          <li class="list-group-item"><i class="fas fa-search"></i>Mes recherches</li>
          <li class="list-group-item"><i class="fas fa-comment-alt"></i>Les annonces</li>
          <li class="list-group-item"><i class="fas fa-list-ul"></i>Mes infos personnelles</li>
        </ul>
      </div>
      <div class="col-8">
        <h1 class="title_candidacy ">Mes Candidatures</h1>
        <ul class="list-inline link">
          <p class="list-inline-item ">Suivi candidature</p>
          <button class="fw-semibold ms-5 " id="addcandidacy" @click="createCandidacy">Ajouter
            une candidature</button>
        </ul>

        <hr class="border-1 line">
        <p class="onload">En cours</p>

        <div class="container-fluid listcandidacy">



          <template v-for="candidacy in candidacies">
            <CandidaciesList :candidacy="candidacy" />

          </template>
        </div>
      </div>
    </div>
  </div>

</template>

   <style>


  .info_profile {
    margin: initial;
    margin-left: initial;
    margin-left: -22%;
    margin-top: 20%;
  }
#item-1{
  background-color:  #176B87;
  color: rgb(255, 255, 255);
  border-radius: 8px;

}
  i {
    color: #176B87;
    font-size: 25px;
    margin-right: 1rem;


  }

  h3 {
    color: #04364A;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 32px;
    text-align: start;
  }

  .list-group-item {
    padding: 18px;
    margin-right: 10px;
    color: #176B87;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 18px;
    text-align: start;

  }

  #infos {
    border: solid #176B87 2px;
  }

</style>
