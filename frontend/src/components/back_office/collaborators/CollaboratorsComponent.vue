<template>
    <div style="margin-bottom: 50px">
        <div v-if="openComponent == null">
            <div id="title">
                <hr>
                <h1>{{ collaboratorTitle.toUpperCase() }}</h1>
                <input type="radio" id="addcollaborator" class="radio_hide" value="addcollaborator" v-model="openComponent">
                <label class="radio_label_add" for="addcollaborator">AJOUTER UN COLLABORATEUR</label>
            </div>
            <div class="tablecollaborators">
                <div class="tablerowtitle">
                    <table class="datatable" style="width: 100%;">
                            <tr class="rowtitle">
                                <td style="width: 10%; text-align: center">{{collaboratorsListTitle.stats.toUpperCase() }}</td>
                                <td style="width: 20%">{{collaboratorsListTitle.firstname.toUpperCase() }}</td>
                                <td style="width: 20%">{{collaboratorsListTitle.lastname.toUpperCase() }}</td>
                                <td style="width: 30%; ">{{collaboratorsListTitle.mail.toUpperCase() }}</td>
                                <td style="width: 20%; text-align: center">{{ collaboratorsListTitle.status.toUpperCase()}}</td>                    
                            </tr>
                        </table>
                </div>
                <div class="tablerowtitlebtn">
                    <table class="datatable" style="width: 100%">
                        <tr class="rowtitlebtn">
                            <td>{{collaboratorsListTitle.poste.toUpperCase()}}</td>
                            <td>{{collaboratorsListTitle.modify.toUpperCase()}}</td>
                            <td>{{collaboratorsListTitle.access.toUpperCase()}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="tablecollaborators" v-for="(collaborator, n) in collaborators[0]" :key="n">
                <div class="tablerowdata">
                    <table class="datatable" style="width: 100%; height: 50px">
                        <tr>
                            <td name="stats"><button class="statsbtn"><img src="@/assets/pictograms/reglages/collaboratorsStats.svg" ></button></td>
                            <td name="firstname">{{collaborator.firstname}}</td>
                            <td name="lastname">{{collaborator.lastname}}</td>
                            <td name="mail564656" >{{collaborator.email}}</td>
                            <td name="status" v-if="collaborator.status === 1"><h2 style="background: #61D766; color: #FFFFFF">ACTIF</h2></td>
                                <td name="status" v-if="collaborator.status === 0"><h2 style="background: #DBDBDB" >ARCHIVÉ</h2></td>
                        </tr>
                    </table>
                </div>
                <div class="tablerowbtn">
                    <table style="width: 100%">
                        <tr class="btndata">
                            <td name="poste" v-if="collaborator.roles === 1"><h2 class="modifyEntity">Démennageur</h2></td>
                                <td name="poste" v-if="collaborator.roles === 2"><h2 class="modifyEntity">Commercial</h2></td>
                                    <td name="poste" v-if="collaborator.roles === 3"><h2 class="modifyEntity">Administratif</h2></td>
                                        <td name="poste" v-if="collaborator.roles === 4"><h2 class="modifyEntity">Random</h2></td>
                            <td name="modify"><button class="modifyEntity" @click="collaboratorModify(collaborator)"><img src="@/assets/pictograms/reglages/usermodify.svg"></button></td>
                            <td name="access"><button class="modifyEntity" @click="collaboratorProfil(collaborator)"><img src="@/assets/pictograms/reglages/access.svg"></button></td>
                        </tr>
                    </table>
                </div> 
            </div>
        </div>
            <div v-if="openComponent == 'addcollaborator'">
                <AddCollaborator @changComponent="openComponent = $event"/>
            </div>
            <div v-if="openComponent == 'CollaboratorProfile'">
                <CollaboratorProfile :ProfileData="collaboratorData" @changComponent="openComponent = $event"/>
            </div>
            <div v-if="openComponent == 'ModifyCollaborator'">
                <ModifyCollaborator :ProfileData="collaboratorData" @changComponent="openComponent = $event"/>
            </div>
    </div>
</template>

<script>
import axios from "axios";
import AddCollaborator from "@/components/back_office/collaborators/AddCollaboratorComponent.vue";
import CollaboratorProfile from "@/components/back_office/collaborators/CollaboratorProfileComponent.vue";
import ModifyCollaborator from "@/components/back_office/collaborators/ModifyCollaboratorComponent.vue"

export default {
    name: 'CollaboratorComponent',

    components: {
       AddCollaborator,
       CollaboratorProfile,
       ModifyCollaborator
    },

    data() {
        return {
            collaboratorsListTitle: {
                stats: "stats",
                firstname: "nom",
                lastname: "prénom",
                mail: "e-mail/identifiant",
                status: "statut",
                poste: "poste",
                modify: "modifier",
                access: "accès",
            },

            openComponent : null,

            collaboratorTitle: 'Gestion des collaborateurs',
            company_id: localStorage.getItem('company_id'),

            collaborators: [],

            collaboratorData : '',
        }
    },
    created() {
        this.listAllCollaborators();
        console.log('collaboratorsView')
    },
    methods: {
        listAllCollaborators() {
        axios.get('http://localhost:3000/liste_collaborators/' + localStorage.getItem('company_id'), {headers: {'Content-Type': 'application/json'}})
            .then((res) => {
                if (this.collaborators.length !== 0) {
                this.collaborators.splice(0, this.collaborators.length)
                }
                this.collaborators.push(res.data.data) 
            })
            .catch(() => {
            })
        }, 
        collaboratorProfil(collaborator) {
            this.collaboratorData = collaborator;
            this.openComponent = 'CollaboratorProfile';
        },
        collaboratorModify(collaborator) {
            this.collaboratorData = collaborator;
            this.openComponent = 'ModifyCollaborator';
        }
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
    font-size: 16px;
    line-height: 64px;
    /* identical to box height, or 400% */
    display: flex;
    align-items: center;
    color: #000000;
}
h2{
    display: flex;
    width: 76px;
    height: 35px;
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 16px;
    cursor: pointer;
    margin: 0 auto;
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
    position: absolute;
    right: 0;
    margin-right: 6%;
    transition: 0.2s;
}
.radio_label_add:hover{
    scale: 1.1;
    transition: 0.2s;
}
/*-------------------------------------*/
.tablecollaborators{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 93%;
    align-items: center;
    margin: 25px auto;
}
.tablerowdata{
    width: 65%;
    background: #FFFFFF;
}
.tablerowtitle{
    width: 65%;
}
.tablerowtitlebtn{
    width: 30%;
    display: flex;
    justify-content: space-around;
}
.tablerowbtn{
    width: 30%;
}
.rowtitlebtn{
    display: flex;
    justify-content: space-around;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 64px;
    color: #949494;
}
.btndata{
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-left: 1%;
}
td{
    height: 64px;
    margin: 0;
    padding: 0;
}[name="stats"]{
    width: 10%;
    text-align: center;
}[name="firstname"]{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    width: 20%;
}[name="lastname"]{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    width: 20%;
}[name="mail564656"]{
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 300;
    font-size: 15px;
    width: 30%;
    overflow: hidden;
}[name="status"]{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    display: flex;
    margin: 0px auto;
    align-items: center;
}[name="poste"]{
    width: 30%;
   
}[name="modify"]{
    width: 30%;
   
}[name="access"]{
    width: 30%;
}
.rowtitle{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 64px;
    color: #949494;
    display: flex;
    flex-direction: row;
}
.modifyEntity{
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    cursor: pointer;
    background: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 64px;
}
.modifyEntity:hover{
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}
.statsbtn{
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 15px;
}
.statsbtn:hover{
    scale: 1.2;
    transition: 0.2s;
}

</style>