import { defineStore } from "pinia";

export const useStore = defineStore("store", {
    // définir des "etats"
    state: () => ({ user : null}),

    //accesseur (getter)
    getters: {
        getUser() {
            return this.user;
        },
    },
    // mutateur (setter)
    actions: {
        setUser(user){
            this.user = user;
        },
    },
});