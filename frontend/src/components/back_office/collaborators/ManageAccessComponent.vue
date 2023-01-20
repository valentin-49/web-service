<template>
    <div>
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
        </div>
        <div class="selectSave">
            <select name="entity" class="select">
                <option value="1"></option>
                <option value="2">SAS</option>
            </select>
            <button @click="save()" class="savebtn">SAUVEGARDER LES MODIFICATIONS</button>
        </div>
        <div class="manageAccess">
            <div class="rowtitle">
                <div class="AllAccess" name="text">
                    {{allAccess.toUpperCase()}}
                </div>
                <div class="CRUDall">
                    <div class="CRUD" name="textcrud">
                        {{read.toUpperCase()}}
                    </div>
                    <div class="CRUD" name="textcrud">
                        {{create.toUpperCase()}}
                    </div>
                    <div class="CRUD" name="textcrud">
                        {{modify.toUpperCase()}}
                    </div>
                    <div class="CRUD" name="textcrud">
                        {{deleted.toUpperCase()}}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="moduleTitle">
                    <img src="@/assets/pictograms/menu/user.svg" class="img">
                    {{ CRM.toUpperCase() }}
                </div>
                <div class="AllAccess">
                    <input type="checkbox">
                </div>
                <div class="CRUDall">
                    <div class="CRUD" name="read">
                        <input type="checkbox">
                    </div>
                    <div class="CRUD" name="create">
                        <input type="checkbox">
                    </div>
                    <div class="CRUD" name="modify">
                        <input type="checkbox">
                    </div>
                    <div class="CRUD" name="delete">
                        <input type="checkbox">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CollaboratorComponent',
   
    components: {
       
    },

    data() {
        return {
            pagetitle: "Collaborateur profile",  
            
            CRM: "crm",

            allAccess: "accés total",
            read: "visualisation",
            create: "création",
            modify: "modification",
            deleted: "suppression",

            user: "user",

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
.selectSave{
    width: 75%;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 75px;
}
.savebtn{
    padding: 13px 64px 13px 64px;
    text-align: center;
    cursor: pointer;
    align-items: center;
    border: unset;
    transition: 0.3s;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    color: #FFFFFF;
    background: #CC9933;
    transition: 0.2s;
    width: 35%;
}
.savebtn:hover{
    scale: 1.1;
    transition: 0.2s;
}
.select{
    width: 35%;
    height: 41px;
    background: #FFFFFF;
    border: none;
}
.rowtitle{
    width: 75%;
    margin: 25px auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.row{
    width: 75%;
    margin: 25px auto;
    display: flex;
    flex-direction: row;
}
.moduleTitle{
    width: 35%;
    background: #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    padding: 22px 0 22px 0;
    display: flex;
    align-items: center;
}
.img{
    margin: 0 15px 0 25px;
}
.AllAccess{
    width: 64.7px;
    background: #FFFFFF;
    margin: 0 11% 0 9%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.CRUDall{
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-between;
}
.CRUD{
    width: 64.7px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
}[name="textcrud"]{
    background: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 64px;
}[name="text"]{
    width: fit-content;
    background: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 64px;
}

</style>
