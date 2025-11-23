<script setup>
import { ref } from "vue";
import candidateInstance from "@/services/formcandidacy.js";
import router from "@/router";

let form = ref({
  title: "developpeur web",
  entreprise: "Nike",
  description:
    " Au sein du département Supply Chain, rattaché(e) au Responsable Environnement Restaurant et Filières Durables, le/la chef(fe) de projet travaille quotidiennement avec les équipes internes",
  date: "12/05/2024",
  location: "Paris",
});

async function createCandidacy() {
  console.clear();
  console.log(form.value);
  router.push("/candidacy");

  await candidateInstance.create(
    form.value.title,
    form.value.location,
    form.value.entreprise,
    form.value.description,
    form.value.date
  );
}
</script>

<template>
  <section class="form-page">
    <div class="form-card">
      <p class="eyebrow">NOUVELLE CANDIDATURE</p>
      <h1 class="title_candidacy">Formulaire candidatures</h1>

      <form class="form-grid" @submit.prevent="createCandidacy">
        <label class="form-field">
          <span>Entreprise</span>
          <input
            type="text"
            v-model="form.entreprise"
            placeholder="Nom de l'entreprise"
          />
        </label>
        <label class="form-field">
          <span>Titre</span>
          <input
            type="text"
            v-model="form.title"
            placeholder="Intitulé du poste"
          />
        </label>
        <label class="form-field">
          <span>Localisation</span>
          <input
            type="text"
            v-model="form.location"
            placeholder="Ville / Pays"
          />
        </label>
        <label class="form-field">
          <span>Date</span>
          <input type="date" v-model="form.date" />
        </label>
        <label class="form-field full">
          <span>Descriptif du poste</span>
          <textarea
            v-model="form.description"
            rows="4"
            placeholder="Résumé du poste"
          ></textarea>
        </label>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary fw-semibold">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped src="@/assets/styles/formcandidate.scss"></style>