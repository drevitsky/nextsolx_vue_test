<template>
  <div class="custom-chart">
    <div class="chart-dashboard">
      <button class="btn widget__btn" @click="removeItChart">Delete</button>
      <select class="btn widget__btn widget__select" v-model="selectedCartType" @change="changeChartType">
        <option value="pie">Pie</option>
        <option value="bar">Bar</option>
        <option value="line">Line</option>
      </select>
    </div>
    <Chart :options="options" />
  </div>
</template>
<script>
import { Chart } from 'highcharts-vue'
import { mapActions } from 'vuex'

export default {
  name: 'CustomChart',
  props: ['options', 'item'],
  components: { Chart },
  data () {
    return {
      selectedCartType: this.options.chart.type
    }
  },
  methods: {
    ...mapActions(['changeType', 'removeChart']),
    changeChartType () {
      this.changeType({
        id: this.item.id,
        type: this.selectedCartType
      })
    },
    removeItChart () {
      this.removeChart(this.item.id)
    }
  }
}
</script>
<style lang="scss" scoped>
  .custom-chart {
    padding: 10px;
  }
  .chart-dashboard {
    display: flex;
    justify-content: space-between;
  }
</style>
