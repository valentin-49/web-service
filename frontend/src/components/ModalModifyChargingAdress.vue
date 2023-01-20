<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6>Adresse de chargement</h6>
      <form>
        <div class="modal-container">
          <div class="modal-block">
            <div class="modal-item">
              <label class="labels" for="street">N° ET NOM DE LA VOIE : </label>
              <input v-if="modification" class="input_info" type="text" id="departure_street" name="street"
                     :placeholder="charging.street" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="departure_street" name="street"
                     v-model="form.departure_street">
            </div>
            <div class="modal-item">
              <label class="labels" for="postcode">CODE POSTAL : </label>
              <input v-if="modification" class="input_info" type="text" id="departure_postcode" name="postcode"
                     :placeholder="charging.postcode" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="departure_postcode" name="postcode"
                     v-model="form.departure_postcode">
            </div>
            <div class="modal-item">
              <label class="labels" for="city">VILLE : </label>
              <input v-if="modification" class="input_info" type="text" id="departure_city" name="city"
                     :placeholder="charging.city" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="departure_city" name="city"
                     v-model="form.departure_city">
            </div>
            <div class="modal-item">
              <label class="labels" for="country">PAYS : </label>
              <input v-if="modification" class="input_info" type="text" id="departure_country" name="country"
                     :placeholder="charging.country" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="departure_country" name="country"
                     v-model="form.departure_country">
            </div>
          </div>
          <div class="modal-block">
            <div class="modal-item">
              <label class="labels" for="housing_type">TYPE DE LOGEMENT : </label>
              <input v-if="modification" class="input_info" type="text" id="housing_type" name="housing_type"
                     :placeholder="charging.housing_type" readonly disabled>
              <select v-else class="input_info_mod" name="housing_type" id="housing_type"
                      v-model="form.departure_housing_type">
                <option value=""></option>
                <option value="1">Maison</option>
                <option value="2">Appartement</option>
              </select>
            </div>
            <div class="modal-item">
              <label class="labels" for="area">SUPERFICIE (M<sup>2</sup>) : </label>
              <input v-if="modification" class="input_info" type="text" id="area" name="area"
                     :placeholder="charging.area" readonly disabled>
              <input v-else class="input_info_mod" type="number" id="area" name="area" v-model="form.departure_area">
            </div>
            <div class="modal-item">
              <label class="labels" for="volume">VOLUME CONNU (M<sup>3</sup>) : </label>
              <input v-if="modification" class="input_info" type="text" id="volume" name="volume"
                     :placeholder="charging.volume" readonly disabled>
              <input v-else class="input_info_mod" type="number" id="volume" name="volume"
                     v-model="form.departure_volume">
            </div>
            <div class="modal-notes">
              <label class="labels" for="intern_notes2">NOTES INTERNES : </label>
              <input v-if="modification" class="input_info" type="text" id="intern_notes2" name="intern_notes"
                     :placeholder="charging.intern_notes" readonly disabled>
              <input v-else class="input_info_mod" id="intern_notes2" name="intern_notes"
                     v-model="form.departure_notes">
            </div>
          </div>
        </div>
        <div class="modal-button_form">
          <input v-show="modification" type="button" class="modal-button-modify" value="MODIFIER"
                 @click="modification = false, requestChargingInformations()">
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
    ...mapState(["charging"])
  },
  data() {
    return {
      form: {
        departure_street: null,
        departure_postcode: null,
        departure_city: null,
        departure_country: null,
        departure_housing_type: null,
        departure_area: null,
        departure_volume: null,
        departure_notes: null,
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
    requestChargingInformations() {
      axios.get('http://localhost:3000/clients/departure/' + this.$store.state.departureID, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            this.form.departure_street = res.data.data[0].street
            this.form.departure_postcode = res.data.data[0].postcode
            this.form.departure_city = res.data.data[0].city
            this.form.departure_country = res.data.data[0].country
            this.form.departure_housing_type = res.data.data[0].housing_type
            this.form.departure_area = res.data.data[0].area
            this.form.departure_volume = res.data.data[0].volume
            this.form.departure_notes = res.data.data[0].intern_notes
          })
          .catch(() => {
          })
    },
    request() {
      axios.post('http://localhost:3000/clients/departure/' + this.$store.state.departureID, JSON.stringify(this.form), {
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

.labels {
  font-size: 12px;
  padding-bottom: 10px;
  font-weight: bold;
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

.modal-button-validate:hover {
  transform: scale(1.1);
}

.modal-button-validate:active {
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