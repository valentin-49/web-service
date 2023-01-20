<template>
    <div class="style">
        <div class="PrefCard" :class="item.id" v-for="(item, number) in $store.state.modules" :id="$store.state.modules.id" :key="number">
            <h1>Disponible</h1>
            <div class="card_picto">
            <img :src="require(`@/assets/pictograms/card/${item.img}`)">
            </div>
            <div id="cardTitle"><h1 name="title">{{ item.title }}</h1></div>
            <button class="BuyButton">Acheter</button>
        </div> 
    </div>   
</template>

<script>
export default {
  name: 'TheCard',
}
</script>

<style scoped>
.style{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    text-align: center;
}
.PrefCard{
    width: 245px;
    height: 163px;
    background: #FFFFFF;
    border-radius: 10.7171px;
    z-index: 1;
    transition: 0.2s;
}
.PrefCard:hover{
    transition: 0.2s;
    box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
.m0{
    margin: 70px;
    margin-top: -50px;
}
.m1{
    margin-top: 50px;
    margin-left: 70px;
}
.m2{
    margin-top:-30px;
    margin-left: 110px;
}
.m3{
    margin-top: 121px;
    margin-left: 110px;
}
.m4{
    margin-top: -20px;
    margin-left: 49px;
}
.m5{
    margin-top: 88px;
    margin-left: 1049px;
}
.m6{
    margin-top: -30px;
    margin-left: 190px;
}
.m7{
margin-top: 70px;
    margin-left: 90px;
}
.m8{
margin-top: -30px;
    margin-left: 90px;
}
.m9{
margin-top: 70px;
    margin-left: 90px;
}

h1{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 44px;
    /* identical to box height, or 492% */
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #CC9933;
    margin-left: 76%;
}
h1[name="title"]{
    margin: 0 auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    color: #000000;
    display: unset;
}
.BuyButton{
    width: 56px;
    height: 16px;
    background: #CC9933;
    border: unset;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    color: #FFFFFF;
    margin: 5px 0px 0px 69%;
    cursor: pointer;
}
#cardTitle{
    margin: 0 auot;
}
</style>
