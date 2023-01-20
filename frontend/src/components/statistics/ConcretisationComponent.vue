<template>
    <div class="Container-wrap">
        <div class="polarChart">
            <h2>Taux de concrétisation</h2>
            <PolarChart class="charts" :percent="datatest"/>
        </div>
        <div class="BarChart">
            <h2>Nbre de visites / Nbre de devis signés</h2>
            <BarChart class="charts"/>
        </div>
    </div> 
</template>

<script>

import BarChart from '@/components/charts/BarCharts.vue'
import PolarChart from '@/components/charts/PolarCharts.vue'

export default {
    name: 'ConcretComponent',

    components: {
        BarChart,
        PolarChart,
    },
    props: {
       datatest: Number,
    },
    data (){
        return{
        
        }
    },
}

</script>

<style scoped>
.Container-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: white;
    width: 100%;
    margin-bottom: 50px;
    padding-bottom: 55px;
    padding-top: 55px;
    border-radius: 15px;
}
h2{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13.4799px;
    line-height: 15px;
    color: #000000;
    margin-bottom: 35px;
}
.polarChart, .BarChart{
    text-align: center;
    display: flex;
    flex-direction: column;
}
.polarChart{
    width: 35%;
}
.BarChart{
    width: 60%;
    margin-right: 25px;
}
.charts{
    height: 250px;
    z-index: 1;
    position: relative;
}
@media screen and (max-width: 1200px) { 
    
}
@media screen and (max-width: 750px) { 
    .Container-wrap{
        flex-direction: column;
        align-items: center;
        border-radius: 15px;
        margin: 0 auto;
        margin-bottom: 25px;
    }
    .BarChart{
        width: 90%;
    }
    .polarChart{
        width: 90%;
        margin-bottom: 25px;
    }
}
</style>