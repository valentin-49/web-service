<template id="template">
  <div id="menu_icons">
    <img id="close_menu" src="@/assets/pictograms/menu/close_menu.svg" @click="closeTheMenu()"
         alt="Pictogramme de croix">
    <img id="menu_burger" src="@/assets/pictograms/menu/menu_burger.svg" @click="showTheMenu()"
         alt="Pictogramme de menu burger">
  </div>
  <div id="the_menu">
    <div id="menu_logo">
      <img @click="goHome()" id="logo" src="@/assets/dempartner_logo.svg" alt="Logo de DEM Partner">
    </div>
      <!-- first block -->
    <div id="menu_block">
      <a class="menu_item" @click="closeSubmenuCRM()" href="/home">
        <div class="menu_arrow">
          <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
        </div>
        <div class="menu_picto">
          <img src="@/assets/pictograms/menu/home.svg" alt="Pictogramme de maison">
        </div>
        <div class="menu_title">{{ menu.home.title.toUpperCase() }}</div>
      </a>
      <a class="menu_item" href="/clients">
        <div class="menu_arrow">
          <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
        </div>
        <div class="menu_picto">
          <img src="@/assets/pictograms/menu/user.svg" alt="Pictogramme des clients">
        </div>
        <div class="menu_title">{{ menu.crm.title.toUpperCase() }}</div>
      </a>
      <div class="menu_item">
        <div class="menu_arrow">
          <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
        </div>
        <div class="menu_picto" >
          <img src="@/assets/pictograms/menu/agenda.svg" alt="Pictogramme de l'agenda">
        </div>
        <a class="menu_title" href="/agenda">{{ menu.agenda.title.toUpperCase() }}</a>
      </div>
    </div>
      <hr>
      <!-- fourth block -->
    <div id="menu_block">
      <div class="menu_item">
        <div class="menu_arrow">
          <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
        </div>
        <div class="menu_picto" >
          <img src="@/assets/pictograms/menu/statistic.svg" alt="Pictogramme des devis et facturations">
        </div>
        <a class="menu_title" 
           href="/statistics">{{ menu.statistique.title.toUpperCase() }}</a>
      </div>
    </div>
      <hr>
      <!-- fifth block -->
    <div id="menu_block">
      <div class="menu_item">
        <div class="menu_arrow">
          <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
        </div>
        <div class="menu_picto" >
          <img src="@/assets/pictograms/menu/preference.svg" alt="Pictogramme des devis et facturations">
        </div>
        <a class="menu_title" 
           href="/reglages">{{ menu.reglages.title.toUpperCase() }}</a>
      </div>
       <div class="menu_item" style="margin-bottom: 50px">
        <div class="menu_arrow">
          <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
        </div>
        <div class="menu_picto">
          <img src="@/assets/pictograms/menu/deconnexion.svg" alt="Pictogramme des devis et facturations">
        </div>
        <a class="menu_title" 
          @click="deconnect(), 
          $router.push('http://localhost:8080/')">{{ menu.deconnexion.title.toUpperCase() }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheMenu',
  data() {
    return {
      connected: localStorage.getItem("connected"),
      submenu: false,
      hidetest: "1",
      menu: {
        home: {
          title: 'Accueil'
        },
        crm:
            {
              title: 'crm',
              allCustomers: {
                title: 'Liste des clients'
              },
              addCustomer: {
                title: 'Ajouter un nouveau client'
              },
              massAction: {
                title: 'Action en masse'
              }
            },
        agenda: {
          title: 'Agenda'
        },
        estimationsBills: {
          title: 'Devis & factures'
        },
        commercials: {
          title: 'Commercial'
        }, 
        logistique: {
          title: 'logistique'
        }, 
        exploitation: {
          title: 'exploitation'
        }, 
        gardesMeubles: {
          title: 'Garde-meubles'
        },
        sav: {
          title: 'sav'
        },
        statistique: {
          title: 'statistiques'
        },
        reglages: {
          title: 'réglages'
        },
        deconnexion: {
          title: 'déconnexion'
        },
      }
    }
  },
  methods: {
    goHome() {
      window.location.replace('http://localhost:8080/')
    },
    clickOnCRM() {
      this.submenu = this.submenu !== true;
    },
    closeSubmenuCRM() {
      this.submenu = false
    },
    showTheMenu() {
      let menu = document.getElementById("the_menu");
      let close = document.getElementById("close_menu");
      let burger = document.getElementById("menu_burger");
      let nav = document.getElementById("div_navbar");
      menu.style.display = "block";
      close.style.display = "block";
      burger.style.display = "none";
      nav.style.display = "none";
      this.submenu = false;
    },
    closeTheMenu() {
      let menu = document.getElementById("the_menu");
      let close = document.getElementById("close_menu");
      let burger = document.getElementById("menu_burger");
      let nav = document.getElementById("div_navbar");
      menu.style.display = "none";
      close.style.display = "none";
      burger.style.display = "block";
      nav.style.display = "block";
    },
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
    }
  }
}
</script>

<style scoped>
#close_menu {
  display: none;
}

#menu_burger {
  display: none;
}

hr{
  color: #D9D5D5;
  margin: 12px auto;
  height: 1.5px;
  background: #D9D5D5;
  border: unset;
  width: 100%;
}

#the_menu {
  color: #666666;
  font-size: 1em;
  background: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: #D9D5D5 white; /* scroll thumb and track */
  transform: scaleX(-1);
}

#menu_logo {
  padding-bottom: 40px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transform: scaleX(-1);
}

#sarl_select {

  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 12px;
  color: #454545;
  border: none;
  background: #EDF1F6;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
  appearance: none;
  cursor: pointer;
  transform: scaleX(-1);
}

#sarl_select:hover {
  font-weight: bold;
  color: #CC9933;
  transform: scale(1.01);
  transform: scaleX(-1);
}

.menu_arrow {
  padding-left: 15px;
  padding-right: 10px;
}

.menu_item {
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  align-items: center;
  text-decoration: none;
  transform: scaleX(-1);
}
.menu_item:hover{
  background: #EDF1F6;
}

.menu_picto {
  padding-left: 5px;
  padding-right: 13px;
}

.menu_title {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: left;
  letter-spacing: 0.2em;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
}

.menu_title:hover {
  color: #CC9933;
  transform: scale(1.01);
}

#submenu {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.submenu_item {
  padding-bottom: 10px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  transform: scaleX(-1);
}

.submenu_item:hover {
  color: #CC9933;
  transform: scale(1.01);
  transform: scaleX(-1);
  background: #EDF1F6;
}

@media all and (max-width: 750px) {
  #menu_logo {
    height: 30px;
  }

  .menu_arrow {
    display: none;
  }

  .menu_picto {
    padding-left: 10px;
  }

  #submenu {
    padding-left: 30px;
  }
}

@media all and (max-width: 750px) {

  #menu_logo {
    height: 50px;
    margin-bottom: 20px;
  }

  #the_menu {
    display: none;
    position: relative;
    z-index: 1;
  }

  #close_menu {
    display: none;
    margin-left: 13px;
  }

  #menu_burger {
    display: block;
    margin-left: 5px;
  }

  #menu_block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu_title {
    font-size: 15px;
  }

  #submenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }

  .menu_item {
    margin: 3px;
    background: #EDF1F6;
    width: 100%;
    justify-content: center;
  }
}
</style>
