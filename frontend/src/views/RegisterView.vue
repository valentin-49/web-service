<template>
  <div class="BG">
    <div class="logo">
      <img src="@/assets/Frame.svg">
    </div>
    <div class="formBox">
      <form onsubmit="return false;" autocomplete="off">
        <div v-if="errors.length" class="connection_error">
          <ul>
            <li v-for="(error, n) in errors" :key="n" id="error_item">{{ error }}</li>
          </ul>
        </div>
        <div v-else class="formTitle">
          <h1>Création de compte</h1>
        </div> 
        
        <div class="formboxinput">
          <div>
            <div class="textInput">
              <h2>NOM DE L’ENTREPRISE</h2>
              <input autocomplete="false" class="inputForm" type="text" id="company_name" name="company_name" onclick="clear()" v-model="form.company_name">
            </div>
            <div class="textInput">
              <h2>NOM</h2>
              <input autocomplete="false" class="inputForm" type="text" id="firstname" name="firstname" onclick="clear()" v-model="form.firstname">
            </div>
            <div class="textInput">
              <h2>PRÉNOM</h2>
              <input autocomplete="false" class="inputForm" type="text" id="lastname" name="lastname" onclick="clear()" v-model="form.lastname">
            </div>
            <div class="textInput">
              <h2>N° DE TÉLÉPHONE</h2>
              <input autocomplete="false" class="inputForm" type="text" id="phone" name="phone" onclick="clear()" v-model="form.phone">
            </div>
          </div>
          <div>
            <div class="textInput">
              <h2>VOTRE ADRESSE E-MAIL</h2>
              <input autocomplete="false" class="inputForm" type="text" id="email" name="email" onclick="clear()" v-model="form.email">
            </div>
            <div class="textInput">
              <h2>MOT DE PASSE</h2>
              <input autocomplete="false" class="inputForm" type="password" id="password" name="password" onclick="clear()" v-model="form.password">
            </div>
            <div class="textInput">
              <h2>CONFIRMATION DE MOT DE PASSE</h2>
              <input autocomplete="false" class="inputForm" type="password" id="password_verification" name="password_verification" onclick="clear()" v-model="form.password_verification">
            </div>
            <div class="FormButton">
              <button id="connected" type="submit" class="modal-button-one" @click="checkForm(), request()">CRÉER MON COMPTE</button>
            </div>
          </div>
        </div>
        <div class="link">
              <a href="/connexion" style="text-decoration: none;"><h3>Dèja un compte ? Connectez-vous</h3></a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      errors: [],
      form: {
        company_name: null,
        firstname: null,
        lastname: null,
        phone: null,
        email: null,
        password: null,
        password_verification: null,
      }
    }
  },
  methods: {
    checkForm: function () {
      if (this.form.company_name && this.form.firstname && this.form.lastname && this.form.phone && this.form.email && this.form.password && this.form.password_verification) {
        return true;
      }
      this.errors = [];
      if (!this.form.company_name) {
        this.errors.push('Nom entreprise requis');
        let input = document.getElementById("company_name");
        input.style.border = "0.2em solid red";
      } else if (!this.validName(this.form.company_name)) {
        this.errors.push('Nom invalide');
        let input = document.getElementById("company_name");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.firstname) {
        this.errors.push('Nom requis');
        let input = document.getElementById("firstname");
        input.style.border = "0.2em solid red";
      }
      if (!this.form.lastname) {
        this.errors.push('Prénom requis');
        let input = document.getElementById("lastname");
        input.style.border = "0.2em solid red";
      } else if (!this.validPostcode(this.form.lastname)) {
        this.errors.push('Prénom non valide');
        let input = document.getElementById("lastname");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.email) {
        this.errors.push('Mail requis');
        let input = document.getElementById("email");
        input.style.border = "0.2em solid red";
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push('Email non valide');
        let input = document.getElementById("email");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.password) {
        this.errors.push('Mot de passe requis');
        let input = document.getElementById("password");
        input.style.border = "0.2em solid red";
      }
      if (!this.form.phone) {
        this.errors.push('Téléphone requis');
        let input = document.getElementById("phone");
        input.style.border = "0.2em solid red";
      } else if (!this.validPhone(this.form.phone)) {
        this.errors.push('Numéro de téléphone non valide');
        let input = document.getElementById("phone");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.password_verification) {
        this.errors.push('Vérification mot de passe requise');
        let input = document.getElementById("password_verification");
        input.style.border = "0.2em solid red";
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
    request() {
      axios.post('http://localhost:3000/register', JSON.stringify(this.form), {headers: {'Content-Type': 'application/json'}})
          .then(() => {
            this.$router.push('/registration_confirme')
          })
          .catch((error) => {
            this.errors = [];
            this.errors.push(error.response.data.message);
          })
    }
  }
}
</script>

<style scoped>
.logo{
  padding: 50px 0 0 0 ;
  display: flex;
  justify-content: center;
}
.formBox{
  width: 1243px;
  height: fit-content;
  margin: 5% auto;
  background: #FFFFFF;
  border: 1px solid #EDF1F6;
  border-radius: 7px;
  padding-bottom: 25px;
}
.formTitle{
  margin: 3% 0 2% 5%;
}
.textInput{
  margin: 0 ;
}
.inputForm{
  width: 482px;
  height: 41px;
  background: #EDEDED;
  border: none;
  margin-bottom: 21px;
}
.formboxinput{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#connected{
  background: #CF9F3E;
  width: 482px;
  height: 41px;
  border: none;
  margin: 37px 0 0 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  transition: 0.2s;
}
#connected:hover{
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
  scale: 1.02;
}
.link{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 26%;
}
h1{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 64px;
  color: #000000;
}
h2{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
}
h3{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #B1AFC6;
}
.connection_error{
  margin: 2% auto;
  text-align: center;
  color: red;
}
@media screen and (max-width: 1000px) { 
  
}
@media screen and (max-width: 750px) { 
  .formBox{
    width: 90%;
    margin-bottom: 50px;
  }
  .inputForm{
    width: 90%;
  }
}
</style>