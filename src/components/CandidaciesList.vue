<script setup>
import router from "@/router";

const props = defineProps({
  candidacy: {
    type: Object,
  },
});

async function updateCandidacy(id) {
  router.push(`/candidacy-single/${id}`);
}
</script>

<template>
  <article class="card candidacy-card">
    <img
      :src="
        candidacy.image && candidacy.image[0]
          ? candidacy.image[0].signedUrl
          : '/src/assets/img/image1.jpg'
      "
      class="card-img-top img-fluid"
      alt=""
    />
    <div class="card-body">
      <p class="card-meta">{{ candidacy.location }} • {{ candidacy.date }}</p>
      <h5 class="card-title fw-bold">{{ candidacy.entreprise }}</h5>
      <p class="card-text">{{ candidacy.title }}</p>

      <button class="btn btn-primary fw-semibold" @click="updateCandidacy(candidacy.Id)">
        Voir infos
      </button>
    </div>
  </article>
</template>
