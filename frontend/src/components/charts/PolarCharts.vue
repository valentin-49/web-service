<template>
    <Pie
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, Plugin } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {

    name: 'PolarChart',

    components: {
      Pie,
    },
    props: {
        chartId: {
            type: String,
            default: 'polar-chart'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object ,
            default: () => {}
        },
        plugins: {
            type: Plugin,
            default: () => []
        },

        percent: Number,
    },
    data() {
        return {
            chartData: {
            labels: ['concretisé', 'non concrétisé'],
            datasets: [{
                backgroundColor: ['#A2A1FF', 'white'],
                data: [this.percent, 100-this.percent],
                borderColor: '#A2A1FF',
            }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: false
                },
                plugins: {
                    legend: {
                        display: true,
                    },
                },
            }
        }
    }

}

</script>

<style scoped>

</style>