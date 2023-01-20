<template>
  <div id="navbar">
    <div id="navbar_search">
      <img src="@/assets/pictograms/navbar/search_glass.svg" alt="Pictogramme de loupe de recherche">
      <input type="search" id="search" placeholder="RECHERCHER UN CLIENT, UN DEVIS...">
    </div>
    <div id="navbar_user">
      <div id="navbar_user_block">
        <img id="navbar_user_item" src="@/assets/pictograms/navbar/notifications.svg"
             alt="Pictogramme de la notification">
        <!-- Ajouter une condition v-if sur le picto à utiliser si présence de notification ou non -->
        <img id="navbar_user_item" src="@/assets/pictograms/navbar/add_customer.svg"
             alt="Pictogramme d'ajout de client">
      </div>
      <div id="navbar_user_block">
        <label v-show="status === 'true'" id="navbar_user_block_name">{{ username }}</label>
        <img v-show="status === 'true'" id="navbar_user_block_item" src="@/assets/pictograms/navbar/user_pictogram.svg"
             alt="Pictogramme de l'utilisateur courant">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheNavbar',
  data() {
    return {
      username: localStorage.getItem("currentUser"),
      status: localStorage.getItem("connected"),
    }
  }
}
</script>

<style>
#navbar {
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 97%;
}

#navbar_search {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: fit-content;
  padding-left: 10px;
  background: #EDF1F6;
  height: 35px;
  margin-left: 50px;
}

#search {
  width: 280px;
  height: 35px;
  background: none;
  border: none;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #797979;
  padding-left: 5px;
}
#search:target{
  
}

#navbar_user {
  display: flex;
  justify-content: space-between;
  justify-items: right;
  align-items: center;
  margin-left: 25%;
}

#navbar_user_block {
  display: flex;
  align-items: center;
  margin-left: 120%;
}

#navbar_user_item {
  padding-left: 20px;
}

#navbar_user_block_name {
  padding-left: 5px;
  padding-right: 5px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 13px;
  color: #797979;
}

@media all and (max-width: 830px) {
  #navbar {
    flex-wrap: wrap-reverse;
  }

  #navbar_user {
    padding-bottom: 20px;
  }

  #navbar_user_block {
    margin: 0 auto;
  }
  #navbar_user_item{
    display: none;
  }
  #navbar_search {
    margin: 0 auto;
  }

}

@media all and (max-width: 565px) {
  #search {
    width: 250px;
  }
}


@media all and (max-width: 426px) {
  #search {
    font-size: 10px;
    width: 200px;
  }
}
</style>