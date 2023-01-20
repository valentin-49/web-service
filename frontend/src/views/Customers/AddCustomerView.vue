<template>
  <div style="text-align: center">
    <img class="notConnected_icon" v-show="connected === 'false'" src="@/assets/pictograms/notConnected.svg"
        alt="Pictogramme de point d'exclamation">
    <p class="warning" v-show="connected === 'false'">{{ message }}</p>
    <input v-show="connected === 'false'" class="modal-button-nav" type="button" @click="goHome()" value="PAGE CONNEXION">
  </div>
  <div v-if="form.NewCustomer === null">
    <div  v-show="connected === 'true' ">
      <div id="container_header">
          <h1 id="title">{{ pageTitle.toUpperCase() }}</h1>
        </div>
      <div id="newCustomerChoice">  
        <form id="selectTypeNewCustomer" onsubmit="return false;">
          <div class="radionewCustomer">
            <div id="radio_box">
              <input type="radio" id="particular" class="radio_hide" name="status" value="0" v-model="form.NewCustomer">
              <label class="radio_label_new" for="particular"><h6>Particulier</h6></label>
            </div>
            <div id="radio_box">
              <input type="radio" id="business" class="radio_hide" name="status" value="1" v-model="form.NewCustomer">
              <label class="radio_label_new" for="business"><h6>Entreprise</h6></label>
            </div>
          </div>
        </form> 
      </div>
    </div>
  </div>

