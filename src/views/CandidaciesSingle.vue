<script setup>
import { ref, onMounted } from "vue";
import LetterInstance from "@/services/lettercandidacy.js";
import candidacyInstance from "@/services/candidacy.js";
import router from "@/router";

const form = ref({
  nameuser: "Sacha Nahmani",
  mailuser: "nahmani.sacha@2.fr",
  linkedin: "https://www.linkedin.com/in/sacha-nahmani-204108252/",
  contentletter:
    "Je souhaiterai travailler pour cette entreprise, car elle travaille dans un domaine qui m’intéresse tout particulièrement à travers des valeurs qui lui ont permise d’être une entreprise ouverte d’esprit.",
});

async function updateLetterCandidacy() {
  console.clear();
  console.log(form.value);

  await LetterInstance.create(
    form.value.nameuser,
    form.value.mailuser,
    form.value.linkedin,
    form.value.contentletter
  );

  router.push("/candidacy");
}

const candidacy = ref([]);
const idCandidacies = ref(router.currentRoute.value.params.idCandidacies);

onMounted(async () => {
  const result = await candidacyInstance.getOne(idCandidacies.value);
  candidacy.value = result;
});
</script>

<template>
  <section class="candidacy-single">
    <div class="container">
      <div class="single-grid">
        <article class="article">
          <div class="article-img">
            <img
              :src="
                candidacy.image && candidacy.image[0]
                  ? candidacy.image[0].signedUrl
                  : '/src/assets/img/image1.jpg'
              "
              alt="Visuel de la candidature"
            />
          </div>
          <div class="article-title">
            <p class="eyebrow">FICHE CANDIDATURE</p>
            <h2>{{ candidacy.title }}</h2>
          </div>
          <div class="article-text">
            <p class="fw-bold">Descriptif du poste</p>
            <p class="description">{{ candidacy.description }}</p>
            <div class="job-meta">
              <div>
                <p class="fw-bold mb-1">Envoyée le</p>
                <p class="date">{{ candidacy.releasedAt }}</p>
              </div>
              <div>
                <p class="fw-bold mb-1">État</p>
                <p class="follow">{{ candidacy.suivi || "Non renseigné" }}</p>
              </div>
            </div>
          </div>
        </article>

        <div class="letter-card contact-form__wrapper">
          <p class="fw-bold letter-title">
            <i class="fas fa-copy"></i>Rédigez votre lettre de motivation
          </p>
          <form class="contact-form">
            <div class="form-grid">
              <label class="form-field full">
                <span>Nom du candidat</span>
                <input
                  type="text"
                  v-model="form.nameuser"
                  class="form-control"
                  placeholder="Votre nom complet"
                />
              </label>
              <label class="form-field">
                <span>Mail</span>
                <input
                  type="email"
                  v-model="form.mailuser"
                  class="form-control"
                  placeholder="Votre email"
                />
              </label>
              <label class="form-field">
                <span>Linkedin</span>
                <input
                  type="url"
                  v-model="form.linkedin"
                  class="form-control"
                  placeholder="Lien Linkedin"
                />
              </label>
              <label class="form-field full">
                <span>Contenu de la lettre</span>
                <textarea
                  class="form-control"
                  v-model="form.contentletter"
                  rows="4"
                  placeholder="Exprimez ce qui vous motive..."
                ></textarea>
              </label>
            </div>

            <button
              type="button"
              class="btn btn-primary fw-semibold"
              @click="updateLetterCandidacy"
            >
              Mettre à jour
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/assets/styles/candidaciessingle.scss"></style>


