<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6 id="card_title">PROFIL DU CLIENT</h6>
      <div id="card_container">
        <button id="card_customer" @click="requestInfos(), showModalCustomer = true"><img
            src="@/assets/pictograms/modal/client_profile.svg" alt="Pictogramme symbole de profil"
            class="card_picto"><br>INFORMATIONS CLIENT
        </button>
        <button id="card_charging" @click="requestCharging(), showModalChargingAdress = true"><img
            src="@/assets/pictograms/modal/ramp.svg" alt="Pictogramme symbole de déménagement" class="card_picto"><br>ADRESSE
          DE CHARGEMENT
        </button>
        <button id="card_arrival" @click="requestArrival(), showModalArrivalAdress = true"><img
            src="@/assets/pictograms/modal/arrival.svg" alt="Pictogramme symbole de drapeau d'arrivée"
            class="card_picto"><br>ADRESSE DE LIVRAISON
        </button>
      </div>
      <div>
        <button id="card_cancel" @click="$emit('close-modal')">FERMER</button>
      </div>
    </div>
    <modalModifyCustomer v-show="showModalCustomer" @close-modal="showModalCustomer = false"/>
    <modalModifyChargingAdress v-show="showModalChargingAdress" @close-modal="showModalChargingAdress = false"/>
    <modalModifyArrivalAdress v-show="showModalArrivalAdress" @close-modal="showModalArrivalAdress = false"/>
  </div>
</template>

<script>
import modalModifyCustomer from "@/components/ModalModifyCustomer.vue";
import modalModifyChargingAdress from "@/components/ModalModifyChargingAdress.vue";
import modalModifyArrivalAdress from "@/components/ModalModifyArrivalAdress.vue";
import axios from "axios";

export default {
  components: {
    modalModifyCustomer,
    modalModifyChargingAdress,
    modalModifyArrivalAdress
  },
  data() {
    return {
      showModalCustomer: false,
      showModalChargingAdress: false,
      showModalArrivalAdress: false,
    }
  },
  methods: {
    requestInfos() {
      axios.get('http://localhost:3000/clients/' + this.$store.state.email, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            this.$store.commit('incrementType', res.data.data[0].type);
            this.$store.commit('incrementCivility', res.data.data[0].civility);
            this.$store.commit('incrementLastname', res.data.data[0].lastname);
            this.$store.commit('incrementFirstname', res.data.data[0].firstname);
            this.$store.commit('incrementEmail', res.data.data[0].email);
            this.$store.commit('incrementPhone', res.data.data[0].phone);
            let jsdate = new Date(res.data.data[0].moving_date).toISOString().slice(0, 10)
            this.$store.commit('incrementMovingDate', jsdate);
            this.$store.commit('incrementFlexibleDate', res.data.data[0].date_flexible);
            this.$store.commit('incrementSource', res.data.data[0].source);
            this.$store.commit('incrementCustomerNotes', res.data.data[0].inter_notes);
          })
          .catch(() => {
          })
    },
    requestCharging() {
      axios.get('http://localhost:3000/clients/departure/' + this.$store.state.departureID, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            this.$store.commit('incrementChargingStreet', res.data.data[0].street);
            this.$store.commit('incrementChargingPostcode', res.data.data[0].postcode);
            this.$store.commit('incrementChargingCity', res.data.data[0].city);
            this.$store.commit('incrementChargingCountry', res.data.data[0].country);
            this.$store.commit('incrementChargingHousing', res.data.data[0].housing_type);
            this.$store.commit('incrementChargingArea', res.data.data[0].area);
            this.$store.commit('incrementChargingVolume', res.data.data[0].volume);
            this.$store.commit('incrementChargingNotes', res.data.data[0].intern_notes);
          })
          .catch(() => {
          })
    },
    requestArrival() {
      console.log(this.$store.state.arrivalID)
      axios.get('http://localhost:3000/clients/arrival/' + this.$store.state.arrivalID, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            console.log(res.data.data)
            this.$store.commit('incrementArrivalStreet', res.data.data[0].street);
            this.$store.commit('incrementArrivalPostcode', res.data.data[0].postcode);
            this.$store.commit('incrementArrivalCity', res.data.data[0].city);
            this.$store.commit('incrementArrivalCountry', res.data.data[0].country);
            this.$store.commit('incrementArrivalHousing', res.data.data[0].housing_type);
            this.$store.commit('incrementArrivalArea', res.data.data[0].area);
            this.$store.commit('incrementArrivalVolume', res.data.data[0].volume);
            this.$store.commit('incrementArrivalNotes', res.data.data[0].intern_notes);
          })
          .catch(() => {
          })
    },
  }
}
</script>

<style scoped>
.card_picto {
  margin-bottom: 20px;
}

#card_cancel {
  margin: 0 auto;
  width: 170px;
  height: 40px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  background: lightgrey;
  color: #000000;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
}

#card_cancel:hover {
  transform: scale(1.1);
}

#card_cancel:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#card_title {
  margin-top: 4.5%;
  font-family: 'Montserrat', serif;
}

#card_container {
  margin: 7% auto;
  display: flex;
  justify-content: space-around;
}

#card_customer {
  width: 220px;
  height: 240px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  background: whitesmoke;
  border-color: #CC9933;
  color: #000000;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
}

#card_customer:hover {
  transform: scale(1.1);
}

#card_customer:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#card_charging {
  width: 220px;
  height: 240px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  background: whitesmoke;
  border-color: #CC9933;
  color: #000000;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
}

#card_charging:hover {
  transform: scale(1.1);
}

#card_charging:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#card_arrival {
  width: 220px;
  height: 240px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  background: whitesmoke;
  border-color: #CC9933;
  color: #000000;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
}

#card_arrival:hover {
  transform: scale(1.1);
}

#card_arrival:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

.modal-overlay {
  width: 118%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  animation: fadein 0.5s;
  -webkit-animation: fadein 0.5s;

}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal {
  text-align: center;
  background-color: white;
  height: 510px;
  width: 900px;
  margin-top: 2%;
  border-radius: 20px;
}

h6 {
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0;
}

p {
  margin: 35px 0;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
}
</style>