<template>
    <div class="bodyBox">
        <div class="listBox" v-show="openComponent == null">
            <div id="title">
                <hr>
                <h1>{{ organisationTile.toUpperCase() }}</h1>
            </div>
            <div class="value">
                <ul class="lineEntity">
                    <div class="entityDataList" style="background: none;">
                        <li class="entityId" style="font-weight: 500; font-size: 10px; color: #949494">CODE ENTITÉ</li>
                        <li class="entityName" style="font-weight: 500; font-size: 10px; color: #949494">NOM DE L’ENTITÉ</li>
                        <li class="entityAddress" style="font-weight: 500; font-size: 10px; color: #949494">CODE POSTAL - VILLE</li>
                        <li class="entityState" style="font-weight: 500; font-size: 10px; color: #949494">STATUT</li>
                    </div>
                    <div class="editList" style="background: none; display: flex; justify-content: center">
                        <li class="entityId" style="font-weight: 500; font-size: 10px; color: #949494; width: unset">MODIFIER</li>
                    </div>
                    <div class="userList" style="background: none; display: flex; justify-content: center">
                        <li class="entityId" style="font-weight: 500; font-size: 10px; color: #949494; width: unset">SUPER ADMIN</li>
                    </div>
                </ul>
            </div>
            <div class="entityList">
                <ul v-for="(company, n) in companys[0]" :key="n" class="lineEntity" @click="this.$router.push('/clients/'+id_user.id+'/'+entity.email), updateE(entity.email)">
                    <div class="entityDataList">
                        <li class="entityId">{{ company.company_code }}</li>
                        <li class="entityName">{{ company.company_name }}</li>
                        <li class="entityAddress">{{company.zip}}, {{ company.address }}</li>
                        <li class="entityState" v-if="company.state === 1" style="background: #61D766; color: #FFFFFF">ACTIF</li>
                            <li class="entityState" v-if="company.state === 2" style="background: #DBDBDB">ARCHIVÉ</li>
                    </div>
                    <div class="editList">
                        <button class="modifyEntity" @click="modify_company(company)"><img src="@/assets/pictograms/reglages/modifyEntity.svg"></button>
                    </div>
                    <div class="userList">
                        <button class="modifyEntity"><img src="@/assets/pictograms/reglages/User.svg"></button>
                    </div>
                 </ul>
            </div>
        </div>
        <div class="listBox" v-show="openComponent == null" style="margin-top: 100px; margin-bottom: 100px">
            <div id="title">
                <hr>
                <h1>{{ entityTitle.toUpperCase() }}</h1>
                <input type="radio" id="addEntity" class="radio_hide" value="addEntity" v-model="openComponent">
                <label class="radio_label_add" for="addEntity">AJOUTER UNE ENTITÉ / MARQUE</label>
            </div> 
            <div class="value">
                <ul class="lineEntity">
                    <div class="entityDataList" style="background: none;">
                        <li class="entityId" style="font-weight: 500; font-size: 10px; color: #949494">CODE ENTITÉ</li>
                        <li class="entityName" style="font-weight: 500; font-size: 10px; color: #949494">NOM DE L’ENTITÉ</li>
                        <li class="entityAddress" style="font-weight: 500; font-size: 10px; color: #949494">CODE POSTAL - VILLE</li>
                        <li class="entityState" style="font-weight: 500; font-size: 10px; color: #949494">STATUT</li>
                    </div>
                    <div class="editList" style="background: none; display: flex; justify-content: center">
                        <li class="entityId" style="font-weight: 500; font-size: 10px; color: #949494; width: unset">MODIFIER</li>
                    </div>
                    <div class="userList" style="background: none; display: flex; justify-content: center">
                        <li class="entityId" style="font-weight: 500; font-size: 10px; color: #949494; width: unset">UTILISATEURS</li>
                    </div>
                </ul>
            </div>
            <div class="entityList">
                <ul v-for="(entity, n) in entitys[0]" :key="n" class="lineEntity" >
                    <div class="entityDataList">
                        <li class="entityId">{{ entity.code_interne }}</li>
                        <li class="entityName">{{ entity.name_commercial }}</li>
                        <li class="entityAddress">{{entity.zip}}, {{ entity.address }}</li>
                        <li class="entityState" v-if="entity.state === 1" style="background: #61D766; color: #FFFFFF">ACTIF</li>
                            <li class="entityState" v-if="entity.state === 2" style="background: #DBDBDB">ARCHIVÉ</li>
                    </div>
                    <div class="editList">
                        <button class="modifyEntity" @click="modify_entity(entity)"><img src="@/assets/pictograms/reglages/modifyEntity.svg"></button>
                    </div>
                    <div class="userList">
                        <button class="modifyEntity"><img src="@/assets/pictograms/reglages/User.svg"></button>
                    </div>
                    
                 </ul>
            </div>
        </div>
       
            <div v-show="openComponent === 'addEntity'">
                <AddEntity @changComponent="openComponent = $event"/>
            </div>
    
            <div v-show="openComponent === 'ModifyEntity'">
                <ModifyEntity :entityModify="entityData" @changComponent="openComponent = $event"/>
            </div>
        
            <div v-show="openComponent === 'ModifyCompany'">
                <ModifyCompany :companyModify="companyData" @changComponent="openComponent = $event"/>
            </div>
        
    </div>
