<template>
  <div style="text-align: center">
    <p class="title" v-show="connected === 'true'">{{ pageTitle.toUpperCase() }}</p>
    <img class="notConnected_icon" v-show="connected === 'false'" src="../assets/pictograms/notConnected.svg"
        alt="Pictogramme de point d'exclamation">
    <p class="warning" v-show="connected === 'false'">{{ message }}</p>
    <input v-show="connected === 'false'" class="modal-button-nav" type="button" @click="goHome()" value="PAGE CONNEXION">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
      connected: localStorage.getItem("connected"),
      pageTitle: 'devis & factures'
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
.title {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}

p{
  margin-bottom: 120px;
}

.warning {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: red;
}

.notConnected_icon {
  margin-top: 10%;
  margin-bottom: 2%;
  height: 70px;
}
</style>