<!--Formulaire nouveaux client type Particulier -->
<transition>
  <div v-show="form.NewCustomer === '0'" id="container">
    <form id="new_customer"
          onsubmit="return false;">
      <div v-if="errors.length" id="errors_div">
        <p>Corrigez les erreurs suivantes :</p>
        <ul id="error_list">
          <li v-for="(error, n) in errors" :key="n" id="error_item">{{ error }}</li>
        </ul>
      </div>
      <div id="container_header">
        <h1 id="title">{{ pageTitleParticulier.toUpperCase() }}</h1>
      </div>
      <div id="container_validation_button">
        <button class="button" type="reset" id="cancel_button"><img
            src="@/assets/pictograms/add_customer_view/cancel.svg" alt="Pictogramme symbole annuler">
          <div>{{ form.cancel_button.toUpperCase() }}</div>
        </button>
        <button class="button" type="submit" id="save_button" @click="checkForm(), requestParticulier()"><img
            src="@/assets/pictograms/add_customer_view/save.svg"
            alt="Pictogramme symbole valider">
          <div>{{ form.save_button.toUpperCase() }}</div>
        </button>
      </div>
      <fieldset class="fieldset">
        <legend class="legend">INFORMATIONS SUR LE CLIENT</legend>
        <div class="div_container">
          <div class="div_container_block">
            <div class="item">
              <label class="labels" for="civility_select">CIVILITE</label>
              <select name="civility" id="civility_select" v-model="form.civility" v-on:change="resetBorder($event)">
                <option value=""></option>
                <option value="1">Monsieur</option>
                <option value="2">Madame</option>
              </select>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="lastname">NOM</label>
                <input class="input" type="text" id="lastname" name="lastname" v-model="form.lastname"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="firstname">PRENOM</label>
                <input class="input" type="text" id="firstname" name="firstname" v-model="form.firstname"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="email">EMAIL</label>
                <input class="input" type="email" id="email" name="email" v-model="form.email"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="phone">TELEPHONE</label>
                <input class="input" type="tel" id="phone" name="phone" v-model="form.phone"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
          </div>
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="moving_date">DATE DU DEMENAGEMENT</label>
                <input class="input_select" type="date" id="moving_date" name="moving_date" v-model="form.moving_date"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="flexible_date">DATE FLEXIBLE ?</label>
                <select class="input_select" name="flexible_date" id="flexible_date" v-model="form.flexible_date">
                  <option value=""></option>
                  <option value="1">Oui</option>
                  <option value="2">Non</option>
                </select>
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="xxxx">XXXX</label>
                <input class="input" type="text" id="xxxx" name="xxxx">
              </div>
              <div class="item">
                <label class="labels" for="source">SOURCE</label>
                <select class="input_select" name="source" id="source" v-model="form.source"
                        v-on:change="resetBorder($event)">
                  <option value=""></option>
                  <option value="1">Pages Jaunes</option>
                  <option value="2">Site Internet</option>
                  <option value="3">Bouche à oreilles</option>
                </select>
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="intern_notes">NOTES INTERNES</label>
                <input class="notes" id="intern_notes" name="intern_notes" v-model="form.customer_notes">
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="legend">ADRESSE DE CHARGEMENT</legend>
        <div class="div_container">
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="street">N° ET NOM DE LA VOIE</label>
                <input class="input_long" type="text" id="departure_street" name="street"
                       v-model="form.departure_street"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="postcode">CODE POSTAL</label>
                <input class="input" type="text" id="departure_postcode" name="postcode"
                       v-model="form.departure_postcode"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="city">VILLE</label>
                <input class="input" type="text" id="departure_city" name="city" v-model="form.departure_city"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="country">PAYS</label>
                <input class="input" type="text" id="departure_country" name="country" v-model="form.departure_country"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="departure_geolocation">VOIR SUR LA CARTE</label>
                <input class="geolocation" type="button" id="departure_geolocation" name="geolocation">
              </div>
            </div>
          </div>
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="housing_type">TYPE DE LOGEMENT</label>
                <select class="input_select" name="housing_type" id="housing_type"
                        v-model="form.departure_housing_type">
                  <option value=""></option>
                  <option value="1">Maison</option>
                  <option value="2">Appartement</option>
                </select>
              </div>
              <div class="item">
                <label class="labels" for="area">SUPERFICIE (M<sup>2</sup>)</label>
                <input class="input" type="number" id="area" name="area" v-model="form.departure_area">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="volume">VOLUME CONNU ? (M<sup>3</sup>)</label>
                <input class="input" type="number" id="volume" name="volume" v-model="form.departure_volume">
              </div>
              <div class="item">
                <label class="labels" for="xxxx2">XXXX</label>
                <input class="input" type="text" id="xxxx2" name="xxxx">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="intern_notes2">NOTES INTERNES</label>
                <input class="notes" id="intern_notes2" name="intern_notes" v-model="form.departure_notes">
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="legend">ADRESSE DE LIVRAISON</legend>
        <div class="div_container">
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_street">N° ET NOM DE LA VOIE</label>
                <input class="input_long" type="text" id="arrival_street" name="street" v-model="form.arrival_street"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_postcode">CODE POSTAL</label>
                <input class="input" type="text" id="arrival_postcode" name="postcode" v-model="form.arrival_postcode"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="arrival_city">VILLE</label>
                <input class="input" type="text" id="arrival_city" name="city" v-model="form.arrival_city"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_country">PAYS</label>
                <input class="input" type="text" id="arrival_country" name="country" v-model="form.arrival_country"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="arrival_geolocation">VOIR SUR LA CARTE</label>
                <input class="geolocation" type="button" id="arrival_geolocation" name="geolocation">
              </div>
            </div>
          </div>
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_housing_type">TYPE DE LOGEMENT</label>
                <select class="input_select" name="housing_type" id="arrival_housing_type"
                        v-model="form.arrival_housing_type">
                  <option value=""></option>
                  <option value="1">Maison</option>
                  <option value="2">Appartement</option>
                </select>
              </div>
              <div class="item">
                <label class="labels" for="arrival_area">SUPERFICIE (M<sup>2</sup>)</label>
                <input class="input" type="number" id="arrival_area" name="area" v-model="form.arrival_area">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_volume">VOLUME CONNU ? (M<sup>3</sup>)</label>
                <input class="input" type="number" id="arrival_volume" name="volume" v-model="form.arrival_volume">
              </div>
              <div class="item">
                <label class="labels" for="arrival_xxxx">XXXX</label>
                <input class="input" type="text" id="arrival_xxxx" name="xxxx">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_intern_notes">NOTES INTERNES</label>
                <input class="notes" id="arrival_intern_notes" name="intern_notes" v-model="form.arrival_notes">
              </div>
              <div class="currentEmail">
                <input v-model="form.currentEmail">
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <div id="div_up">
        <a id="go_up" href="#">Retour en haut</a>
        <img src="@/assets/pictograms/add_customer_view/arrow_up.svg" alt="Pictogramme de flèche vers le haut">
      </div>
    </form>
  </div>
