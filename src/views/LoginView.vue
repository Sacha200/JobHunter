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
  <div class="container-fluid d-flex">
    <div class="row">

      <div class="col-6 left">
        <img src="/src/assets/img/img1.png" alt="">
      </div>

      <div class="col-6">
        <div class="right px-3">


          <h1 id="welcome">Welcome to Job<strong class="fw-bold">Hunter</strong></h1>
          <h2 class="fs-6 fw-semibold">Créez votre compte</h2>
          <p v-if="error">ERREUR : {{ error }}</p>
          <p v-if="success">SUCCESS : {{ success }}</p>

          <div class="account">
            <p>nom <input type="text" v-model="form.name" /></p>
            <p>email <input type="text" v-model="form.email" /></p>
            <p>password <input type="password" v-model="form.password" /></p>


            <button class="fw-semibold" id="create" @click="createAccount">S'inscrire</button>
              <button class="fw-semibold" id="login" @click="login">Se connecter</button>

              
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style></style>
