<template>
  <div class="connectionbody">
    <div style="h">
      <div class="formBox">
        <form onsubmit="return false;">
          <div v-if="errors.length" class="connection_error">
            <ul>
              <li v-for="(error, n) in errors" :key="n" id="error_item">{{ error }}</li>
            </ul>
          </div>
          <div v-else class="formTitle">
            <h1>Connectez-vous</h1>
          </div> 
          <div class="textInput">
            <h2>E-mail</h2>
            <input class="inputForm" type="text" id="email" name="mail" onclick="clear()" v-model="form.email">
          </div>
          <div class="textInput">
            <h2>Mot de passe</h2>
            <input class="inputForm" type="password" id="password" name="password" onclick="clear()" v-model="form.password">
          </div>
          <div class="FormButton">
            <button id="connected" type="submit" class="modal-button-one" @click="checkForm(), request()">CONNEXION</button>
          </div>
          <div class="link">
              <h3 @click="$router.push('')">Mot de passe oublié ?</h3>
              <h3 @click="$router.push('/creation_compte')">Pas de compte ?</h3>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      errors: [],
      connection: false,
      pageTitle: 'connectez-vous !',
      form: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    checkForm: function (){
      if (this.form.email && this.form.password){
        return true;
      }
      this.errors = [];
      if (!this.form.email){
        this.errors.push('Email obligatoire');
        let input = document.getElementById("email");
        input.style.border = "0.2em solid red";
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push('Email non valide');
        let input = document.getElementById("email");
        input.style.border = "0.2em solid blue";
      }
      if (!this.form.password){
        this.errors.push('Mot de passe obligatoire');
        let input = document.getElementById("password");
        input.style.border = "0.2em solid red";
      }
    },


    request() {
      axios.post('http://localhost:3000/connexion', JSON.stringify(this.form), {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            localStorage.setItem("tokenPartOne", res.data.data.tokenPartOne)
            let myKey = "tokenPartTwo"
            let myValue = res.data.data.tokenPartTwo;
            let myDate = new Date(Date.now() + 604800000);
            this.createCookie(myKey, myValue, myDate)
            this.updateName(res.data.data.dataUser.name);
            this.updateCompany(res.data.data.dataUser.company)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('data', JSON.stringify(res.data.data.dataUser))
            localStorage.setItem('connected', 'true');
            localStorage.setItem('company_id', res.data.data.dataUser.company_id);
            localStorage.setItem('currentUser', res.data.data.dataUser.name);
            localStorage.setItem('currentEmail', res.data.data.dataUser.email)
            this.$router.push('http://localhost:8080/confirmation_connexion');
          })
          .catch((error) => {
            this.errors = [];
            this.errors.push(error.response.data.message);
            this.email = '';
            this.password = '';
          })
    },
    updateName(userName) {
      this.$store.commit('incrementName', userName);
    },
    updateCompany(companyName) {
      this.$store.commit('incrementCompany', companyName);
    },
    createCookie(key, value, date) {
      let expires = "; expires= " + date;
      document.cookie = [key + '=' + value + expires];
    },
    clear() {
      this.errors = [];
    }
  }
}
</script>

<style scoped>
.connectionbody{
  height: 100%;
}
.logo{
  padding: 50px 0 100px 0 ;
  display: flex;
  justify-content: center;
}
.formBox{
  width: 639px;
  height: fit-content;
  margin: 150px auto;
  background: #FFFFFF;
  border: 1px solid #EDF1F6;
  border-radius: 7px;
  padding-bottom: 25px;
}
.formTitle{
  margin: 8% 0px 0px 12.5%;
}
.textInput{
  margin: 0 0 0 12.5%;
}
.inputForm{
  width: 482px;
  height: 41px;
  background: #EDEDED;
  border: none;
  margin-bottom: 21px;
}
#connected{
  background: #CF9F3E;
  width: 482px;
  height: 41px;
  border: none;
  margin: 28px 0 0 12.5%;
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
  justify-content: space-around;
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
h3:hover{
  cursor: pointer;
}
.connection_error{
  margin: 10% auto;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 13.04px;
  line-height: 16px;
  color: #FFFFFF;
  background: #662D2D;
  width: 482px;
  padding-top: 10px;
  padding-bottom: 10px;
}
ul{
  padding: 0;
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
  #connected{
    width: 80%;
  }
  .link{
    flex-direction: column;
    margin-top: 15px;
    width: 100%;
    text-align: center;
  }
}
</style>