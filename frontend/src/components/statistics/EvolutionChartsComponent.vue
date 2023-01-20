<template>
    <div class="Container-wrap">
        <div class="data-wrap">
            <h2>Evolution CA</h2>
            <div class="year">
                <div class="colorBlock" name="currentyear"></div><h3>{{ currentYear }}</h3>
            </div>
            <div class="year">
                <div class="colorBlock" name="previousyear"></div><h3>2021</h3>
            </div>
        </div>
        <div class="charts-wrap">
            <LineChart />
        </div>
    </div> 
</template>

<script>

import LineChart from '@/components/charts/LineCharts.vue'

export default {
    name: 'EvolutionComponent',

    components: {
        LineChart,
    },
    props: {
       
    },
    data (){
        return{
            currentYear: new Date().getFullYear(),
        }
    },
}

</script>

<style scoped>
.Container-wrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    margin-bottom: 50px;
    width: 100%;
    padding-bottom: 55px;
    padding-top: 55px;
    border-radius: 15px;
}
.data-wrap{
    margin-bottom: 25px;
    margin-left: 55px;
}
.charts-wrap{
    margin-left: 55px;
    margin-right: 55px;
}
.year{
    display: flex;
    flex-direction: row;
    align-items: center;
}
h2, h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
}
h2{
    font-size: 23px;
    line-height: 0px;
}
h3{
    font-size: 12px;
    line-height: 0px;
}
.colorBlock{
    width: 25px;
    height: 10px;
    background: #CC9933;
    margin-right: 5px;
}[name="previousyear"]{
    background: rgba(204, 153, 51, 0.3);
}
.charts{
    height: 200px;
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
    .charts-wrap{
        width: 90%;
    }
}
</style>