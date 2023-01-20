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
                  <input type="radio" id="organisation" class="radio_hide" value="organisation" v-model="openComponent">
                  <label v-if="openComponent != 'organisation'" class="radio_label" for="organisation">{{ organisation.toUpperCase() }}</label>
                  <label v-else class="radio_label" name="colored">{{ organisation.toUpperCase() }}</label>
                </div>
                <div>
                  <input type="radio" id="collaborators" class="radio_hide" value="collaborators" v-model="openComponent"> 
                  <label v-if="openComponent != 'collaborators'" class="radio_label" for="collaborators">{{ collaborateur.toUpperCase() }}</label>
                  <label v-else class="radio_label" name="colored">{{ collaborateur.toUpperCase() }}</label>
                </div>
                <div>
                  <input type="radio" id="modules" class="radio_hide" value="modules" v-model="openComponent">
                  <label v-if="openComponent != 'modules'" class="radio_label" for="modules">{{ modules.toUpperCase() }}</label>
                  <label v-else class="radio_label" name="colored">{{ modules.toUpperCase() }}</label>
                </div>
                <div>
                  <input type="radio" id="integration" class="radio_hide" value="integration" v-model="openComponent">
                  <label v-if="openComponent != 'integration'" class="radio_label" for="integration">{{ integration.toUpperCase() }}</label>
                  <label v-else class="radio_label" name="colored">{{ integration.toUpperCase() }}</label>
                </div>
                <div>
                  <input type="radio" id="bills" class="radio_hide" value="bills" v-model="openComponent">
                  <label v-if="openComponent != 'bills'" class="radio_label" for="bills">{{ bills.toUpperCase() }}</label>
                  <label v-else class="radio_label" name="colored">{{ bills.toUpperCase() }}</label>
                </div>
                <div>
                  <input type="radio" id="params" class="radio_hide" value="params" v-model="openComponent">
                  <label v-if="openComponent != 'params'" class="radio_label" for="params">{{ params.toUpperCase() }}</label>
                  <label v-else class="radio_label" name="colored">{{ params.toUpperCase() }}</label>
                </div>
              </div> 
            </form>
          </div>
          <div class="backOfficeComponent">
              <div v-if="openComponent == 'organisation'" class="boxBody">
                <OrganisationView />
              </div>
              <div v-if="openComponent == 'collaborators'" class="boxBody">
                <CollaboratorsView />
              </div>
              <div v-if="openComponent == 'modules'" class="boxBody">
                <ModulesView />
              </div>
              <div v-if="openComponent == 'integration'" class="boxBody">
                <IntegrationView />
              </div>
              <div v-if="openComponent == 'params'" class="boxBody">
                <ParametresView />
              </div>
              <div v-if="openComponent == 'bills'" class="boxBody">
                <BillsView />
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
import OrganisationView from "@/components/back_office/organisation/OrganisationComponent.vue";
import CollaboratorsView from "@/components/back_office/collaborators/CollaboratorsComponent.vue";
import ModulesView from "@/components/back_office/moduls/ModulsComponent.vue";
import IntegrationView from "@/components/back_office/integrations/IntegrationComponent.vue"
import BillsView from "@/components/back_office/bills/BillsComponent.vue"
import ParametresView from "@/components/back_office/parametres/ParametreComponent.vue"

export default {
  components: {
    OrganisationView,
    CollaboratorsView,
    ModulesView,
    IntegrationView,
    BillsView,
    ParametresView
  },
  data() {
    return {
      message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
      connected: localStorage.getItem("connected"),
      pageTitle: 'Réglages',

      IsAdmin : 'true', //super variable qui permettra de savoir si l'user est un admin ou un collaborateur (IsAdmin: localStorage.getItem("IsAdmin"))!//

      openComponent : 'organisation',

      organisation: 'organisation',
      collaborateur: 'collaborateurs',
      modules: 'modules',
      integration: 'intégrations',
      params: 'paramètres',
      bills: 'facturation',
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
  justify-content: space-around;
  margin-left: 50%;
}
.radio_label{
  display: flex;
  width: fit-content;
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