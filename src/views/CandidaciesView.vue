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
  // Filtrer les candidatures "brouillon" / placeholders (ex. cartes EDF en trop)
  let cleaned = data.list.filter((item) => {
    const name = (item.entreprise || "").trim();
    return name && name !== "." && name.toLowerCase() !== "xxxx";
  });

  // Retirer également les 3 dernières entrées (données de démo en trop)
  if (cleaned.length > 3) {
    cleaned = cleaned.slice(0, cleaned.length - 3);
  }

  candidacies.value = cleaned;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <section class="dashboard-grid">
    <aside class="profile-panel info_profile">
      <div class="profile-card infos" id="infos">
        <p class="eyebrow">TABLEAU DE BORD</p>
        <h3 class="hello">Bonjour <strong>Sacha</strong></h3>
        <ul class="profile-menu">
          <li class="active"><i class="fas fa-user-circle"></i>Suivi candidatures</li>
          <li><i class="fas fa-copy"></i>Lettre de motivation</li>
          <li><i class="fas fa-search"></i>Mes recherches</li>
          <li><i class="fas fa-comment-alt"></i>Les annonces</li>
          <li><i class="fas fa-list-ul"></i>Mes infos personnelles</li>
        </ul>
      </div>
    </aside>

    <div class="candidacy-panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">SUIVI CANDIDATURES</p>
          <h1 class="title_candidacy">Mes candidatures</h1>
        </div>
        <button class="btn btn-primary" id="addcandidacy" @click="createCandidacy">
          Ajouter une candidature
        </button>
      </div>

      <p class="status-chip onload">En cours</p>

      <div class="listcandidacy">
        <template v-for="candidacy in candidacies" :key="candidacy.Id">
          <CandidaciesList :candidacy="candidacy" />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/assets/styles/candidacies.scss"></style>
