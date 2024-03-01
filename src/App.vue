<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useStore } from "@/stores/user.js";
import { computed } from "vue";
const userInfo = computed (() =>{
  return useStore().getUser;
})
</script>

<template>
  <header>
    
    <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="">
          <RouterLink class="navbar-brand" to="/">Home</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About</RouterLink>

              </li>
              <li class="nav-item">
                <RouterLink v-if="userInfo == null" to="/login">Login</RouterLink>
                <span v-else>{{ userInfo.name }}</span>
              </li>

            </ul>
            
      </div>
    </div>
  </nav>
  </header>
  <main class="container">

  <RouterView/>
  </main>
</template>
