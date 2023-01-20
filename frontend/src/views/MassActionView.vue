<template>
  <p class="title" v-show="connected === 'true'">{{ pageTitle.toUpperCase() }}</p>
  <img class="notConnected_icon" v-show="connected === 'false'" src="../assets/pictograms/notConnected.svg"
       alt="Pictogramme de point d'exclamation">
  <p class="warning" v-show="connected === 'false'">{{ message }}</p>
  <input v-show="connected === 'false'" class="modal-button-nav" type="button" @click="goHome()" value="PAGE CONNEXION">
</template>

<script>
export default {
  data() {
    return {
      message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
      connected: localStorage.getItem("connected"),
      pageTitle: 'action en masse'
    }
  },
  methods: {
    goHome() {
      window.location.replace('http://localhost:8080/connexion')
    }
  }
}
</script>

<style>

</style>