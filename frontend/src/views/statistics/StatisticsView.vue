<template>
    <div style="text-align: center">
        <img class="notConnected_icon" v-show="connected === 'false'" src="@/assets/pictograms/notConnected.svg"
            alt="Pictogramme de point d'exclamation">
        <p class="warning" v-show="connected === 'false'">{{ message }}</p>
        <input v-show="connected === 'false'" class="modal-button-nav" type="button" @click="goHome()" value="PAGE CONNEXION">
    </div>
    <div class="container" v-show="connected === 'true'">
        <h1>STATISTIQUES</h1>
        <div class="container-wrap"><!--v-show="connected == 'true'"-->
                <div class="charts-1-3" name="1/3" v-if="showModuleTurnover === 1"><TurnoverComponent :TurnOverData="turnoverNumber" :TurnOverPercent="percent" /></div>
                <div class="charts-1-2" name="1/2">
                    <div v-if="showModuleVisits === 1"><VisitsComponent :VisitsData="visits" /></div>
                    <div v-if="showModuleSigned === 1"><QuotationComponent :SignedQuotation="quotation" /></div>
                </div>
                <div class="charts-1-1" name="1/1" v-if="showModuleEvolution === 1"><EvolutionComponent /></div>
                <div class="charts-1-1" name="1/1" v-if="showModuleConcret === 1"><ConcretisationComponent :datatest="data"/></div>
            <div class="addModules">
                <button class="ModifyModulesBtn" @click="changeModuleTurnover()">Chiffre d'affaire</button>
                <button class="ModifyModulesBtn" @click="changeModuleSigned()">Devis</button>
                <button class="ModifyModulesBtn" @click="changeModuleVisits()">Visites</button>
                <button class="ModifyModulesBtn" @click="changeModuleEvolution()">Evolution CA</button>
                <button class="ModifyModulesBtn" @click="changeModuleConcret()">Concrétisation</button>
            </div>
        </div>
    </div>
</template>

<script>
import TurnoverComponent from "@/components/statistics/TurnoverComponent.vue"
import VisitsComponent from "@/components/statistics/VisitsComponent.vue"
import QuotationComponent from "@/components/statistics/QuotationComponent.vue"
import EvolutionComponent from "@/components/statistics/EvolutionChartsComponent.vue"
import ConcretisationComponent from "@/components/statistics/ConcretisationComponent.vue"

export default {
    name: 'StatisticsView',

    components: {
        TurnoverComponent,
        VisitsComponent,
        QuotationComponent,
        EvolutionComponent,
        ConcretisationComponent, 
    },
    onMounted() {
        console.log('test de c mort');
    },
    data() {
        return {

            connected: localStorage.getItem("connected"),
            message: 'Pour accéder au contenu de cette page, veuillez vous connecter',
            
            moduleTitle: 'gestion des modules',

            isinclud: "1",

            ShowModule : "",

            showModuleTurnover: 1,
            showModuleVisits: 1,
            showModuleSigned: 1,
            showModuleEvolution: 1,
            showModuleConcret: 1,

            turnoverNumber: "1.935.025 €",
            percent: "2,3%",

            visits: "2240",
            quotation: "940",

            data: 39.8,

        }
    },
    methods: {
        changeModuleTurnover() {
            if(this.showModuleTurnover === 1){
                this.showModuleTurnover = 0; 
            }else{
                this.showModuleTurnover = 1;
            }
        },
        changeModuleVisits() {
            if(this.showModuleVisits === 1){
                this.showModuleVisits = 0; 
            }else{
                this.showModuleVisits = 1;
            }
        },
        changeModuleSigned() {
            if(this.showModuleSigned === 1){
                this.showModuleSigned = 0; 
            }else{
                this.showModuleSigned = 1;
            }
        },
        changeModuleEvolution() {
            if(this.showModuleEvolution === 1){
                this.showModuleEvolution = 0; 
            }else{
                this.showModuleEvolution = 1;
            }
        },
        changeModuleConcret() {
            if(this.showModuleConcret === 1){
                this.showModuleConcret = 0; 
            }else{
                this.showModuleConcret = 1;
            }
        },
        goHome() {
            window.location.replace('http://localhost:8080/connexion')
        }
    },
}
</script>

<style scoped>
.container{
    width: 90%;
    max-width: 1400px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
}
.container-wrap{
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    justify-content: space-between; 
    align-items: center; 
}
.addModules{
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    background: white;
}
.charts-1-3{
    width: 45%;
}
.charts-1-2{
    width: 45%;
    display: flex;
    flex-direction: column;
}
.charts-1-1{
    width: 100%;
}
.ModifyModulesBtn{
    padding: 15px;
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    background: none;
    border: none;
    border-radius: 10px;
}
.ModifyModulesBtn:hover{
    background: #e2e4e8;
}
h1{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
}
@media screen and (max-width: 1000px) { 
    .container-wrap{
        width: 90%;
    }
}
@media screen and (max-width: 750px) { 
    .container{
        text-align: center;
    }
    .container-wrap{
        justify-content: center;
    }
    .charts-1-2{
        width: 100%;
    }
    .charts-1-3{
        width: 100%;
    }
}
</style>