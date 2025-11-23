<script setup>
import { ref, onMounted } from "vue";
import websiteInstance from "@/services/website.js";
import WebsitesList from "@/components/WebsitesList.vue";




const websites = ref([]); 


async function loadData() {
  let data = await websiteInstance.getAll();
  websites.value = data.list;

  
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <section class="websites-section">
    <div class="section-header">
      <p class="eyebrow">RESSOURCES UTILES</p>
      <h1>
        Des sites pro<br />
        pour un <strong>avenir pro.</strong>
      </h1>
    </div>

    <div class="websites-grid">
      <template v-for="site in websites" :key="site.id_websites">
        <WebsitesList :site="site" />
      </template>
    </div>
  </section>
</template>

<style scoped src="@/assets/styles/home.scss"></style>
