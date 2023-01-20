<template>
  <div id="div_one">
    <img id="icon" src="@/assets/pictograms/new_customer_confirmed/validation.svg"
         alt="Pictogramme symbole de validation">
    <h3>{{ page_title.toUpperCase() }}</h3>
    <label>MR {{ customer_name.toUpperCase() }} - SARL {{ sarl_name.toUpperCase() }}</label>
  </div>
  <div id="div_two">
    <button type="button" id="goAppointment"><img src="@/assets/pictograms/add_customer_view/save.svg"
                                                  alt="Pictogramme symbole valider">{{
        appointment_button.toUpperCase()
      }}
    </button>
  </div>
  <div id="div_three">
    <button type="button" id="goEditCustomer"><img src="@/assets/pictograms/new_customer_confirmed/edit.svg"
                                                   alt="Pictogramme symbole de modification">{{
        edit_button.toUpperCase()
      }}
    </button>
    <button @click="$router.push('http://localhost:8080/clients')" type="button" id="closeCustomerConfirmation"><img
        src="@/assets/pictograms/new_customer_confirmed/close_window.svg"
        alt="Pictogramme symbole fermer">{{ close_button.toUpperCase() }}
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      customers: [],
      page_title: 'client enregistré',
      appointment_button: 'prendre un rendez-vous',
      edit_button: 'modifier le client',
      close_button: 'fermer la fenêtre',
      customer_name: 'client',
      sarl_name: 'déménagement lambda'
    }
  },
  async request() {
    this.customers = (await axios.get('http://localhost:3000/clients')).data;
  }
}
</script>

<style>
#div_one {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 50px 0;
}

#icon {
  width: 5%;
  padding-bottom: 30px;
}

#div_two {
  margin: 30px 0 30px 0;
  display: flex;
  justify-content: center;
}

#goAppointment {
  width: 222px;
  height: 47px;
  background: #9EE4FA;
  border: none;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  color: #000000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
}

#goAppointment:hover {
  transform: scale(1.1);
}

#goAppointment:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}

#div_three {
  margin: 30px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#goEditCustomer {
  width: 189px;
  height: 40px;
  background: #EDF1F6;
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

#goEditCustomer:hover {
  transform: scale(1.1);
}

#goEditCustomer:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
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