<template>
  <div>
    <div id="container_header">
      <h1>Clients > {{ SimulateData.name }} {{ SimulateData.subname }}</h1>
    </div>
    <div class="boxBody">
      <div class="FirstBox">
        <div class="BoxClientDetail">
          <div id="clientDetail">
            <div style="margin: 30px">
              <section id="detailRow">
              <img src="@/assets/pictograms/customer_view_detail/Avatar.svg" alt="image avatar user" id="img_avatar">
                <article id="detailbox">
                  <label>N° Client</label>
                  <label name="data">{{SimulateData.id_Customer }}</label>
                </article>
                <article id="detailbox">
                  <label>Date</label>
                  <label name="data"> {{SimulateData.date }}</label>
                </article>
              </section>
            </div>
            <div class="details_row" style="margin-top: 2%">
              <div class="details_column"> 
                <ul>
                  <li><label>Statut</label></li>
                  <li><label>Nom</label></li>
                  <li><label>Prenom</label></li>
                </ul>
                <ul>
                  <li><label name="data">{{ SimulateData.state  }}</label></li>
                  <li><label name="data">{{ SimulateData.name  }}</label></li>
                  <li><label name="data">{{ SimulateData.lastname  }}</label></li>
                </ul>
              </div>
              <div class="details_column" style="margin-left: 15%">
                <ul>
                  <li><label>Téléphone</label></li>
                  <li><label>Mail</label></li>
                </ul>
                <ul>
                  <li><label name="data">{{ SimulateData.phone  }}</label></li>
                  <li><label name="data">{{ SimulateData.mail  }}</label></li>
                </ul>
              </div>
            </div>
            <div class="details_row" >
              <div class="details_column" style="align-self: center; "> 
                <ul>
                  <li><label>Adresse postale</label></li>
                  <li><label>Commercial attitré</label></li>
                </ul>
                <ul>
                  <li><label name="data">{{ SimulateData.adress  }}</label></li>
                  <li><label name="data">{{ SimulateData.commercial  }}</label></li>
                </ul>
              </div>
              <div class="details_column" style="margin-left: 80px">
                <GoogleMap/>
              </div>
            </div>
            <hr>
          </div>
        </div>
      </div>
      <div class="SecondBox"> 
        <div class="RDV">
          <div id="RDV_details">
            <h3>Prochain RDV</h3>
            <h1 name="titleRDV">{{ SimulateData.moving_date }}</h1>
            <h4>Participants {{ SimulateData.commercial }}</h4>
          </div>
          <div id="iconsRDV">
            <button @click="showModalCancel = true, deletion(customer.email)" class="item_pict"><img
                src="@/assets/pictograms/customer_view_detail/reglage.svg" alt="Pictogramme de croix de suppression"></button>
            <button @click="showModalCancel = true, deletion(customer.email)" class="item_pict" style="margin: 0px 15px 0px 15px"><img
                src="@/assets/pictograms/customer_view_detail/cloche.svg" alt="Pictogramme de croix de suppression"></button>
            <button @click="showModalCancel = true, deletion(customer.email)" class="item_pict"><img
                src="@/assets/pictograms/customer_view_detail/share.svg" alt="Pictogramme de croix de suppression"></button>
          </div>
        </div>
        <div class="tchat">
          <h1>{{ form.email }} </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GoogleMap from "@/components/GoogleMap.vue"

export default {
  components: {
    GoogleMap,
  },
  data() {
    return {
      pageTitle: 'page detail client',
      form: {
        type: null,
        civility: null,
        lastname: null,
        firstname: null,
        email: null,
        phone: null,
        moving_date: null,
        flexible_date: null,
        source: null,
        customer_notes: null,
      },
      SimulateData:{
        id_Customer: '0145D',
        date: '2017',
        state: 'Entreprise',
        name: 'Valentin',
        lastname: 'bouet',
        phone: '0672405659',
        mail: 'valbout@outlook.fr',
        adress: '70 ter boulevard guy chouteau',
        commercial: 'Pierre',
        moving_date: '22 septembre 2022'
      }
    }
  },
  created() {
    this.requestClientInformations();
  },
  methods: {
    requestClientInformations() {
      axios.get('http://localhost:3000/clients/' + this.$store.state.email, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            this.form.type = res.data.data[0].type
            this.form.civility = res.data.data[0].civility
            this.form.lastname = res.data.data[0].lastname
            this.form.firstname = res.data.data[0].firstname
            this.form.email = res.data.data[0].email
            this.form.phone = res.data.data[0].phone
            let jsdate = new Date(res.data.data[0].moving_date)
            this.form.moving_date = jsdate.toISOString().slice(0, 10)
            this.form.flexible_date = res.data.data[0].date_flexible
            this.form.source = res.data.data[0].source
            this.form.customer_notes = res.data.data[0].inter_notes
          })
          .catch(() => {
          })
    },
  }
}

</script>

<style scoped>
.boxBody{
  width: 95%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
}
.FirstBox{
  width: 61%;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.details_row{
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
}
.details_column{
  display: flex;
  flex-direction: row;
  margin: 15px;
  text-align: left;
}
#detailRow{
  display: flex;
  flex-direction: row;
  margin-left: 10%;
}
#detailbox{
  display: flex;
  flex-direction: row;
  margin-right: 150px;
  align-items: center;
}
.SecondBox{
  width: 36%;
  display: flex;
  flex-direction: column;
}
.RDV{
  width: 100%;
  background: #FFFFFF;
  height: 257px;
  margin-bottom: 50px;
  text-align: left;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
#RDV_details{
  margin-top: 46px;
  margin-left: 54px;
}
#iconsRDV{
  width: 90%;
  margin: 60px auto;
  padding-left: 68%;
}
.tchat{
  width: 100%;
  height: 593px;
  background: #FFFFFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
#container_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 93%;
  padding-bottom: 0px;
  padding-top: 30px;
}
#title {
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}
#img_avatar{
  margin-right: 50px;
}
hr{
  margin-top: 75px;
  height: 6px;
  background: #EBEBEB;
  border: none;
}
ul{
  padding-left: 0;
}
h1[name="titleRDV"]{
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #000000;
  margin: 22px 0px 22px 0px;
}
h3{
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: #CC9933;
}
h4{
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  color: #A3A3A3;
}
label{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.36);
  margin-right: 32px;
}
label[name="data"]{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  color: #000000;
  margin: 0;
}
</style>