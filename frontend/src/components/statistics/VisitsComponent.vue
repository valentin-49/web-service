<template>
    <div class="Container-wrap">
            <h4 name="turnover">Visites réalisées</h4>
            <h2 name="turnover" >{{ VisitsData }}</h2>
        </div> 
</template>

<script>

export default {
    name: 'VisitsComponent',
   
    props: {
        VisitsData: Number,
    },
}

</script>

<style scoped>
.Container-wrap{
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;
}
h2,h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
}
h2{
    font-size: 60px;
    line-height: 48px;
    color: #353535;
}
h4{
    font-size: 16px;
    line-height: 12px;
}
@media screen and (max-width: 750px) { 
    .Container-wrap{
        flex-direction: column;
        justify-content: center;
        width: fit-content;
        min-width: 50%;
        padding: 35px;
        border-radius: 15px;
        margin: 0 auto;
        margin-bottom: 25px;
    }
}
</style>