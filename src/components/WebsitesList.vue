<script setup>

import { RouterLink } from 'vue-router'



const props = defineProps({


    site: {
        type: Object,
    }



}); </script>

<style scoped></style>

<template>
    <!-- <pre>{{ site }}</pre> -->


    <div class="card mb-3" style="max-width: 800px;">
      <div class="row g-0">
        <div class="col-md-3">
            <RouterLink :to="`/website/${site.id_websites}`">
                <img :src="site.image[0].signedUrl" class="img-fluid" />
            </RouterLink>  
        </div>      
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title">{{ site.title }}</h5>
            <p class="card-text">{{ site.description }}</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
        </div>

    <!-- <div class="row mb-5">
            <div class="col-7 w-50">
               
            
                </div>
                </div> -->
</template>