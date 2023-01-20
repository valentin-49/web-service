<template>
    <Bar
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
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',

  components: {
    Bar,
  },

  props: {
        chartId: {
        type: String,
        default: 'bar-chart'
        },
        datasetIdKey: {
        type: String,
        default: 'label'
        },
        width: {
        type: Number,
        default: 200
        },
        height: {
        type: Number,
        default: 200
        },
        cssClasses: {
        default: '',
        type: String
        },
        styles: {
        type: Object,
        default: () => {}
        },
        plugins: {
        type: Object,
        default: () => {}
        }
    },
    data (){
        return{
            chartData: {
              labels: ['Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout' ],
              datasets: [
                {
                  label: 'Visites',
                  data: [250, 120, 200, 400, 90, 130],
                 /* backgroundColor: (ctx) => {
                    const canvas = ctx.chart.ctx;
                    const gradient = canvas.createLinearGradient(0,0,0,200);

                    gradient.addColorStop(0, '#A2A1FF');
                    gradient.addColorStop(.5, '#EDF1F6');
                    gradient.addColorStop(1, '#A2A1FF');

                    return gradient;
                  },*/
                  backgroundColor: 'turquoise',
                  barThickness: 17,
                  BarLength: 2,
                  borderRadius: 15,
                },
                { 
                  label: 'Devis signés',
                  data: [90, 100, 120, 260, 10, 80],
                  /*backgroundColor: (ctx) => {
                    const canvas = ctx.chart.ctx;
                    const gradient = canvas.createLinearGradient(0,0,0,200);

                    gradient.addColorStop(0, '#EDF1F6');
                    gradient.addColorStop(.5, '#A2A1FF');
                    gradient.addColorStop(1, '#EDF1F6');

                    return gradient;
                  },*/
                  backgroundColor: 'purple',
                  barThickness: 17,
                  BarLength: 2,
                  borderRadius: 15,
                },
              ]
            },
            chartOptions: {
                responsive:true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                    },
                },
                scales: {
                    y: {
                        grid: {
                            display: false
                        }
                    }
                },
            }
        }
    },
}
</script>

<style scoped>

</style>