</transition>
<!--Formulaire nouveaux client type entreprise -->
<transition>
  <div v-show="form.NewCustomer === '1'" id="container">
    <form id="new_customer"
          onsubmit="return false;">
      <div v-if="errors.length" id="errors_div">
        <p>Corrigez les erreurs suivantes :</p>
        <ul id="error_list">
          <li v-for="(error, n) in errors" :key="n" id="error_item">{{ error }}</li>
        </ul>
      </div>
      <div id="container_header">
        <h1 id="title">{{ pageTitleEntreprise.toUpperCase() }}</h1>
      </div>
      <div id="container_validation_button">
        <button class="button" type="reset" id="cancel_button"><img
            src="@/assets/pictograms/add_customer_view/cancel.svg" alt="Pictogramme symbole annuler">
          <div>{{ form.cancel_button.toUpperCase() }}</div>
        </button>
        <button class="button" type="submit" id="save_button" @click="checkForm(), requestEntreprise()"><img
            src="@/assets/pictograms/add_customer_view/save.svg"
            alt="Pictogramme symbole valider">
          <div>{{ form.save_button.toUpperCase() }}</div>
        </button>
      </div>
      <fieldset class="fieldset">
        <legend class="legend">INFORMATIONS SUR LE CLIENT</legend>
        <div class="div_container">
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="street">NOM DE L'ENTREPRISE</label>
                <input class="input_long" type="text" id="departure_street" name="street"
                       v-model="form.departure_street"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="item">
                <label class="labels" for="flexible_date">CIVILITE</label>
                <select class="input_select" name="flexible_date" id="flexible_date" v-model="form.flexible_date">
                  <option value=""></option>
                  <option value="1">Madame</option>
                  <option value="2">Monsieur</option>
                </select>
              </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="lastname">NOM</label>
                <input class="input" type="text" id="lastname" name="lastname" v-model="form.lastname"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="firstname">PRENOM</label>
                <input class="input" type="text" id="firstname" name="firstname" v-model="form.firstname"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="email">EMAIL</label>
                <input class="input" type="email" id="email" name="email" v-model="form.email"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="phone">TELEPHONE</label>
                <input class="input" type="tel" id="phone" name="phone" v-model="form.phone"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
          </div>
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="moving_date">DATE DU DEMENAGEMENT</label>
                <input class="input_select" type="date" id="moving_date" name="moving_date" v-model="form.moving_date"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="flexible_date">DATE FLEXIBLE ?</label>
                <select class="input_select" name="flexible_date" id="flexible_date" v-model="form.flexible_date">
                  <option value=""></option>
                  <option value="1">Oui</option>
                  <option value="2">Non</option>
                </select>
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="xxxx">XXXX</label>
                <input class="input" type="text" id="xxxx" name="xxxx">
              </div>
              <div class="item">
                <label class="labels" for="source">SOURCE</label>
                <select class="input_select" name="source" id="source" v-model="form.source"
                        v-on:change="resetBorder($event)">
                  <option value=""></option>
                  <option value="1">Pages Jaunes</option>
                  <option value="2">Site Internet</option>
                  <option value="3">Bouche à oreilles</option>
                </select>
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="intern_notes">NOTES INTERNES</label>
                <input class="notes" id="intern_notes" name="intern_notes" v-model="form.customer_notes">
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="legend">ADRESSE DE CHARGEMENT</legend>
        <div class="div_container">
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="street">N° ET NOM DE LA VOIE</label>
                <input class="input_long" type="text" id="departure_street" name="street"
                       v-model="form.departure_street"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="postcode">CODE POSTAL</label>
                <input class="input" type="text" id="departure_postcode" name="postcode"
                       v-model="form.departure_postcode"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="city">VILLE</label>
                <input class="input" type="text" id="departure_city" name="city" v-model="form.departure_city"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="country">PAYS</label>
                <input class="input" type="text" id="departure_country" name="country" v-model="form.departure_country"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="departure_geolocation">VOIR SUR LA CARTE</label>
                <input class="geolocation" type="button" id="departure_geolocation" name="geolocation">
              </div>
            </div>
          </div>
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="housing_type">TYPE DE LOGEMENT</label>
                <select class="input_select" name="housing_type" id="housing_type"
                        v-model="form.departure_housing_type">
                  <option value=""></option>
                  <option value="1">Maison</option>
                  <option value="2">Appartement</option>
                </select>
              </div>
              <div class="item">
                <label class="labels" for="area">SUPERFICIE (M<sup>2</sup>)</label>
                <input class="input" type="number" id="area" name="area" v-model="form.departure_area">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="volume">VOLUME CONNU ? (M<sup>3</sup>)</label>
                <input class="input" type="number" id="volume" name="volume" v-model="form.departure_volume">
              </div>
              <div class="item">
                <label class="labels" for="xxxx2">XXXX</label>
                <input class="input" type="text" id="xxxx2" name="xxxx">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="intern_notes2">NOTES INTERNES</label>
                <input class="notes" id="intern_notes2" name="intern_notes" v-model="form.departure_notes">
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="legend">ADRESSE DE LIVRAISON</legend>
        <div class="div_container">
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_street">N° ET NOM DE LA VOIE</label>
                <input class="input_long" type="text" id="arrival_street" name="street" v-model="form.arrival_street"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_postcode">CODE POSTAL</label>
                <input class="input" type="text" id="arrival_postcode" name="postcode" v-model="form.arrival_postcode"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="arrival_city">VILLE</label>
                <input class="input" type="text" id="arrival_city" name="city" v-model="form.arrival_city"
                       v-on:change="resetBorder($event)">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_country">PAYS</label>
                <input class="input" type="text" id="arrival_country" name="country" v-model="form.arrival_country"
                       v-on:change="resetBorder($event)">
              </div>
              <div class="item">
                <label class="labels" for="arrival_geolocation">VOIR SUR LA CARTE</label>
                <input class="geolocation" type="button" id="arrival_geolocation" name="geolocation">
              </div>
            </div>
          </div>
          <div class="div_container_block">
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_housing_type">TYPE DE LOGEMENT</label>
                <select class="input_select" name="housing_type" id="arrival_housing_type"
                        v-model="form.arrival_housing_type">
                  <option value=""></option>
                  <option value="1">Maison</option>
                  <option value="2">Appartement</option>
                </select>
              </div>
              <div class="item">
                <label class="labels" for="arrival_area">SUPERFICIE (M<sup>2</sup>)</label>
                <input class="input" type="number" id="arrival_area" name="area" v-model="form.arrival_area">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_volume">VOLUME CONNU ? (M<sup>3</sup>)</label>
                <input class="input" type="number" id="arrival_volume" name="volume" v-model="form.arrival_volume">
              </div>
              <div class="item">
                <label class="labels" for="arrival_xxxx">XXXX</label>
                <input class="input" type="text" id="arrival_xxxx" name="xxxx">
              </div>
            </div>
            <div class="block">
              <div class="item">
                <label class="labels" for="arrival_intern_notes">NOTES INTERNES</label>
                <input class="notes" id="arrival_intern_notes" name="intern_notes" v-model="form.arrival_notes">
              </div>
              <div class="currentEmail">
                <input v-model="form.currentEmail">
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <div id="div_up">
        <a id="go_up" href="#">Retour en haut</a>
        <img src="@/assets/pictograms/add_customer_view/arrow_up.svg" alt="Pictogramme de flèche vers le haut">
      </div>
    </form>
  </div>
