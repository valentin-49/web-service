<template>
    <div>
        <div id="title">
            <hr>
            <h1>{{ billsTitle1.toUpperCase() }}</h1>
        </div>
        <div class="subscriptionData">
            <div class="rowTitle">
                <span><h4>{{status.toUpperCase()}}</h4></span>  
                <span><h4>{{cycle.toUpperCase()}}</h4> </span>  
                <span><h4>{{facturationDate.toUpperCase()}}</h4></span>   
                <span><h4>{{user.toUpperCase()}}</h4> </span>  
                <span><h4>{{paiement.toUpperCase()}}</h4> </span>  
            </div>
            <div class="rowData"> 
               <span> <h2 name="subscriptionStatus" v-if="collaborator == 0" style="background: #61D766; color: #FFFFFF">ABONNÉ</h2> 
                    <h2 name="subscriptionStatus" v-else style="background: #DBDBDB" >ARCHIVÉ</h2></span>  
                <span><h2>{{status.toUpperCase()}}</h2>    </span>  
                <span><h2>{{cycle.toUpperCase()}}</h2> </span>  
                <span><h2>{{paiement.toUpperCase()}}</h2> </span>  
                <span style="display: flex; flex-direction: row"><h2>{{visa.toUpperCase()}}<button class="editBtn" @click="collaboratorProfil(collaborator)"><img src="@/assets/pictograms/reglages/usermodify.svg"></button></h2></span>  
                
            </div>
        </div>
        <div id="title">
            <hr>
            <h1>{{ billsTitle2.toUpperCase() }}</h1>
        </div>
        <div class="subscriptionHistory">
            <div class="titleBox">
                <div class="rowTitle" name="history">
                    <span><h4>{{Payementdate.toUpperCase()}}</h4></span>  
                    <span><h4>{{status.toUpperCase()}}</h4> </span> 
                </div>
                <div class="rowTitle" name="action">
                    <span><h4>{{actions.toUpperCase()}}</h4></span>    
                </div>
            </div>
            <div class="databox" > <!-- v-for here -->
                <div class="rowData" name="history">
                    <span><h2>{{date.toUpperCase()}}</h2></span>  
                    <span> <h2 name="subscriptionStatus" v-if="isPayed == 0" style="background: #61D766; color: #FFFFFF">RÉGLÉE</h2> 
                            <h2 name="subscriptionStatus" v-else style="background: #D76161; color: #FFFFFF" >NON RÉGLÉE</h2></span>
                </div>
                <div class="rowData" name="action" >
                    <div class="icon" v-if="isPayed == 1">
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/pay.svg"></button>
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/download.svg"></button>
                    </div>
                    <div class="icon" v-else >
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/download.svg"></button>
                    </div>
                </div>
            </div>
            <div class="databox" > <!-- v-for here -->
                <div class="rowData" name="history">
                    <span><h2>{{date.toUpperCase()}}</h2></span>  
                    <span> <h2 name="subscriptionStatus" v-if="isPayed == 1" style="background: #61D766; color: #FFFFFF">RÉGLÉE</h2> 
                            <h2 name="subscriptionStatus" v-else style="background: #D76161; color: #FFFFFF" >NON RÉGLÉE</h2></span>
                </div>
                <div class="rowData" name="action" >
                    <div class="icon" v-if="isPayed == 0">
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/pay.svg"></button>
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/download.svg"></button>
                    </div>
                    <div class="icon" v-else >
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/download.svg"></button>
                    </div>
                </div>
            </div>
            <div class="databox" > <!-- v-for here -->
                <div class="rowData" name="history">
                    <span><h2>{{date.toUpperCase()}}</h2></span>  
                    <span> <h2 name="subscriptionStatus" v-if="isPayed == 1" style="background: #61D766; color: #FFFFFF">RÉGLÉE</h2> 
                            <h2 name="subscriptionStatus" v-else style="background: #D76161; color: #FFFFFF" >NON RÉGLÉE</h2></span>
                </div>
                <div class="rowData" name="action" >
                    <div class="icon" v-if="isPayed == 0">
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/pay.svg"></button>
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/download.svg"></button>
                    </div>
                    <div class="icon" v-else >
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/download.svg"></button>
                    </div>
                </div>
            </div>
            <div class="databox" > <!-- v-for here -->
                <div class="rowData" name="history">
                    <span><h2>{{date.toUpperCase()}}</h2></span>  
                    <span> <h2 name="subscriptionStatus" v-if="isPayed == 1" style="background: #61D766; color: #FFFFFF">RÉGLÉE</h2> 
                            <h2 name="subscriptionStatus" v-else style="background: #D76161; color: #FFFFFF" >NON RÉGLÉE</h2></span>
                </div>
                <div class="rowData" name="action" >
                    <div class="icon" v-if="isPayed == 0">
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/pay.svg"></button>
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/download.svg"></button>
                    </div>
                    <div class="icon" v-else >
                        <button class="IconBtn" ><img src="@/assets/pictograms/reglages/download.svg"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubscriptionComponent',

    data() {
        return {
            billsTitle1: "gestion de l'abonnement ",
            billsTitle2: 'historique de facturation',

            status: "statut",
            cycle: "cycle",
            facturationDate: "prochaine date de facturation",
            user: "utilisateurs",
            paiement: "moyen de paiement",
            visa: "VISA XX5436  EXP: 09/23",

            Payementdate: "date de facture",
            actions: "actions",

            date: "02/06/2022",

            isPayed: "1",

            collaborator: 0,

        }
    },
}
</script>

<style scoped>
/*-------title------*/
#title{
    display: flex;
    flex-direction: row;
    align-items: center;
}
hr{
    width: 40px;
    height: 4px;
    background: #000000;
    margin-right: 23px;
    margin-left: 0;
}
h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 64px;
    /* identical to box height, or 400% */
    display: flex;
    align-items: center;
    color: #000000;
}
h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 64px;
    display: flex;
    align-items: center;
    color: #949494;
}
/*-------------------------------------*/
/*-------Abonnement Data------*/
.subscriptionData{
    display: flex;
    flex-direction: column;
    width: 90%;
    background: #FFFFFF;
    margin: 15px auto;
    padding: 20px 0 50px 0;
}
.rowTitle{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.rowData{
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: center;
}
h4{
    width: fit-content; 
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 34px;
    color: #949494;
    margin: 0 auto;
}
h2{
    width: fit-content;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 34px;
    color: #000000;
    margin: 0 auto;
}[name="subscriptionStatus"]{
    padding: 0 10px 0 10px;
    border-radius: 5px;
}
span{
    width: 20%;
    text-align: center;
}
.editBtn{
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 25px;
    transition: 0.2s;
}
.editBtn:hover{
    scale: 1.3;
    transition: 0.2s;
}
/*-------------------------------------*/
/*-------Abonnement paiement historique------*/
.subscriptionHistory{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 15px auto;
    margin-bottom: 50px;
}
.titleBox{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.rowTitle[name="history"]{
    width: 80%;
    justify-content: space-between;
}
.rowTitle[name="action"]{
    width: 15%;
}
.databox{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.rowData[name="history"]{
    width: 80%;
    justify-content: space-between;
    background: #FFFFFF;
    padding: 12px 0 12px 0;
    align-items: center;
}
.rowData[name="action"]{
    width: 15%;
    background: #FFFFFF;
    padding: 12px 0 12px 0;
    align-items: center;
    text-align: center;
}
.IconBtn{
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    margin: 0 10px 0 10px;
}
.IconBtn:hover{
    scale: 1.3;
    transition: 0.2s;
}
/*-------------------------------------*/

</style>