</template>

<script>
import axios from "axios";
import AddEntity from "@/components/back_office/organisation/AddEntityComponent.vue";
import ModifyEntity from "@/components/back_office/organisation/ModifyEntityComponent.vue";
import ModifyCompany from "@/components/back_office/organisation/ModifyCompanyComponent.vue";

export default {
    name: 'organisationComponent',

    components: {
       AddEntity,
       ModifyEntity,
       ModifyCompany
    },
    
    data() {
        return {
            organisationTile: 'organisation principale',
            entityTitle: 'entités / marques',

            openComponent : null, 

            company_id: localStorage.getItem('company_id'),

            companys: [],
            entitys: [],

            entityData: '',
            companyData: '', 
        }
    },
    created() {
        this.listAllEntity();
        this.listAllCompany();
        console.log('organisationView')
    },
    methods: {
        goHome() {
            window.location.replace('http://localhost:8080/connexion')
        },
        listAllEntity() {
        axios.get('http://localhost:3000/liste_entites/' + localStorage.getItem('company_id'), {headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                if (this.entitys.length !== 0) {
                this.entitys.splice(0, this.entitys.length)
                }
                this.entitys.push(res.data.data) 
            })
            .catch(() => {
            })
        }, 
        listAllCompany() {
        axios.get('http://localhost:3000/liste_companys/' + localStorage.getItem('company_id'), {headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                if (this.companys.length !== 0) {
                this.companys.splice(0, this.companys.length)
                }
                this.companys.push(res.data.data) 
            })
            .catch(() => {
            })
        },  
        
        modify_entity(entity) {
            this.entityData = entity;
            this.openComponent = 'ModifyEntity';
        },
        modify_company(company) {
            this.companyData = company;
            this.openComponent = 'ModifyCompany';
        },
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
.radio_label_add{
    width: 257px;
    padding: 5px 0 5px 0;
    text-align: center;
    cursor: pointer;
    align-items: center;
    border-radius: 5px;
    transition: 0.3s;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    color: #FFFFFF;
    background: #CC9933;
    border-radius: 5px;
    margin-left: 65%;
    transition: 0.2s;
}
.radio_label_add:hover{
    scale: 1.1;
    transition: 0.2s;
}
.lineTitles{
    display: flex;
    flex-direction: row;
    margin: 0px auto;
    width: 93%;
    margin-bottom: -30px;
}
.lineEntity{
    display: flex;
    flex-direction: row;
    width: 93%;
    margin: 25px auto;
    justify-content: space-around;
}
.entityDataList{
    display: flex;
    flex-direction: row;
    width: 70%;
    background: #FFFFFF;
    align-items: center;
}
.editList{
    width: 10%;
    background: #FFFFFF;
}
.userList{
    width: 10%;
    background: #FFFFFF;
}
.entityId{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 64px;
    display: flex;
    align-items: center;
    color: #000000;
    margin-left: 2%;
    margin-right: 5%;
    width: 10%;
}
.entityName{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 64px;
    color: #000000;
    margin-right: 5%;
    width: 20%;
}
.entityAddress{
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 300;
    font-size: 15px;
    line-height: 64px;
    color: #000000; 
    width: 35%;
    margin-right: 10%;
}
.entityState{
    display: flex;
    width: 76px;
    height: 35px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
}
.modifyEntity{
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    cursor: pointer;
}
.modifyEntity:hover{
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}
@media screen and (max-width: 750px) { 
    .value{
        display: none;
    }
    .lineEntity{
        flex-direction: column;
        background: #FFFFFF;
        width: 70%;
    }
    .entityDataList{
        flex-direction: column;
    }
}
</style>
