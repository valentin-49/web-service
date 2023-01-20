<template>
  <div>
    <div style="text-align: center">
    <img class="notConnected_icon" v-show="connected === 'false'" src="@/assets/pictograms/notConnected.svg"
        alt="Pictogramme de point d'exclamation">
    <p class="warning" v-show="connected === 'false'">{{ message }}</p>
    <input v-show="connected === 'false'" class="modal-button-nav" type="button" @click="goHome()" value="PAGE CONNEXION">
    </div>
    <div v-show="connected === 'true'" id="container">
      <div id="container_header">
        <h1 id="title">{{ pageTitle.toUpperCase() }}</h1>
        <div id="container_button">
          <button type="button" id="filter_button"><img src="@/assets/pictograms/customers_view/filter.svg"
                                                        alt="Pictogramme symbole filtre">
            <div>{{ filter_button.toUpperCase() }}</div>
          </button>
          <button type="button" id="add_button" @click="$router.push('http://localhost:8080/ajout_client')"><img
              src="@/assets/pictograms/customers_view/add.svg" alt="Pictogramme symbole plus">
            <div>{{ add_button.toUpperCase() }}</div>
          </button>
        </div>
      </div>
      <div id="table">
        <ul class="line_titles">
          <li class="item_id">{{ NumClient.toUpperCase() }}</li>
          <li class="item_firstname">{{ nomClient.toUpperCase() }}</li>
          <li class="item_email">{{ phone.toUpperCase() }}</li>
          <li class="item_phone">{{ email.toUpperCase() }}</li>
          <li class="item_state">{{ state.toUpperCase() }}</li>
          <li class="item_firstname">{{ commercial.toUpperCase() }}</li>
          <li class="item_modification"></li>
        </ul>
        <ul v-for="(customer, n) in customers[0]" :key="n" class="line" @click="this.$router.push('/clients/'+id_user.id+'/'+customer.email), updateE(customer.email)">
          <li class="item_id">{{ customer.id }}</li>
          <li class="item_firstname">{{ customer.lastname }} {{ customer.firstname }}</li>
          <li class="item_email">{{ customer.phone }}</li>
          <li class="item_phone">{{ customer.email }}</li>
          <li class="item_state" v-if="customer.state === 1" style="background: #FFCEB4">VISITE</li>
            <li class="item_state" v-if="customer.state === 2" style="background: #DAFFD9">FACTURÉ</li>
              <li class="item_state" v-if="customer.state === 3" style="background: #A40000; color: #FFFFFF">SAV</li>
                <li class="item_state" v-if="customer.state === 4" style="background: #3C898E; color: #FFFFFF">NOUVEAU</li>
                  <li class="item_state" v-if="customer.state === 5" style="background: #ACCDFF">EN COURS</li>
          <li class="item_commercial">{{ customer.commercial}}</li>
          <div class="item_modification">
            <button @click="showModalCancel = true, deletion(customer.email)" class="item_pict"><img
                src="@/assets/pictograms/add_customer_view/cancel.svg" alt="Pictogramme de croix de suppression"></button>
            <button
                @click="showModalModify = true, updateE(customer.email), updateIDD(customer.departure_adress), updateIDA(customer.arrival_adress)"
                class="item_pict"><img
                src="@/assets/pictograms/customers_view/pen.svg" alt="Pictogramme d'un crayon"></button>
          </div>
        </ul>
      </div>
      <div id="div_up">
        <a id="go_up" href="#">Retour en haut</a>
        <img src="@/assets/pictograms/add_customer_view/arrow_up.svg" alt="Pictogramme de flèche vers le haut">
      </div>
      <modalCancel v-show="showModalCancel" @close-modal="showModalCancel = false" @initialize="listAllClients()"/>
      <modalModifyProfile v-show="showModalModify" @close-modal="showModalModify = false" @initialize="listAllClients()"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import modalCancel from '@/components/ModalCancel.vue'
import modalModifyProfile from '@/components/ModalModifyProfile.vue'

export default {
  components: {
    modalCancel,
    modalModifyProfile,
  },
  data() {
    return {
      message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
      connected: localStorage.getItem("connected"),
      showModalCancel: false,
      showModalModify: false,
      customers: [],
      pageTitle: 'liste des clients',
      filter_button: 'filtrer',
      add_button: 'ajouter un client',
      civility: 'civilité',
      NumClient: 'N°client',
      nomClient: 'nom du client',
      email: 'adresse mail',
      phone: 'téléphone',
      state: 'etat',
      commercial: 'commercial',

      id_user: JSON.parse(localStorage.data),
    }
  },
  created() {
    this.listAllClients();
  },
  methods: {
    goHome() {
      window.location.replace('http://localhost:8080/connexion')
    },
    listAllClients() {
      axios.get('http://localhost:3000/liste_clients/' + localStorage.getItem('currentEmail'), {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            if (this.customers.length !== 0) {
              this.customers.splice(0, this.customers.length)
            }
            this.customers.push(res.data.data) 
          })
          .catch(() => {
          })
    },
    deletion(email) {
      this.$store.commit('increment', email);
    },
    updateE(email) {
      this.$store.commit('increment', email);
    },
    updateIDD(departureID) {
      this.$store.commit('changeDID', departureID);
    },
    updateIDA(arrivalID) {
      this.$store.commit('changeAID', arrivalID);
    },
      
  },
}

</script>

<style>
body {
  overflow-x: hidden;
}

p{
  margin-bottom: 120px;
}

#container {
  background: #EDF1F6;
}

#container_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 93%;
  padding-bottom: 40px;
  padding-top: 30px;
}

#title {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}

#container_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%
}

#filter_button {
  width: 134px;
  height: 40px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  background: rgba(255, 255, 255, 0.5);
  color: #000000;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
}

#filter_button:hover {
  transform: scale(1.1);
}

#filter_button:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#add_button {
  width: 206px;
  height: 40px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  background: white;
  color: #000000;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
}

#add_button:hover {
  transform: scale(1.1);
}

#add_button:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#table {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 93%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
}

.line {
  display: flex;
  justify-content: space-between;
  background: #FFFFFF;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  cursor: pointer;
  transition: 0.2s;
}
.line:hover{
  transition: 0.2s;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
}

.line_titles {
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #797979;
}

.item_id {
  align-self: center;
  text-align: center;
  width: 50%;
}

.item_firstname {
  align-self: center;
  text-align: center;
  width: 120%;
}

.item_email {
  align-self: center;
  text-align: center;
  width: 100%;
}

.item_phone {
  align-self: center;
  text-align: center;
  width: 120%;
  margin-right: 5%;
}

.item_state {
  align-self: center;
  text-align: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}

.item_commercial {
  align-self: center;
  text-align: center;
  width: 120%;
}

.item_modification{
  align-self: center;
  text-align: end;
  width: 55%;
}


.item_pict {
  align-self: center;
  text-align: initial;
  border: none;
  background-color: transparent;
  padding: 0 10px;
}

.item_pict:hover {
  transform: scale(1.2);
  cursor: pointer;
  transition: 0.2s all;
}

.item_pict:active {
  transform: scale(0.98);
}

#div_up {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  margin: 40px 0px 20px 0px;
}

#div_up:hover {
  transform: scale(1.1);
}
</style>