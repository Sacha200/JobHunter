<script setup>

import { ref } from "vue";
import userInstance from "@/services/user.js";
import { cryptPassword } from "@/services/utils.js";

import { useStore } from "@/stores/user.js";



// Mettre en forme un formulaire
let form = ref({
  email: "nahmani.sacha@orange.fr",
  password: "77DB14??",
  name: "Sacha",
});
// Message d'erreurs
let success = ref(null);
let error = ref(null);



async function createAccount() {
  console.clear();
  console.log(form.value);
  error.value = null;
  success.value = null;

  let user = await userInstance.exists(form.value.email);
  if (user.list.length > 0) {
    error.value = "User exists";
    return false;
  }

  let data = await userInstance.create(
    form.value.email,
    cryptPassword(form.value.password),
    form.value.name
  );
  success.value = "User created";
}


import router from "@/router"

async function login() {
  error.value = null;
  success.value = null;

  let user = await userInstance.login(
    form.value.email,
    cryptPassword(form.value.password)

  );

  if (user.list.length != 1) {
    error.value = "User non trouvé";
    return false;
  }

  useStore().setUser(user.list[0]); // mettre la valeur du user.
  success.value = "Bonjour " + user.list[0].name;

  router.push("/candidacy")

}

async function logout() {
  useStore().setUser(null);
}




</script>


<template>
  <section id="user">
    <div class="auth-layout">
      <div class="auth-visual">
        <img src="/src/assets/img/img1.png" alt="Illustration JobHunter">
      </div>

      <div class="auth-panel">
        <p class="eyebrow">CRÉEZ VOTRE COMPTE</p>
        <h1 id="welcome">Welcome to Job<strong>Hunter</strong></h1>
        
        <div v-if="error" class="auth-message error">ERREUR : {{ error }}</div>
        <div v-if="success" class="auth-message success">SUCCESS : {{ success }}</div>

        <form class="account auth-form" @submit.prevent>
          <label class="form-field">
            <span>Nom</span>
            <input type="text" v-model="form.name" placeholder="Votre nom" />
          </label>
          <label class="form-field">
            <span>Email</span>
            <input type="email" v-model="form.email" placeholder="ex: sacha@email.com" />
          </label>
          <label class="form-field">
            <span>Mot de passe</span>
            <input type="password" v-model="form.password" placeholder="••••••••" />
          </label>

          <div class="auth-actions">
            <button type="button" class="btn btn-primary fw-semibold" @click="createAccount">
              S'inscrire
            </button>
            <button type="button" class="btn btn-outline fw-semibold" @click="login">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped src="@/assets/styles/login.scss"></style>
