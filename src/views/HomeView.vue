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
  <h1 class="m-3">Des sites pro <br />pour un<strong> avenir pro.</strong></h1>

  <template v-for="site in websites">
    <WebsitesList :site="site" />
    </template>

    

</template>
