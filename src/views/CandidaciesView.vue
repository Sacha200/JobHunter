<script setup>
import { ref, onMounted } from "vue";


import candidacyInstance from "@/services/candidacy.js";
import CandidaciesList from "@/components/CandidaciesList.vue";



const candidacies = ref([]);

async function createCandidacy() {
  

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
  <h1>Mes Candidatures</h1>

   <button class="fw-semibold" id="candidacies" @click="createCandidacy">Ajouter une candidature</button> 

    <template v-for="candidacy in candidacies">
      <CandidaciesList :candidacy="candidacy" />

  </template>
</template>
