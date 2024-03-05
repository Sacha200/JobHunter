<script setup>




import router from "@/router"



async function updateCandidacy(id) {
router.push(`/candidacy-single/${id}`)

}



const props = defineProps({

    candidacy: {
        type: Object,
    }
}); 




</script>

<style scoped></style>

<template>
    <!-- <pre>{{ candidacy }}</pre>  -->


    <div class="card" style="width: 20rem;">
        <img :src="candidacy.image[0].signedUrl" class="card-img-top img-fluid">
        <div class="card-body">
            <h5 class="card-title fw-bold">{{ candidacy.entreprise }}</h5>
            <p class="card-text">{{ candidacy.title }}</p>
            <p class="card-text">{{ candidacy.location }}</p>
            <p class="card-text">{{ candidacy.date }}</p>

            <button class="fw-semibold btn" id="candidacies"
                @click="updateCandidacy(candidacy.Id)">voir infos</button>
        </div>
    </div>








</template>