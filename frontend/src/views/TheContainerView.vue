<template>
  <div class="isConnect" v-show="connected == 'false'" id="isNotConnected" name="notConnected">
    <div class="BG">
      <div id="navbarCo">
        <button id="goConnection" @click="$router.push('http://localhost:8080/connexion')"
                type="button">
          {{ connection.toUpperCase() }}
        </button>
        <button id="goRegistration" @click="$router.push('http://localhost:8080/creation_compte')" type="button">
          {{ creation.toUpperCase() }}
        </button>
      </div> <TheCard class="card"/>
      <div id="acceuilTitle">
        <h1 name="title">IADEM</h1>
        <h2 name="subTitle">L’intelligence artificielle au services des déménageurs</h2>
      </div>
    </div>
  </div>
  <div class="isConnect" v-show="connected == 'true'" id="isConnected">
    <div class="connected">
      <h2 id="title_connected">Bonjour, {{ username }}</h2>
      <h2 id="title_connected">{{ company_id }}</h2>
      <TurnoverComponent :TurnOverData="turnoverNumber" :TurnOverPercent="percent" />
    </div>
  </div>
</template>

<script>
import TheCard from "@/components/card/PreferenceCard"; 
import TurnoverComponent from "@/components/statistics/TurnoverComponent.vue"

export default { 
   components: {
    TheCard,
    TurnoverComponent,
  },
  data() {
    return {
      username: localStorage.getItem("currentUser"),
      connected: localStorage.getItem("connected"),
      pageTitle: 'bienvenue sur dempartner !',
      creation: "s'inscrire",
      connection: 'connexion',
      deconnection: 'déconnexion',
      buy: 'Acheter',
      company_id: localStorage.getItem("company_id"),

      turnoverNumber: "1.935.025 €",
      percent: "2,3%",

    }
  },
  methods: {
    deconnect() {
      localStorage.setItem("connected", 'false');
      localStorage.setItem("currentUser", 'Déconnecté')
      localStorage.removeItem("token")
      localStorage.removeItem("data")
      localStorage.removeItem("tokenPartOne")
      localStorage.removeItem("currentEmail")
      setTimeout(function () {
        location.reload()
      }, 10)
    },
  }
}
</script>

<style scoped>

.isConnect{
  z-index: 100;
  height: 60em;
}
.isConnect[name="notConnected"]{

}
.connected{
  width: 90%;
  margin: 0 auto;
}
.BG{
  height: 100%;
  background: url(@/assets/BG.jpg);
  background-position: center;
  background-size: cover;
}
.card{
  z-index: 10;
  position: absolute;
}
#navbarCo{
  display: flex;
  flex-direction: row;
  padding-left: 70%;
}
#title_connected{
  text-align: left;
  margin-top: 7%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
}
h1 {
  margin-top: 11%;
  margin-bottom: 4%;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}
h1[name="title"]{
  margin-top: 18%;
  font-family: 'Clonoid';
  font-style: normal;
  font-weight: 600;
  font-size: 96px;
  line-height: 48px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 6px 4px 24px rgba(0, 0, 0, 0.35);
}
h2[name="subTitle"]{
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 6px 4px 24px #000000;
}

#goRegistration {
  width: 150px;
  height: 40px;
  background: #FFFFFF;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #CC9933;
  border: none;
  margin: 20px;
  cursor: pointer;
  transition: 0.2s all;
}

#goRegistration:hover {
  transform: scale(1.1);
}

#goRegistration:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#goConnection {
  width: 150px;
  height: 40px;
  background: #CC9933;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #FFFFFF;
  border: none;
  margin: 20px;
  cursor: pointer;
  transition: 0.2s all;
}

#goConnection:hover {
  transform: scale(1.1);
}

#goConnection:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#goDeconnection {
  width: 189px;
  height: 40px;
  background: rgba(255, 218, 218, 0.5);
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #000000;
  border: none;
  margin: 30px auto;
  cursor: pointer;
  transition: 0.2s all;
}

#goDeconnection:hover {
  transform: scale(1.1);
}

#goDeconnection:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}
</style>