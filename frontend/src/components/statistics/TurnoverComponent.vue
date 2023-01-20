<template>
    <div class="Container-wrap">
        <div class="content">
            <h3 name="turnover">Chiffre d'affaire</h3>
            <h2 name="turnover" >{{ TurnOverData }}</h2>
            <div class="statsTurnover">
                <img class="turnoverImg" src="@/assets/pictograms/statistics/turnOverPositive.svg">
                <h4 name="turnover">{{ TurnOverPercent }}</h4>
            </div>
        </div>
    </div> 
</template>

<script>

export default {
    name: 'TurnoverComponent',
   
    props: {
        TurnOverData: Number,
        TurnOverPercent: Number,
    },
}

</script>

<style scoped>
.Container-wrap{
    width: 100%;
    padding-bottom: 25px;
    padding-top: 25px;
    background: white;
    margin-right: 25px;
    margin-bottom: 25px;
    border-radius: 15px;
}
.content{
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
h2,h3,h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
}
h2{
    font-size: 48px;
    line-height: 48px;
    color: #353535;
}
h3{
    font-size: 23px;
    line-height: 12px;
}
h4{
    font-size: 18px;
    line-height: 12px;
    color: #61D766;
}
.statsTurnover {
    display: flex;
    flex-direction: row;
}
.turnoverImg{
    width: 15px;
    margin-right: 5px;
}
@media screen and (max-width: 750px) { 
    .Container-wrap{
        width: fit-content;
        min-width: 50%;
        padding: 35px;
        border-radius: 15px;
        margin: 0 auto;
        margin-bottom: 25px;
    }
    h2{
       
    }
    .content{
        margin: 0 auto;
        text-align: center;
    }
    .statsTurnover{
        display: flex;
        justify-content: center;
    }
}
</style>