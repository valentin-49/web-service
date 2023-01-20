<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6>Adresse de livraison</h6>
      <form>
        <div class="modal-container">
          <div class="modal-block">
            <div class="modal-item">
              <label class="labels" for="street">N° ET NOM DE LA VOIE : </label>
              <input v-if="modification" class="input_info" type="text" id="departure_street" name="street"
                     :placeholder="arrival.street" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="departure_street" name="street"
                     v-model="form.arrival_street">
            </div>
            <div class="modal-item">
              <label class="labels" for="postcode">CODE POSTAL : </label>
              <input v-if="modification" class="input_info" type="text" id="departure_postcode" name="postcode"
                     :placeholder="arrival.postcode" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="departure_postcode" name="postcode"
                     v-model="form.arrival_postcode">
            </div>
            <div class="modal-item">
              <label class="labels" for="city">VILLE : </label>
              <input v-if="modification" class="input_info" type="text" id="departure_city" name="city"
                     :placeholder="arrival.city" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="departure_city" name="city"
                     v-model="form.arrival_city">
            </div>
            <div class="modal-item">
              <label class="labels" for="country">PAYS : </label>
              <input v-if="modification" class="input_info" type="text" id="departure_country" name="country"
                     :placeholder="arrival.country" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="departure_country" name="country"
                     v-model="form.arrival_country">
            </div>
          </div>
          <div class="modal-block">
            <div class="modal-item">
              <label class="labels" for="housing_type">TYPE DE LOGEMENT : </label>
              <input v-if="modification" class="input_info" type="text" id="housing_type" name="housing_type"
                     :placeholder="arrival.housing_type" readonly disabled>
              <select v-else class="input_info_mod" name="housing_type" id="housing_type"
                      v-model="form.arrival_housing_type">
                <option value=""></option>
                <option value="1">Maison</option>
                <option value="2">Appartement</option>
              </select>
            </div>
            <div class="modal-item">
              <label class="labels" for="area">SUPERFICIE (M<sup>2</sup>) : </label>
              <input v-if="modification" class="input_info" type="text" id="area" name="area"
                     :placeholder="arrival.area" readonly disabled>
              <input v-else class="input_info_mod" type="number" id="area" name="area" v-model="form.arrival_area">
            </div>
            <div class="modal-item">
              <label class="labels" for="volume">VOLUME CONNU (M<sup>3</sup>) : </label>
              <input v-if="modification" class="input_info" type="text" id="volume" name="volume"
                     :placeholder="arrival.volume" readonly disabled>
              <input v-else class="input_info_mod" type="number" id="volume" name="volume"
                     v-model="form.arrival_volume">
            </div>
            <div class="modal-notes">
              <label class="labels" for="intern_notes2">NOTES INTERNES : </label>
              <input v-if="modification" class="input_info" type="text" id="intern_notes2" name="intern_notes"
                     :placeholder="arrival.intern_notes" readonly disabled>
              <input v-else class="input_info_mod" id="intern_notes2" name="intern_notes" v-model="form.arrival_notes">
            </div>
          </div>
        </div>
        <div class="modal-button_form">
          <input v-show="modification" type="button" class="modal-button-modify" value="MODIFIER"
                 @click="modification = false, requestArrivalInformations()">
          <button v-show="modification" type="button" class="modal-button-nav"
                  @click="modification = true, $emit('close-modal')">RETOUR
          </button>
          <button v-show="!modification" type="button" class="modal-button-nav" @click="modification = true">ANNULER
          </button>
          <button v-show="!modification" type="submit" class="modal-button-validate" @click="request()">VALIDER</button>
          <button v-show="!modification" type="reset" class="modal-button-erase">EFFACER</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState(["arrival"])
  },
  data() {
    return {
      form: {
        arrival_street: null,
        arrival_postcode: null,
        arrival_city: null,
        arrival_country: null,
        arrival_housing_type: null,
        arrival_area: null,
        arrival_volume: null,
        arrival_notes: null,
      },
      modification: true
    }
  },
  methods: {
    getCookie(name) {
      if (document.cookie.length === 0) {
        return null;
      }
      let regSepCookie = new RegExp('(; )', 'g');
      let cookies = document.cookie.split(regSepCookie);
      for (let i = 0; i < cookies.length; i++) {
        let regInfo = new RegExp('=', 'g');
        let infos = cookies[i].split(regInfo);
        if (infos[0] === name) {
          return unescape(infos[1]);
        }
      }
      return null;
    },
    requestArrivalInformations() {
      axios.get('http://localhost:3000/clients/arrival/' + this.$store.state.arrivalID, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            this.form.arrival_street = res.data.data[0].street
            this.form.arrival_postcode = res.data.data[0].postcode
            this.form.arrival_city = res.data.data[0].city
            this.form.arrival_country = res.data.data[0].country
            this.form.arrival_housing_type = res.data.data[0].housing_type
            this.form.arrival_area = res.data.data[0].area
            this.form.arrival_volume = res.data.data[0].volume
            this.form.arrival_notes = res.data.data[0].intern_notes
          })
          .catch(() => {
          })
    },
    request() {
      axios.post('http://localhost:3000/clients/arrival/' + this.$store.state.arrivalID, JSON.stringify(this.form), {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + (localStorage.getItem("tokenPartOne") + this.getCookie("tokenPartTwo"))
        }
      })
          .then(() => {
          })
          .catch(() => {
          })
    }
  }
}
</script>

<style scoped>
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

@-webkit-keyframes fadein { /* sur Safari et Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.input_info {
  width: 172px;
  height: 40px;
  margin: 5px 5px;
  background: white;
  border: none;
}

.input_info_mod {
  width: 172px;
  height: 40px;
  margin: 5px 5px;
  background: #EDF1F6;
  border: none;
}

.labels {
  font-size: 12px;
  padding-bottom: 10px;
  font-weight: bold;
}

.modal {
  text-align: center;
  background-color: white;
  height: 390px;
  width: 850px;
  margin-top: 3.5%;
  border-radius: 20px;
}

h6 {
  font-family: 'Montserrat', serif;
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0;
  text-decoration: underline;
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

.modal-container {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  align-items: flex-end;
}

.modal-block {
  display: flex;
  flex-direction: column;
  align-items: self-end;
}

.modal-button_form {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}

.modal-button-modify {
  background: palegoldenrod;
  width: 134px;
  height: 40px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #000000;
  border: none;
  cursor: pointer;
  transition: 0.2s all;
}

.modal-button-modify:hover {
  transform: scale(1.1);
}

.modal-button-modify:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

.modal-button-validate {
  background: #9EE4FA;
  width: 134px;
  height: 40px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #000000;
  border: none;
  cursor: pointer;
  transition: 0.2s all;
}

.modal-button-validate :hover {
  transform: scale(1.1);
}

.modal-button-validate :active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

.modal-button-erase {
  background: rgba(255, 218, 218, 0.5);
  width: 134px;
  height: 40px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #000000;
  border: none;
  cursor: pointer;
  transition: 0.2s all;
}

.modal-button-erase:hover {
  transform: scale(1.1);
}

.modal-button-erase:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

.modal-button-nav {
  background: lightgrey;
  width: 134px;
  height: 40px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #000000;
  border: none;
  cursor: pointer;
  transition: 0.2s all;
}

.modal-button-nav:hover {
  transform: scale(1.1);
}

.modal-button-nav:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}
</style>