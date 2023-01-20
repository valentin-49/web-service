<template>
  <div id="div_one">
    <img id="icon" src="@/assets/pictograms/new_customer_confirmed/validation.svg"
         alt="Pictogramme symbole de validation">
    <h3>{{ page_title.toUpperCase() }}</h3>
    <label>MR {{ customer_name.toUpperCase() }} - SARL {{ sarl_name.toUpperCase() }}</label>
  </div>
  <div id="div_three">
    <button @click="goHome()" type="button" id="closeCustomerConfirmation"><img
        src="@/assets/pictograms/new_customer_confirmed/close_window.svg"
        alt="Pictogramme symbole fermer">{{ close_button.toUpperCase() }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
      page_title: 'vous êtes connecté !',
      close_button: 'fermer la fenêtre',
      customer_name: this.$store.state.userName,
      sarl_name: this.$store.state.companyName,
    }
  },
  methods: {
    goHome() {
      window.location.replace('http://localhost:8080/home')
    }
  }
}
</script>

<style>
#div_one {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 50px 0;
}

#icon {
  width: 5%;
  padding-bottom: 30px;
}

#div_three {
  margin: 30px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#closeCustomerConfirmation {
  width: 189px;
  height: 40px;
  background: rgba(249, 228, 228, 0.5);
  border: none;
  margin: 10px 0 10px 0;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #000000;
  cursor: pointer;
  transition: 0.2s all;
}

#closeCustomerConfirmation:hover {
  transform: scale(1.1);
}

#closeCustomerConfirmation:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}
</style>