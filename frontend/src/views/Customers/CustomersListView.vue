<template>
    <div>
          <div style="text-align: center">
          <img class="notConnected_icon" v-show="connected === 'false'" src="@/assets/pictograms/notConnected.svg"
              alt="Pictogramme de point d'exclamation">
          <p class="warning" v-show="connected === 'false'">{{ message }}</p>
          <input v-show="connected === 'false'" class="modal-button-nav" type="button" @click="goHome()" value="PAGE CONNEXION">
      </div>
        <div v-show="connected === 'true'">
            <div class="navbar">
                <div class="picto" >
                    <img src="@/assets/pictograms/menu/preference.svg" alt="Pictogramme des devis et facturations">
                </div>
                    <h1 id="title">{{ pageTitle.toUpperCase() }}</h1>
                <form id="selectViewAdmin" onsubmit="return false;">
                    <div class="navbarGroup">
                        <div class="nav-items">
                          <input type="radio" id="listeCustomers" class="radio_hide" value="listeCustomers" v-model="openComponent">
                          <label v-if="openComponent != 'listeCustomers'" class="radio_label" for="listeCustomers">{{ listeCustomers.toUpperCase() }}</label>
                          <label v-else class="radio_label" name="colored">{{ listeCustomers.toUpperCase() }}</label>
                        </div>
                        <div class="nav-items">
                          <input type="radio" id="actionMasse" class="radio_hide" value="actionMasse" v-model="openComponent"> 
                          <label v-if="openComponent != 'actionMasse'" class="radio_label" for="actionMasse">{{ actionMasse.toUpperCase() }}</label>
                          <label v-else class="radio_label" name="colored">{{ actionMasse.toUpperCase() }}</label>
                        </div>
                    </div> 
                </form>
            </div>
            <div class="customersComponent">
                <div v-if="openComponent == 'listeCustomers'" class="boxBody">
                  <CustomerList />
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import CustomerList from "@/components/CRM/CustomersListComponent.vue"

export default {
  components: {
    CustomerList,
  },
  data() {
    return {
        message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
        connected: localStorage.getItem("connected"),
        pageTitle: 'Réglages',

        openComponent : 'listeCustomers',

        listeCustomers: 'liste des clients',
        actionMasse: 'Action en masse',
        addCustomer: 'nouveau client',
    }
  },
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
.navbarGroup{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-left: 200px;
}
.radio_label{
  display: flex;
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
  color: #CC9933;
}
.radio_label:hover{
  color: #CC9933;
}
.boxBody{
  width: 100%;
  height: fit-content;
  margin-top: 40px;
}
</style>