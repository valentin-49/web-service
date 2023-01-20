<template>
    <div>
        <h1>INFORMATION CLIENT - {{ clientName.toUpperCase() }}</h1>
        <div class="container">
            <div class="infobase">
                <h2 class="titleCard">{{ infoTitle.toUpperCase() }} :</h2>
                <div class="infoClient">
                    <div class="infoWrap">
                        <h4>Nom :</h4>
                        <h3>BOUET</h3>
                    </div>
                    <div class="infoWrap">
                        <h4>Prénom :</h4>
                        <h3>VALENTIN</h3>
                    </div>
                    <div class="infoWrap">
                        <h4>Téléphone :</h4>
                        <h3>06 72 40 56 59</h3>
                    </div>
                    <div class="infoWrap">
                        <h4>E-mail :</h4>
                        <h3>valbouet@outlook.fr</h3>
                    </div>
                </div>
            </div>
            <div class="infoAddress">
                <div class="address" name="start">
                    <h2>{{ departure.toUpperCase() }} :</h2>
                    <div class="addressData">
                        <h3>70 ter boulevard guy chouteau</h3>
                        <GoogleMap/>
                    </div>
                </div>
                <div class="address" name="end">
                    <h2>{{ arrival.toUpperCase() }} :</h2>
                    <div class="addressData">
                        <h3>11 Rue Eugéne Pergelline</h3>
                        <GoogleMap/>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue"

export default {
    components: {
        GoogleMap,
    },
    data(){
        return {
            clientName: 'Bouet valentin',
            infoTitle: 'info client',
            departure: 'adresse de départ',
            arrival: "adresse d'arriver",
        }
    }
}
</script>

<style scoped>
h1, h2, h3, h4{
    color: #000000;
}
h1{
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
}
h2{
    font-weight: 600;
    font-size: 20px;
    line-height: 15px;
}
.titleCard{
    margin-left: 25px;
    margin-top: 25px;
}
.container, .infobase, .infoAddress, .addressData{
    width: 100%;
    display: flex;
}
.container, .infobase, .address{
    flex-direction: column;
}
.infobase{
    border-radius: 10px;
    background: white;
    max-width: 100%;
    min-height: 200px;
    height: fit-content;
    margin: 50px auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.infoAddress, .addressData{
    flex-direction: row;
    justify-content: space-between;
}
.address{
    width: 40%;
    border-radius: 10px;
    background: white;
    min-height: 200px;
    padding: 25px;
    height: fit-content;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.infoClient{
    margin-left: 25px;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.infoWrap{
    margin-left: 25px;
    margin-right: 25px;
    text-align: center;
}
.addressData{
    align-items: center;
}
</style>