<template>
    <div>
        <div id="title">
            <hr>
            <h1>{{ moduleTitle.toUpperCase() }}</h1>
        </div>
        <div class="container-wrap">
            <div class="row-wrap" name="title">
                <div class="section-wrap" name="one">
                    <h4>NOM DU MODULE</h4>
                    <div class="statut"><h4>STATUT</h4></div>
                </div>
                <div class="section-wrap" name="two">
                    <h4>PARAMÈTRES</h4>
                </div>
                <div class="section-wrap" name="three">
                    <h4>ABONNEMENT</h4>
                </div>
            </div>
            <div class="row-wrap" name="row">
                <div class="section-wrap" name="one" style="background: white">
                    <div class="menu_item">
                        <div class="menu_arrow">
                            <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
                        </div>
                        <div class="menu_picto" >
                            <img src="@/assets/pictograms/menu/home.svg" alt="Pictogramme des devis et facturations">
                        </div>
                        <h1>ACCEUIL</h1>
                    </div>
                    <div class="statut">
                         <span> <h2 name="subscriptionStatus" v-if="isinclud == 1" style="background: #61D766; color: #FFFFFF">INCLUS</h2> 
                            <h2 name="subscriptionStatus" v-else style="background: #8382FF; color: #FFFFFF" >ACHETÉ</h2></span>
                    </div>
                </div>
                <div class="section-wrap" name="two" style="background: white">
                    <button class="modifyEntity"><img src="@/assets/pictograms/menu/preference.svg" alt="Pictogramme des devis et facturations" class="img-wrap"></button>
                </div>
                <div class="section-wrap" name="three" style="background: white">
                    <button class="modifyEntity"><img src="@/assets/pictograms/reglages/pay.svg" alt="Pictogramme des devis et facturations" class="img-wrap"></button>
                </div>
            </div>    
            <div class="row-wrap" name="row">
                <div class="section-wrap" name="one" style="background: white">
                    <div class="menu_item">
                        <div class="menu_arrow">
                            <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
                        </div>
                        <div class="menu_picto" >
                            <img src="@/assets/pictograms/menu/user.svg" alt="Pictogramme des devis et facturations">
                        </div>
                        <h1>CRM</h1>
                    </div>
                    <div class="statut">
                         <span> <h2 name="subscriptionStatus" v-if="isinclud == 1" style="background: #61D766; color: #FFFFFF">INCLUS</h2> 
                            <h2 name="subscriptionStatus" v-else style="background: #8382FF; color: #FFFFFF" >ACHETÉ</h2></span>
                    </div>
                </div>
                <div class="section-wrap" name="two" style="background: white">
                    <button class="modifyEntity"><img src="@/assets/pictograms/menu/preference.svg" alt="Pictogramme des devis et facturations" class="img-wrap"></button>
                </div>
                <div class="section-wrap" name="three" style="background: white">
                    <button class="modifyEntity"><img src="@/assets/pictograms/reglages/pay.svg" alt="Pictogramme des devis et facturations" class="img-wrap"></button>
                </div>
            </div> 
            <div class="row-wrap" name="row">
                <div class="section-wrap" name="one" style="background: white">
                    <div class="menu_item">
                        <div class="menu_arrow">
                            <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
                        </div>
                        <div class="menu_picto" >
                            <img src="@/assets/pictograms/menu/agenda.svg" alt="Pictogramme des devis et facturations">
                        </div>
                        <h1>AGENDA</h1>
                    </div>
                    <div class="statut">
                         <span> <h2 name="subscriptionStatus" v-if="isinclud == 1" style="background: #61D766; color: #FFFFFF">INCLUS</h2> 
                            <h2 name="subscriptionStatus" v-else style="background: #8382FF; color: #FFFFFF" >ACHETÉ</h2></span>
                    </div>
                </div>
                <div class="section-wrap" name="two" style="background: white">
                    <button class="modifyEntity"><img src="@/assets/pictograms/menu/preference.svg" alt="Pictogramme des devis et facturations" class="img-wrap"></button>
                </div>
                <div class="section-wrap" name="three" style="background: white">
                    <button class="modifyEntity"><img src="@/assets/pictograms/reglages/pay.svg" alt="Pictogramme des devis et facturations" class="img-wrap"></button>
                </div>
            </div> 
            <div class="row-wrap" name="row">
                <div class="section-wrap" name="one" style="background: white">
                    <div class="menu_item">
                        <div class="menu_arrow">
                            <img src="@/assets/pictograms/menu/right_arrow.svg" alt="Pictogramme de flèche vers la droite">
                        </div>
                        <div class="menu_picto" >
                            <img src="@/assets/pictograms/menu/gardeMeuble.svg" alt="Pictogramme des devis et facturations">
                        </div>
                        <h1>GARDE-MEUBLES</h1>
                    </div>
                    <div class="statut">
                         <span> <h2 name="subscriptionStatus" v-if="isinclud == 0 " style="background: #61D766; color: #FFFFFF">INCLUS</h2> 
                            <h2 name="subscriptionStatus" v-else style="background: #8382FF; color: #FFFFFF" >ACHETÉ</h2></span>
                    </div>
                </div>
                <div class="section-wrap" name="two" style="background: white">
                    <button class="modifyEntity"><img src="@/assets/pictograms/menu/preference.svg" alt="Pictogramme des devis et facturations" class="img-wrap"></button>
                </div>
                <div class="section-wrap" name="three" style="background: white">
                    <button class="modifyEntity"><img src="@/assets/pictograms/reglages/pay.svg" alt="Pictogramme des devis et facturations" class="img-wrap"></button>
                </div>
            </div>       
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModuleComponent',

    data() {
        return {
            moduleTitle: 'gestion des modules',

            isinclud: "1",
        }
    },
}
</script>

<style scoped>
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
    /* identical to box height, or 400% */
    display: flex;
    align-items: center;
    color: #000000;
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
h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 64px;

    /* identical to box height, or 640% */
    display: flex;
    justify-content: center;

    color: #949494;
}

.container-wrap{
    width: 90%;
    height: 60px;
    margin: 0 auto;
}
.row-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}[name="row"]{
    margin-bottom: 25px;
}
.section-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}[name="one"]{
    width: 70%;
    padding-left: 20px;
    padding-right: 20px;
}[name="two"]{
    width: 12%;
    justify-content: center;
}[name="three"]{
    width: 12%;
    justify-content: center;
}
.icon-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.menu_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
}
.img-wrap{
    width: 28px;
    margin-top: 15px;
    margin-bottom: 15px;
}
.modifyEntity{
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    cursor: pointer;
    background: #FFFFFF;
}
.modifyEntity:hover{
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}
.menu_picto{
    margin-right: 10px;
}
.menu_arrow{
    margin-right: 10px;
}
.statut{
    width: 10%;
}
</style>