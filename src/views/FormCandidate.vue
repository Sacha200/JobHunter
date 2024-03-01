<script setup>
import { ref } from "vue";


import candidateInstance from "@/services/formcandidacy.js";
import router from "@/router"


let form = ref({

  title: "developpeur web",
  email: "123@245.fr",
  entreprise: "Nike",
  description: " Stage de 6 mois pour un Web developpeur full stack",
  date: "12/05/2024",

});

async function createCandidacy() {
  console.clear();
  console.log(form.value);
    router.push("/candidacy")


  

  let data = await candidateInstance.create(
    form.value.title,
    form.value.email,
    form.value.entreprise,
    form.value.description,
    form.value.date,
  );
  
}

</script>

<template>
  <h1>Formulaire candidatures</h1>

    <p>titre <input type="text" v-model="form.title" /></p>
    <p>email <input type="text" v-model="form.email" /></p>
    <p>entreprise <input type="text" v-model="form.entreprise" /></p>
    <p>description <input type="text" v-model="form.description" /></p>
    <p>date <input type="date" v-model="form.date" /></p>
  
              


              <button class="fw-semibold" id="create" @click="createCandidacy">Ajouter</button>
               

 

   

</template>
