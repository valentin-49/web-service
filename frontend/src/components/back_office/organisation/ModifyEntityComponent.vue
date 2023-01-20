<template>
    <div>
        <div id="title">
            <hr>
            <h1 style="margin-right: 23px">{{ pagetitle.toUpperCase() }}</h1>
            <button @click="changComponent()" class="radio_label_add">RETOUR</button>
        </div>
        <div class="addEntityForm">
            <div class="columnForm">
                <div class="formRow">
                    <label class="labelsForm" for="firstname">CODE ENTITÉ</label>
                    <input class="inputTxtForm" type="text" id="firstname" name="firstname" v-bind:placeholder="entityModify.code_interne">
                </div>
                <div class="formRow">
                    <label class="labelsForm" for="type_select">TYPE</label>
                    <select class="inputTxtForm" name="civility" id="type_select" style="background: white; width: 431px; height: 41px;" >
                        <option value="" v-bind:placeholder="entityModify.entity_type"></option>
                        <option value="1">SARL</option>
                        <option value="2">SAS</option>
                        <option value="3">SA</option>
                        <option value="4">EURL</option>
                        <option value="5">EI</option>
                        <option value="6">SNC</option>
                    </select>
                </div>
                <div class="formRow">
                    <label class="labelsForm" >DÉNOMINATION SOCIALE</label>
                    <input class="inputTxtForm" type="text"  v-bind:placeholder="entityModify.name_social">
                </div>
                <div class="formRow">
                    <label class="labelsForm" >NOM COMMERCIAL</label>
                    <input class="inputTxtForm" type="text" v-bind:placeholder="entityModify.name_commercial">
                </div>
                <div class="formMultipleRow">
                    <div class="formRow">
                        <label class="labelsForm">N° SIRET</label>
                        <input id="siret" type="text" v-bind:placeholder="entityModify.siret" >
                    </div>
                    <div class="formRow">
                        <label class="labelsForm" >CODE APE</label>
                        <input id="APE" type="text" v-bind:placeholder="entityModify.code_APE" >
                    </div>
                </div>
                <div class="formRow">
                    <label class="labelsForm" >N° TVA</label>
                    <input class="inputTxtForm" type="text" v-bind:placeholder="entityModify.TVA">
                </div>
                <div class="formRow">
                    <label class="labelsForm" >CAPITAL SOCIAL</label>
                    <input class="inputTxtForm" type="text" v-bind:placeholder="entityModify.social_capital">
                </div>
            </div>
            <div class="columnForm"> 
                <div class="formRow">
                    <label class="labelsForm" >ADRESSE</label>
                    <input class="inputTxtForm" type="text" v-bind:placeholder="entityModify.address">
                </div>
                <div class="formMultipleRow">
                    <div class="formRow">
                        <label class="labelsForm" >CODE POSTAL</label>
                        <input id="zip" type="text" v-bind:placeholder="entityModify.zip">
                    </div>
                    <div class="formRow">
                        <label class="labelsForm" >VILLE</label>
                        <input id="city" type="text" v-bind:placeholder="entityModify.city">
                    </div>
                </div>
                <div class="formMultipleRow">
                    <div class="formRow">
                        <label class="labelsForm" >N° TÉLÉPHONE</label>
                        <input id="phone" type="phone" v-bind:placeholder="entityModify.phone">
                    </div>
                    <div class="formRow">
                        <label class="labelsForm" >N° FAX</label>
                        <input id="fax" type="text" v-bind:placeholder="entityModify.fax" >
                    </div>
                </div>
                <div class="formRow">
                    <label class="labelsForm" >ADRESSE E-MAIL</label>
                    <input class="inputTxtForm" type="mail"  v-bind:placeholder="entityModify.mail">
                </div>
                <div class="formRow">
                    <label class="labelsForm" >SITE INTERNET</label>
                    <input class="inputTxtForm" type="text" v-bind:placeholder="entityModify.website" >
                </div>
                <div class="formMultipleRow">
                    <div class ="formRow">
                        <label class="labelsForm" >LOGO</label>
                        <input id="logo" type="text" v-bind:placeholder="entityModify.logo_picture">
                    </div>
                    <div class ="formRow">
                         <div class="logoDrag" @click="selectFile()">
                            <input class="hidden" ref="file" type="file">
                        </div>
                    </div>
                </div>
                <div class="formRow">
                    <button type="submit" class="buttonsForm" @click="insertEntity()">
                        <label>SAUVEGARDER</label>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


 
export default {
    name: 'organisationComponent',
   
    data() {
        return {
            pagetitle: "MODIFICATION D’UNE ENTITÉ / MARQUE",    
        }
    },
    props: {
        entityModify: Array,
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
    font-size: 16px;
    line-height: 64px;
    display: flex;
    align-items: center;
    color: #000000;
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
#siret{
    width: 239px;
    height: 41px;
    background: #FFFFFF;
    border: none;
    margin-bottom: 27px;
    margin-right: 26px;
}
#APE{
    width: 163px;
    height: 41px;
    background: #FFFFFF;
    border: none;
    margin-bottom: 27px;
}
#zip{
    width: 142px;
    height: 41px;
    background: #FFFFFF;
    border: none;
    margin-bottom: 27px;
    margin-right: 26px;
}

#city{
    width: 256px;
    height: 41px;
    background: #FFFFFF;
    border: none;
    margin-bottom: 27px;
}
#phone{
    width: 213px;
    height: 41px;
    background: #FFFFFF;
    border: none;
    margin-bottom: 27px;
    margin-right: 26px;
}

#fax{
    width: 188px;
    height: 41px;
    background: #FFFFFF;
    border: none;
    margin-bottom: 27px;
}
#logo{
    width: 326px;
    height: 41px;
    background: #FFFFFF;
    border: none;
    margin-bottom: 27px;
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
</style>
