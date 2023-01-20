<template>
  <div class="modal-overlay">
    <div class="modal">
      <img class="" src="@/assets/pictograms/modal/sure.svg" alt="Emoji d'un bonhomme qui s'interroge"/>
      <p>Voulez-vous vraiment supprimer ce client ?</p>
      <button @click="deletionConfirmed(), $emit('close-modal')" class="button_suppress">SUPPRIMER</button>
      <button class="button_cancel" @click="$emit('close-modal')">ANNULER</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    deletionConfirmed() {
      axios.delete('http://localhost:3000/clients/' + this.$store.state.email, {headers: {'Content-Type': 'application/json'}})
          .then(() => {
            this.$emit("initialize");
          })
          .catch(() => {
          })
    }
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

@-webkit-keyframes fadein { /* sur Safari et Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal {
  text-align: center;
  background-color: white;
  height: 200px;
  width: 520px;
  margin-top: 8%;
  padding: 60px 0;
  border-radius: 20px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
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

.button_suppress {
  background: rgba(255, 218, 218, 0.5);
  width: 150px;
  height: 40px;
  border-radius: 16px;
  margin: 0 30px;
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

.button_suppress:hover {
  transform: scale(1.1);
}

.button_suppress:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}


.button_cancel {
  background: #9EE4FA;
  width: 150px;
  height: 40px;
  border-radius: 16px;
  margin: 0 30px;
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

.button_cancel:hover {
  transform: scale(1.1);
}

.button_cancel:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.65);
}
</style>