</transition>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
      connected: localStorage.getItem("connected"),
      pageTitleParticulier: 'nouveau client particulier',
      pageTitleEntreprise: 'nouveau client entreprise',
      pageTitle: 'nouveau client',
      errors: [],
      form: {
        NewCustomer: null,
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
        departure_street: null,
        departure_postcode: null,
        departure_city: null,
        departure_country: null,
        departure_housing_type: null,
        departure_area: null,
        departure_volume: null,
        departure_notes: null,
        arrival_street: null,
        arrival_postcode: null,
        arrival_city: null,
        arrival_country: null,
        arrival_housing_type: null,
        arrival_area: null,
        arrival_volume: null,
        arrival_notes: null,
        currentEmail: localStorage.getItem('currentEmail'),
        cancel_button: 'effacer',
        save_button: 'enregistrer',
        validate_button: 'valider',
        change_button: 'changer',
      }
    }
  },
  methods: {
    goHome() {
      window.location.replace('http://localhost:8080/connexion')
    },
    checkForm: function () {
      if (this.form.civility && this.form.lastname && this.form.firstname && this.form.email && this.form.phone && this.form.moving_date && this.form.source && this.form.departure_street && this.form.departure_postcode && this.form.departure_city && this.form.departure_country && this.form.arrival_street && this.form.arrival_postcode && this.form.arrival_city && this.form.arrival_country) {
        return true;
      }
      this.errors = [];
      if (!this.form.civility) {
        this.errors.push('Civilité requise');
        let input = document.getElementById("civility_select");
        input.style.border = "0.2em solid red";
      }
      if (!this.form.lastname) {
        this.errors.push('Nom requis');
        let input = document.getElementById("lastname");
        input.style.border = "0.2em solid red";
      } else if (!this.validName(this.form.lastname)) {
        this.errors.push('Nom invalide');
        let input = document.getElementById("lastname");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.firstname) {
        this.errors.push('Prénom requis');
        let input = document.getElementById("firstname");
        input.style.border = "0.2em solid red";
      } else if (!this.validName(this.form.firstname)) {
        this.errors.push('Le prénom doit contenir 10 lettres ou moins');
        let input = document.getElementById("firstname");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.email) {
        this.errors.push('Email requis');
        let input = document.getElementById("email");
        input.style.border = "0.2em solid red";
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push('Email non valide');
        let input = document.getElementById("email");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.phone) {
        this.errors.push('Numéro de téléphone requis');
        let input = document.getElementById("phone");
        input.style.border = "0.2em solid red";
      } else if (!this.validPhone(this.form.phone)) {
        this.errors.push('Numéro de téléphone non valide');
        let input = document.getElementById("phone");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.moving_date) {
        this.errors.push('Date de déménagement requise');
        let input = document.getElementById("moving_date");
        input.style.border = "0.2em solid red";
      }
      if (!this.form.source) {
        this.errors.push('Source requise');
        let input = document.getElementById("source");
        input.style.border = "0.2em solid red";
      }
      if (!this.form.departure_street || !this.form.departure_postcode || !this.form.departure_city || !this.form.departure_country) {
        this.errors.push('Adresse de chargement incomplète :');
      }
      if (!this.form.departure_street) {
        this.errors.push('N° et nom de voie requis');
        let input = document.getElementById("departure_street");
        input.style.border = "0.2em solid red";
      }
      if (!this.form.departure_postcode) {
        this.errors.push('Code postal requis');
        let input = document.getElementById("departure_postcode");
        input.style.border = "0.2em solid red";
      } else if (!this.validPostcode(this.form.departure_postcode)) {
        this.errors.push('Code postal non valide');
        let input = document.getElementById("departure_postcode");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.departure_city) {
        this.errors.push('Ville requise');
        let input = document.getElementById("departure_city");
        input.style.border = "0.2em solid red";
      } else if (!this.validName(this.form.departure_city)) {
        this.errors.push('Ville non valide');
        let input = document.getElementById("departure_city");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.departure_country) {
        this.errors.push('Pays requis');
        let input = document.getElementById("departure_country");
        input.style.border = "0.2em solid red";
      } else if (!this.validName(this.form.departure_country)) {
        this.errors.push('Pays non valide');
        let input = document.getElementById("departure_country");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.arrival_street || !this.form.arrival_postcode || !this.form.arrival_city || !this.form.arrival_country) {
        this.errors.push('Adresse de livraison incomplète :');
      }
      if (!this.form.arrival_street) {
        this.errors.push('N° et nom de voie requis');
        let input = document.getElementById("arrival_street");
        input.style.border = "0.2em solid red";
      }
      if (!this.form.arrival_postcode) {
        this.errors.push('Code postal requis');
        let input = document.getElementById("arrival_postcode");
        input.style.border = "0.2em solid red";
      } else if (!this.validPostcode(this.form.arrival_postcode)) {
        this.errors.push('Code postal non valide');
        let input = document.getElementById("arrival_postcode");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.arrival_city) {
        this.errors.push('Ville requise');
        let input = document.getElementById("arrival_city");
        input.style.border = "0.2em solid red";
      } else if (!this.validName(this.form.arrival_city)) {
        this.errors.push('Ville non valide');
        let input = document.getElementById("arrival_city");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.arrival_country) {
        this.errors.push('Pays requis');
        let input = document.getElementById("arrival_country");
        input.style.border = "0.2em solid red";
      } else if (!this.validName(this.form.arrival_country)) {
        this.errors.push('Pays non valide');
        let input = document.getElementById("arrival_country");
        input.style.border = "0.2em solid blue";
      }
    },
    resetBorder(event) {
      let input = document.getElementById(event.currentTarget.id);
      input.style.border = "none";
    },
    validName(lastname) {
      let re = /^([a-zA-Z\u0080-\u024F]+(?:.|-||'))*[a-zA-Z\u0080-\u024F]*$/;
      return re.test(lastname);
    },
    validEmail(email) {
      let re = /(^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$)/;
      return re.test(email);
    },
    validPhone(phone) {
      let re = /(^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$)/;
      return re.test(phone);
    },
    validPostcode(postcode) {
      let re = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
      return re.test(postcode);
    },
    checkNewCustomer(){


    },
    requestEntreprise() {
      axios.post('http://localhost:3000/ajout_client', JSON.stringify(this.form), {headers: {'Content-Type': 'application/json'}})
          .then(() => {
            this.$router.push('/ajout_client_confirme');
          })
          .catch(() => {
          })
    },
    requestParticulier() {
      axios.post('http://localhost:3000/ajout_client', JSON.stringify(this.form), {headers: {'Content-Type': 'application/json'}})
          .then(() => {
            this.$router.push('/ajout_client_confirme');
          })
          .catch(() => {
          })
    }
  }
}
</script>

<style>

html {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
}

ul {
  list-style-type: none;
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

#errors_div {
  display: flex;
  color: red;
  justify-content: center;
}

#error_list {
  flex-direction: column;
  display: flex;
  align-items: baseline;
}

