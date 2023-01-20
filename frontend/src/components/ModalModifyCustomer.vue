<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6>Informations sur {{ client.firstname }} {{ client.lastname }}</h6>
      <form>
        <div class="modal-container">
          <div class="modal-block">
            <div class="modal-item">
              <label class="labels" for="type">TYPE : </label>
              <input v-if="modification" class="input_info" type="text" id="type" name="type" :placeholder="client.type"
                     readonly disabled>
              <div v-else>
                <div class="modal-item">
                  <input type="radio" id="particular" name="status" value="1" checked="checked" v-model="form.type">
                  <label class="radio_label" for="particular">PARTICULIER</label>
                </div>
                <div class="modal-item">
                  <input type="radio" id="business" name="status" value="2" v-model="form.type">
                  <label class="radio_label" for="business">ENTREPRISE</label>
                </div>
              </div>
            </div>
            <div class="modal-item">
              <label class="labels" for="civility">CIVILITE : </label>
              <input v-if="modification" class="input_info" type="text" id="civility" name="civility"
                     :placeholder="client.civility" readonly disabled>
              <select v-else class="input_info_mod" name="civility" id="civility_select" v-model="form.civility">
                <option value=""></option>
                <option value="1">Monsieur</option>
                <option value="2">Madame</option>
              </select>
            </div>
            <div class="modal-item">
              <label class="labels" for="lastname">NOM : </label>
              <input v-if="modification" class="input_info" type="text" id="lastname" name="lastname"
                     :placeholder="client.lastname" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="lastname" name="lastname" v-model="form.lastname">
            </div>
            <div class="modal-item">
              <label class="labels" for="firstname">PRENOM : </label>
              <input v-if="modification" class="input_info" type="text" id="firstname" name="firstname"
                     :placeholder="client.firstname" readonly disabled>
              <input v-else class="input_info_mod" type="text" id="firstname" name="firstname" v-model="form.firstname">
            </div>
            <div class="modal-notes">
              <label class="labels" for="intern_notes">NOTES INTERNES : </label>
              <input v-if="modification" class="input_info" type="text" id="intern_notes" name="intern_notes"
                     :placeholder="client.customer_notes" readonly disabled>
              <input v-else class="input_info_mod" id="intern_notes" name="intern_notes" v-model="form.customer_notes">
            </div>
          </div>
          <div class="modal-block">
            <div class="modal-item">
              <label class="labels" for="email">EMAIL : </label>
              <input v-if="modification" class="input_info" type="email" id="email" name="email"
                     :placeholder="client.email" readonly disabled>
              <input v-else class="input_info_mod" type="email" id="email" name="email" v-model="form.email">
            </div>
            <div class="modal-item">
              <label class="labels" for="phone">TELEPHONE : </label>
              <input v-if="modification" class="input_info" type="tel" id="phone" name="phone"
                     :placeholder="client.phone" readonly disabled>
              <input v-else class="input_info_mod" type="tel" id="phone" name="phone" v-model="form.phone">
            </div>
            <div class="modal-item">
              <label class="labels" for="moving_date">DATE DU DEMENAGEMENT : </label>
              <input v-if="modification" class="input_info" type="text" id="moving_date" name="moving_date"
                     :placeholder="client.moving_date" readonly disabled>
              <input v-else class="input_info_mod" type="date" id="moving_date" name="moving_date"
                     v-model="form.moving_date">
            </div>
            <div class="modal-item">
              <label class="labels" for="flexible_date">DATE FLEXIBLE : </label>
              <input v-if="modification" class="input_info" type="text" id="flexible_date" name="flexible_date"
                     :placeholder="client.flexible_date" readonly disabled>
              <select v-else class="input_info_mod" name="flexible_date" id="flexible_date"
                      v-model="form.flexible_date">
                <option value=""></option>
                <option value="1">Oui</option>
                <option value="2">Non</option>
              </select>
            </div>
            <div class="modal-item">
              <label class="labels" for="source">SOURCE : </label>
              <input v-if="modification" class="input_info" type="text" id="source" name="source"
                     :placeholder="client.source" readonly>
              <select v-else class="input_info_mod" name="source" id="source" v-model="form.source">
                <option value=""></option>
                <option value="1">Pages Jaunes</option>
                <option value="2">Site Internet</option>
                <option value="3">Bouche à oreilles</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-button_form">
          <input v-show="modification" type="button" class="modal-button-modify" value="MODIFIER"
                 @click="modification = false, requestClientInformations()">
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
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(["client"])
  },
  data() {
    return {
      nameCookie: "tokenPartTwo",
      form: {
        type: null,
        civility: null,
        lastname: null,
        firstname: null,
        email: null,
        phone: null,
        moving_date: null,
        flexible_date: null,
        source: null,
        customer_notes: null,
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
    requestClientInformations() {
      axios.get('http://localhost:3000/clients/' + this.$store.state.email, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            this.form.type = res.data.data[0].type
            this.form.civility = res.data.data[0].civility
            this.form.lastname = res.data.data[0].lastname
            this.form.firstname = res.data.data[0].firstname
            this.form.email = res.data.data[0].email
            this.form.phone = res.data.data[0].phone
            let jsdate = new Date(res.data.data[0].moving_date)
            this.form.moving_date = jsdate.toISOString().slice(0, 10)
            this.form.flexible_date = res.data.data[0].date_flexible
            this.form.source = res.data.data[0].source
            this.form.customer_notes = res.data.data[0].inter_notes
          })
          .catch(() => {
          })
    },
    request() {
      axios.post('http://localhost:3000/clients/' + this.$store.state.email, JSON.stringify(this.form), {
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + (localStorage.getItem("tokenPartOne") + this.getCookie("tokenPartTwo"))
        }
      })
          .then(() => {
          })
          .catch(() => {
          })
    },
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
  height: 485px;
  width: 970px;
  margin-top: 3%;
  border-radius: 20px;
}

h6 {
  font-family: 'Montserrat', serif;
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0 40px 0;
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
  margin-top: 10px;
  align-items: center;
}

.modal-block {
  display: flex;
  flex-direction: column;
  align-items: self-end;
}

.modal-button_form {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.modal-item {
  margin-top: 5px;
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