<script setup>


import router from "@/router"

async function updateCandidacy() {
router.push("/formcandidacy")

}



const props = defineProps({

    candidacy: {
        type: Object,
    }
}); 



</script>

<style scoped></style>

<template>
    <pre>{{ candidacy }}</pre>
    

    
                


                <button class="fw-semibold" id="candidacies" @click="updateCandidacy">Modifier une candidature</button>

              

    
</template>