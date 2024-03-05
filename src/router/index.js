import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CandidaciesView from '../views/CandidaciesView.vue'
import FormCandidate from '../views/FormCandidate.vue'
import CandidaciesSingle from '../views/CandidaciesSingle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: "/login",
      name: "login",
      component: LoginView
    }, 
    
    {
      path: "/candidacy",
      name: "candidacy",
      component: CandidaciesView
    }, 
    
    {
      path: "/candidacy-single/:idCandidacies",
      name: "candidacy-single",
      component: CandidaciesSingle,
    },

    {
      path: "/formcandidacy",
      name: "formcandidacy",
      component: FormCandidate
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }

    
  ]
})

export default router
