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
    <nav class="navbar navbar-expand-lg d-flex align-items-center header">
      <div class="container-fluid">

        <a class="navbar-brand" href="#">
          <RouterLink class="navbar-brand" to="/">

            JOB<strong>Hunter</strong>
          </RouterLink>
        </a>


        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">


            <!-- <li class="nav-item">
             Login
            </li> -->

          </ul>

        </div>
        <div class="dropdown">
          <button
            class="btn btn-primary profile dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Mon compte
          </button>

          <ul class="dropdown-menu dropdown-menu-end">
            <li v-if="!userInfo">
              <RouterLink class="dropdown-item" to="/login">
                Se connecter / Créer un compte
              </RouterLink>
            </li>
            <li v-else>
              <RouterLink class="dropdown-item" to="/candidacy">
                Mes candidatures
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
  <main class="container">

    <RouterView />
  </main>
</template>
