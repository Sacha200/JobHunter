<script setup>

import { RouterLink } from 'vue-router'



const props = defineProps({


    site: {
        type: Object,
    }



}); </script>

<style scoped></style>

<template>
    <article class="card website-card mb-4 siteslist">
      <div class="site-logo">
        <RouterLink :to="`/website/${site.id_websites}`">
          <img :src="site.image[0].signedUrl" class="img-fluid" alt="" />
        </RouterLink>
      </div>

      <div class="card-body text-start">
        <h5 class="card-title">{{ site.title }}</h5>
        <p class="card-text">{{ site.description }}</p>
        <a class="card-link" :href="site.url || '#'" target="_blank" rel="noopener">voir site</a>
      </div>
    </article>
</template>