#error_item {
  margin-bottom: 10px;
}

.button {
  margin: 0 20px 0 20px;
}

#cancel_button {
  margin: 0 20px 0 20px;
  width: 134px;
  height: 40px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  background: rgba(255, 218, 218, 0.5);
  color: #000000;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
}

#cancel_button:hover {
  transform: scale(1.1);
}

#cancel_button:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#save_button {
  margin: 0 20px 0 20px;
  width: 170px;
  height: 40px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  background: #9EE4FA;
  color: #000000;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
}

#save_button:hover {
  transform: scale(1.1);
}

#save_button:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#new_customer {
  background: white;
  width: 92%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 60px;
  padding: 40px 15px;
}

.div_container {
  padding: 40px 0 50px 0;
  width: 100%;
  height: 200px;
  justify-content: space-between;
  display: flex;
}

.div_container_block {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
}


.labels {
  font-size: 12px;
  padding-bottom: 10px;
  margin-left: 5px;
}

.block {
  display: flex;
  justify-content: space-between;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 10px 30px 0 0;
  margin-bottom: 5px;
}

.input {
  width: 172px;
  height: 40px;
  margin: 5px 5px;
  background: #EDF1F6;
  border: none;
  text-align-last: center;
}

.input_select {
  width: 175px;
  height: 40px;
  background: #EDF1F6;
  border: none;
  text-align-last: center;
  margin: 5px 5px;
}

