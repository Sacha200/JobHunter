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


    <div class="card mb-5 siteslist" style="max-width: 800px; height: 200px;">
      <div class="row g-2 text-center   ">
        <div class="col-md-3">
            <RouterLink :to="`/website/${site.id_websites}`">
                <img  :src="site.image[0].signedUrl" class="img-fluid  p-4" id="site_logo" />
            </RouterLink>  
        </div>      
        <div class="col-md-9">
          <div class="card-body text-start">
            <h5 class="card-title">{{ site.title }}</h5>
            <p class="card-text">{{ site.description }}</p>
            <p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#"> voir site</a></p>          </div>
        </div>
      </div>
        </div>

    <!-- <div class="row mb-5">
            <div class="col-7 w-50">
               
            
                </div>
                </div> -->
</template>