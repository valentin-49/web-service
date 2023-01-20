<template>
    <div>
      <div style="text-align: center">
          <img class="notConnected_icon" v-show="connected === 'false'" src="@/assets/pictograms/notConnected.svg"
              alt="Pictogramme de point d'exclamation">
          <p class="warning" v-show="connected === 'false'">{{ message }}</p>
          <input v-show="connected === 'false'" class="modal-button-nav" type="button" @click="goHome()" value="PAGE CONNEXION">
      </div>
      <div v-show="connected === 'true'">
        <div v-show="IsAdmin == 'true'">
          <div class="navbar">
            <div class="picto" >
              <img src="@/assets/pictograms/menu/preference.svg" alt="Pictogramme des devis et facturations">
            </div>
            <h1 id="title">{{ pageTitle.toUpperCase() }}</h1>
            <form id="selectViewAdmin" onsubmit="return false;">
              <div class="navbar_item">
                <div>
                  <input type="radio" id="info" class="radio_hide" value="info" v-model="openComponent">
                  <label v-if="openComponent != 'info'" class="radio_label" for="info">{{ info.toUpperCase() }}</label>
                  <label v-else class="radio_label" name="colored">{{ info.toUpperCase() }}</label>
                </div>
                <div>
                  <input type="radio" id="visits" class="radio_hide" value="visits" v-model="openComponent"> 
                  <label v-if="openComponent != 'visits'" class="radio_label" for="visits">{{ visits.toUpperCase() }}</label>
                  <label v-else class="radio_label" name="colored">{{ visits.toUpperCase() }}</label>
                </div>
                <div>
                  <input type="radio" id="devis" class="radio_hide" value="devis" v-model="openComponent">
                  <label v-if="openComponent != 'devis'" class="radio_label" for="devis">{{ devis.toUpperCase() }}</label>
                  <label v-else class="radio_label" name="colored">{{ devis.toUpperCase() }}</label>
                </div>
              </div> 
            </form>
          </div>
          <div class="componentContainer">
              <div v-if="openComponent == 'info'" class="boxBody">
                <InfoView />
              </div>
              <div v-if="openComponent == 'visits'" class="boxBody">
                <StartVisitsView />
              </div>
              <div v-if="openComponent == 'devis'" class="boxBody">
                <Devis />
              </div>
          </div>
        </div>
        <div v-show="IsAdmin == 'false'">
          <div id="container_header">
                <h1 id="title">{{ pageTitle.toUpperCase() }}</h1>
          </div>
          <div>
            <h1 style="text-align: center; color: black">Vous n'avez pas les droits d'accés</h1>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import InfoView from "@/components/visits/VisitInfoComponent.vue"
import StartVisitsView from "@/components/visits/StartVisitComponent.vue"
import Devis from "@/components/visits/DevisVisitComponent.vue"

export default {
  components: {
    InfoView,
    StartVisitsView,
    Devis
  },
  data() {
    return {
      message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
      connected: localStorage.getItem("connected"),
      pageTitle: 'Visites',

      IsAdmin : 'true', //super variable qui permettra de savoir si l'user est un admin ou un collaborateur (IsAdmin: localStorage.getItem("IsAdmin"))!//

      openComponent : 'info',

      info: 'Info Client',
      visits: 'Démarrer Visites',
      devis: 'Devis',
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>
.navbar{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 65px;
  background: #FFFFFF;
  margin-top: 106px;
  align-items: center;
}
.picto{
  scale: 1.6;
  margin-left: 5%;
  margin-right: 1%;
}
.navbar_item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 50%;
}
.radio_label{
  display: flex;
  width: 150px;
  justify-content: center;
  background: none;
  padding: 12px 20px 12px 20px;
  margin: 0 10px 0 10px;
  cursor: pointer;
  align-items: center;
  border-radius: 5px;
  transition: 0.3s;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  color: #000000;
}
.radio_label[name="colored"]{
  background: #E2E4E8;
}
.radio_label:hover{
  background: #E2E4E8;
}
.boxBody{
  width: 100%;
  height: fit-content;
  margin-top: 40px;
}
.componentContainer{
    width: 90%;
    max-width: 1400px;
    margin: 50px auto;
}
@media screen and (max-width: 1000px) { 
  .navbar{
    overflow-x: scroll;
  }
  .navbar_item{
    margin: 0;
  }
  #title{
    display: none;
  }
}
</style>