<script setup>
import { ref } from "vue";


import candidateInstance from "@/services/formcandidacy.js";
import router from "@/router"


let form = ref({

  title: "developpeur web",
  entreprise: "Nike",
  description: " Au sein du département Supply Chain, rattaché(e) au Responsable Environnement Restaurant et Filières Durables, le/la chef(fe) de projet travaille quotidiennement avec les équipes internes",
  date: "12/05/2024",
  location: "Paris",

});

async function createCandidacy() {
  console.clear();
  console.log(form.value);
    router.push("/candidacy")


  

  let data = await candidateInstance.create(
    form.value.title,
    form.value.location,
    form.value.entreprise,
    form.value.description,
    form.value.date,
  );
  
}

</script>

<template>
  <h1>Formulaire candidatures</h1>

    <p>Entreprise <input type="text" v-model="form.entreprise" /></p>
    <p>Titre <input type="text" v-model="form.title" /></p>
    <p>Localisation <input type="text" v-model="form.location" /></p>
    <p>Date <input type="date" v-model="form.date" /></p>
    <p>Descriptif du poste <input type="text" v-model="form.description" /></p>
  
              


              <button class="fw-semibold" id="create" @click="createCandidacy">Ajouter</button>
               

 

   

</template>
