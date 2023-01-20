<template>
  <div class="container">
    <div id="div_menu" >
      <TheMenuComponent></TheMenuComponent>
    </div>
    <div id="div_navbar">
      <TheNavbar></TheNavbar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheMenuComponent from '@/components/structure/TheMenu';
import NormalizeCss from '../public/css/normalize.css';
import TheNavbar from "@/components/structure/TheNavBar";

export default {
  components: {
    TheNavbar,
    TheMenuComponent,
  },
  data() {
    return{
      connected: localStorage.getItem("connected"),
    }
  },
  created() {
    NormalizeCss
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: Montserrat;
  src: url("./assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf") format('TrueType')
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
body{
  background: #EDF2F7;
  height: 100%;
}
.container{
  display: flex;
  flex-direction: row;
}
#div_menu {
  width: 15%;
  position: fixed;
  height: 100%;
  z-index: 1;
  box-shadow: 12px 0px 15px -3px rgba(0,0,0,0.1);
}
#div_navbar {
  width: 85%;
  position: absolute;
  height: 96px;
  right: 0;
  background: #FFFFFF;
  box-shadow: 0px 15px 15px -3px rgba(0,0,0,0.1);
  z-index: 10;
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
@media all and (max-width: 1000px) {


  @media all and (max-width: 750px) {
    #div_menu {
      width: 100%;
      height: 100%;
      position: fixed;
    }

    #div_navbar {
      width: 90%;
      height: auto;
      position: absolute;
      right: 0;
      background: #EDF2F7;
    }
  }
}
</style>
