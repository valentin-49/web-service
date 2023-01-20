<template>
    <div v-if="openComponent == null">
        <div id="title">
            <hr>
            <h1 style="margin-right: 23px">{{ ProfileData.firstname }} {{ ProfileData.lastname }}</h1>
            <button @click="changComponent()" class="radio_label_add">RETOUR</button>
            <div v-if="ProfileData.status === 1">
                <h2 style="background: #61D766; color: #FFFFFF">ACTIF</h2>
            </div>  
            <div v-else>
                <h2 style="background: #DBDBDB" >ARCHIVÉ</h2>
            </div>
        </div>   
        <div class="table">
            <div class="tableRow" name="header">
                <div class="legend">
                    <div class="case1">{{code.toUpperCase()}}</div>
                    <div class="case2">{{name.toUpperCase()}}</div>
                </div>
                <div class="access">
                    {{access.toUpperCase()}}
                </div>
            </div>    
            <div class="tableRow" name="data" >
                <div class="legend" name="datatxt">
                    <div class="case1">AT65</div>
                    <div class="case2">ALPINE</div>
                </div>
                <div class="access" name="datatxt">
                    <div class="check" ><img src="@/assets/pictograms/reglages/bx_checkbox-checked.svg"></div>
                </div>
                <div class="btn" name="datatxt">
                    <button class="accessBtn" @click="ManageAccess(ProfileData)"><img src="@/assets/pictograms/reglages/accessEdit.svg" style="margin-right: 10px">{{BtnText.toUpperCase()}}</button>
                </div>
            </div>
            <div class="tableRow" name="data" >
                <div class="legend" name="datatxt">
                    <div class="case1">BC24</div>
                    <div class="case2">GOOGLE</div>
                </div>
                <div class="access" name="datatxt">
                    <div class="check" ><img src="@/assets/pictograms/reglages/checkbox_not_checked.svg"></div>
                </div>
            <div class="btn" name="datatxt">
                    <button class="accessBtn"><img src="@/assets/pictograms/reglages/accessEdit.svg" style="margin-right: 10px">{{BtnText.toUpperCase()}}</button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="openComponent == 'ManageAccess'">
        <AccessManager :ProfileData="collaboratorData" @changComponent="openComponent = $event"/>
    </div>
</template>

<script>
import AccessManager from "@/components/back_office/collaborators/ManageAccessComponent.vue";
export default {
    name: 'CollaboratorComponent',
   
    components: {
       AccessManager,
    },

    data() {
        return {
            pagetitle: "Collaborateur profile",  
            
            code: "code",
            name: "nom de l'entité / marque",
            access: "accès",

            BtnText: "gérer les accès",

            entitys: [],

            openComponent : null,
        }
    },
    props: {
        ProfileData: Object
    },
    methods: {
    changComponent() {
        this.$emit("changComponent", null);
    },

    ManageAccess(ProfileData) {
        this.collaboratorData = ProfileData;
        this.openComponent = 'ManageAccess';
    },
    }
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
    font-size: 20px;
    line-height: 64px;
    display: flex;
    align-items: center;
    color: #000000;
    
}
h2{
    display: flex;
    width: fit-content;
    height: 35px;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    cursor: pointer;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
}
.radio_label_add{
    width: 189px;
    padding: 5px 0 5px 0;
    text-align: center;
    cursor: pointer;
    align-items: center;
    border-radius: 5px;
    border: unset;
    transition: 0.3s;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    color: #FFFFFF;
    background: #CC9933;
    position: absolute;
    right: 0;
    margin-right: 5%;
    transition: 0.2s;
}
.radio_label_add:hover{
    scale: 1.1;
    transition: 0.2s;
}
/*-------------------------------------*/
.table{
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 25px auto;
}
.tableRow{
    width: 100%;
    display: flex;
    flex-direction: row;
}[name="header"]{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 64px;
    color: #949494;
    
}[name="data"]{
    margin-top: 25px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 64px;
}
.legend{
    display: flex;
    flex-direction: row;
    width: 65%;
}[name="datatxt"]{
    background: #FFFFFF;
}
.access{
    width: 5%;
    text-align: center;
    margin-left: 5%;
}[name="datatxt"]{
    background: #FFFFFF;
}
.btn{
    width: 20%;
    margin-left: 5%;
    text-align: center;
}[name="datatxt"]{
    background: #FFFFFF;
}
.case1{
    width: 20%;
    margin-right: 4%;
    text-align: center;
}
.check{
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    cursor: pointer;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.check:hover{
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}
.accessBtn{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: none;
    background: #FFFFFF;
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 64px;
}
.accessBtn:hover{
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}
</style>
