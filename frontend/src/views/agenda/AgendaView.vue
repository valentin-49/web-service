<template>
  <div>
      <div style="text-align: center">
          <img class="notConnected_icon" v-show="connected === 'false'" src="../../assets/pictograms/notConnected.svg"
              alt="Pictogramme de point d'exclamation">
          <p class="warning" v-show="connected === 'false'">{{ message }}</p>
          <input v-show="connected === 'false'" class="modal-button-nav" type="button" @click="goHome()" value="PAGE CONNEXION">
      </div>
      <div v-show="connected === 'true'">
          <div class="container">
            <div>
              <h1 id="title">{{ pageTitle.toUpperCase() }}</h1>
            </div>
            <div class="calendar-wrap">
              <div class="overlayBox" @click="goVisitsView()">
                <h2>Monsieur Bouet</h2>
                <div class="overlayInfo">
                  <div class="overlay">
                    <h3>Adresse : 70 ter boulevard guy chouteau , 49300 cholet</h3>
                    <h3>Date RDV : 29/11/2022</h3>
                    <h3>Commercial: Didier</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
      connected: localStorage.getItem("connected"),
      pageTitle: 'agenda',
    }
  },
  methods: {
    goHome() {
      window.location.replace('http://localhost:8080/connexion')
    },
    goVisitsView(){
      this.$router.push('visite')
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1400px;
  margin: 100px auto;
}
.calendar-wrap{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
h2{
  padding: 15px;
  padding-left: 25px;
  padding-right: 25px;
  width: fit-content;
  background: turquoise;
  border-radius: 15px;
  z-index: 1;
}
.overlayBox{
  position: relative;  
}
.overlayInfo{
  position: absolute;
  top: 0;
  padding-top: 75px;
  opacity: 0;
  z-index: 10;
}
.overlayInfo:hover{
  opacity: 1;
  background: none;
  z-index: 10;
}
.overlay{
  z-index: 10;
  background-color: turquoise;
  width: 100%;
  height: fit-content;
  padding: 15px;
  border-radius: 15px;
  border-color: black;
  border-style: groove;
}
</style>
