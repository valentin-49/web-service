<template>
    <div>
        <div style="text-align: center">
            <img class="notConnected_icon" v-show="connected === 'false'" src="../assets/pictograms/notConnected.svg"
                alt="Pictogramme de point d'exclamation">
            <p class="warning" v-show="connected === 'false'">{{ message }}</p>
            <input v-show="connected === 'false'" class="modal-button-nav" type="button" @click="goHome()" value="PAGE CONNEXION">
        </div>
        <div v-show="connected === 'true'">
            <div id="container_header">
                    <h1 id="title">{{ pageTitle.toUpperCase() }}</h1>
            </div>
            <div class="logistics_box">
                <div class="logistic_navbar">
                    <section id="calendar_nav">
                        yolo
                    </section>
                    <section id="date_now">
                        yolo
                    </section>
                    <section id="today_button">
                        yolo
                    </section>
                    <section id="icon_nav">
                        yolo
                    </section>
                </div>
                <div class="logistic_calendar_box">
                    logistic_calendar_box
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheLogisctics',

    data() {
        return{
            message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
            connected: localStorage.getItem("connected"),
            pageTitle: 'Logistique',
        }
    },
    methods: {
        goHome() {
            window.location.replace('http://localhost:8080/connexion')
        }
    }
}
</script>

<style scoped>
#container_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 93%;
  padding-bottom: 40px;
  padding-top: 30px;
}
.logistics_box{
    width: 100%;
    background: red;
    padding: 20px;
    padding-top: 10px;
}
.logistic_navbar{
    width: 95%;
    margin: 20px auto;
    background: turquoise;
    display: flex;
    flex-direction: row ;
}
.logistic_calendar_box{
    width: 95%;
    margin: 15px auto;
    background: purple;
}
</style>