<template>
    <div id="title">
        <hr>
        <h1 style="margin-right: 23px">{{ pagetitle.toUpperCase() }}</h1>
        <button @click="changComponent()" class="radio_label_add">RETOUR</button>
    </div>   
   <div class="addEntityForm">
            <div class="columnForm">
                <div class="formRow">
                    <label class="labelsForm" for="type_select">{{civility.toUpperCase()}}</label>
                    <select class="inputTxtForm" name="civility" id="type_select" style="background: white; width: 431px; height: 41px;">
                        <option value=""></option>
                        <option value="1">Madame</option>
                        <option value="2">Monsieur</option>
                    </select>
                </div>
                <div class="formRow">
                    <label class="labelsForm" >{{ lastname.toUpperCase() }}</label>
                    <input class="inputTxtForm" type="text"  v-bind:placeholder="ProfileData.lastname">
                </div>
                <div class="formRow">
                    <label class="labelsForm" >{{firstname.toUpperCase()}}</label>
                    <input class="inputTxtForm" type="text" v-bind:placeholder="ProfileData.firstname">
                </div>
                <div class="formRow">
                    <label class="labelsForm" for="type_select">{{job.toUpperCase()}}</label>
                    <select class="inputTxtForm" name="civility" id="type_select" style="background: white; width: 431px; height: 41px;" >
                        <option value=""></option>
                        <option value="1">Administratif</option>
                        <option value="2">Commercial</option>
                        <option value="1">RH</option>
                        <option value="2">Démennageur</option>
                        <option value="1">5</option>
                        <option value="2">6</option>
                    </select>
                </div>
            </div>
            <div class="columnForm"> 
                <div class="formRow">
                    <label class="labelsForm" >{{ phone.toUpperCase() }}</label>
                    <input class="inputTxtForm" type="text" v-bind:placeholder="ProfileData.phone">
                </div>
                <div class="formRow">
                    <label class="labelsForm" >{{mail.toUpperCase()}}</label>
                    <input class="inputTxtForm" type="text" v-bind:placeholder="ProfileData.email">
                </div>
                <div class="formRow">
                    <button type="submit" class="buttonsForm" @click="insertEntity()">
                        <label>{{add.toUpperCase()}}</label>
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'CollaboratorComponent',
   
    data() {
        return {
            pagetitle: "Modifier Collaborateur",    

            civility: "civilité",
            lastname: "prénom",
            firstname: "nom",
            job: "poste occupé",
            phone: "téléphone",
            mail: "adresse e-mail",
            password: "mot de passe temporaire",

            add: "modifier un collaborateur",
        }
    },
    props: {
        ProfileData: Array
    },
    methods: {
    changComponent() {
        this.$emit("changComponent", null);
        },
    }
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
    font-size: 20px;
    line-height: 64px;
    /* identical to box height, or 400% */
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
.addEntityForm{
    width: 70%;
    display: flex;
    flex-direction: row;
    margin: 20px auto;
    margin-left: 15%;
}
.columnForm{
    
    width: 50%;
    margin-top: 50px;
}
.formRow{
    display: flex;
    flex-direction: column;
}
.formMultipleRow{
    display: flex;
    flex-direction: col;
}
.labelsForm{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: #000000;
    margin-bottom: 13px;
}
.inputTxtForm{
    width: 431px;
    height: 41px;
    background: #FFFFFF;
    border: none;
    margin-bottom: 27px;
}
.buttonsForm{
    width: 435px;
    height: 41px;
    margin-top: 27px;
    background: #CC9933;
    color: #FFFFFF;
    border: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.05em;
    cursor: pointer;
}
.buttonsForm:hover{
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}
.logoDrag{
    width: 84px;
    height: 41px;
    border: none;
    margin-top: 30px;
    margin-left: 21px;
    cursor: pointer;
    background: url("@/assets/pictograms/reglages/logoDrag.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-color: #FFFFFF;
}
.logoDrag:hover{
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}
.hidden{
    display: none;
}
.radio_label_add{
    width: 189px;
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
    margin-right: 5%;
    transition: 0.2s;
}
.radio_label_add:hover{
    scale: 1.1;
    transition: 0.2s;
}
</style>
