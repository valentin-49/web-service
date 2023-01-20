<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"

    class="charts"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Plugin } from 'chart.js'
ChartJS.register( Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale)

export default {

  name: 'BarChart',
  components: {
      Line,
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
      type: Plugin,
      default: () => {}
      }
  },
  data (){
    return{
        currentYear: new Date().getFullYear(),

        chartData: {
            labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'mai', 'Juin', 'Juillet', 'Aout', 'septembre', 'octobre', 'novembre', 'décembre' ],
            datasets: [
              {
                  label: '2022',
                  data: [250, 120, 200, 400, 90, 170, 100, 200, 300, 100, 205, 300],
                  borderColor: '#CC9933',
                  fill: false,
                  tension: 0.3,
                  yAxisID: 'y',
              },
              {
                  label: '2021',
                  data: [130, 100, 250, 360, 90, 150, 130, 200, 90, 80, 110, 170],
                  borderColor: 'rgba(204, 153, 51, 0.3)',
                  fill: false,
                  tension: 0.3,
                  yAxisID: 'y',
              }
            ]
        },
        chartOptions: {
          responsive:true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              grid: {
                display: false
              }
            }
          },
          elements: {
            point: {
              radius: 0,
            }
          }
        }
    }
  },
}
</script>