.input_long {
  width: 392px;
  height: 40px;
  background: #EDF1F6;
  border: none;
  text-align-last: center;
}

.radio {
  display: flex;
  align-items: center;
  padding-right: 50px;
}

.radio_label {
  margin-left: 15px;
  font-size: 12px;
}

#civility_select {
  width: 176px;
  height: 40px;
  background: #EDF1F6;
  border: none;
  text-align-last: center;
}

.notes {
  background: #EDF1F6;
  width: 414px;
  height: 91px;
  border: none;
  text-align-last: center;
}

.geolocation {
  width: 175px;
  height: 40px;
  border: none;
  cursor: pointer;
  margin: 5px 5px;
}

.fieldset {
  display: flex;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2em;
  margin-bottom: 50px;
  color: #000000;
  border: 3px solid #EDF1F6;
  height: 450px;
}

#container_validation_button {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 70px;
}

#div_up {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
}

#div_up:hover {
  transform: scale(1.1);
}

#go_up {
  text-decoration: none;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  color: #000000;
}
.currentEmail {
  display: none;
}
#newCustomerChoice{
  position: absolute;
  width: 244px;
  height: 158px;
  margin: 150px 40%;
  background: #FFFFFF;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
}
.radionewCustomer{
  display: flex;
  flex-direction: column;
}
.radio_label_new{
  display: flex;
  width: 184px;
  height: 34px;
  background: #BDFFE3;
  margin: 0px auto;
  margin-top: 30px;
  cursor: pointer;
  align-items: center;
  transition: 0.2s;
}
.radio_label_new:hover{
  transition: 0.2s;
  width: 192px;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
}
.radio_hide{
  display: none;
}
h6{
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  margin: 0px auto;
}
</style>