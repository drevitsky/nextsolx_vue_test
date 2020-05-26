<template>
  <div class="section-carts">
    <transition-group class="chart-list" name="list" tag="div">
      <div class="chart-item col col__50" v-for="(item) in chartList" :key="item.id">
        <CustomChart :options="item.options" :item="item" />
      </div>
    </transition-group>

  </div>
</template>
<script>

import { mapGetters } from 'vuex'
import CustomChart from '@/components/CustomChart.vue'

export default {
  name: 'SectionCarts',
  components: { CustomChart },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['chartList'])
  }
}
</script>
<style lang="scss" scoped>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1s;
  }
  .list-move {
    transition: transform 1s;
  }
</style>
