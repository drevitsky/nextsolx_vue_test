<template>
  <div class="section-gallery">
    <section class="section section--gallery">
      <div class="container">
        <div class="row row__gallery">
          <div class="col col__slideshow">
            <SliderMain />
          </div>
          <div class="col col__widget">
            <div class="widget__welcome">
              <h2 class="widget__title">
                A place called
                Inspiration.
              </h2>
              <p class="widget__text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam voluptatem.
              </p>
              <div class="buttons_wrap">
                <button class="btn widget__btn" @click="insertCode">Add Chart</button>
                <select class="btn widget__btn widget__select" v-model="selectedCartType">
                  <option value=""></option>
                  <option value="pie">Pie</option>
                  <option value="bar">Bar</option>
                  <option value="line">Line</option>
                </select>
              </div>

            </div>
          </div>
        </div>
        <div class="row row__gallery">
          <div class="col col__50 ">
            <div class="item__galery">
              <div class="slide__wrap">
                <div class="slide__content">
                  <div class="slide__head">| Design+Lifestyle | Smart Living |</div>
                  <h2 class="slide__title">3 Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</h2>
                  <p class="slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut dolor in reprehenderit in quia...</p>
                </div>
              </div>
              <img src="@/assets/img/gallery-2-2.jpg" alt="">
            </div>
          </div>
          <div class="col col__50 ">
            <div class="item__galery">
              <div class="slide__wrap">
                <div class="slide__content">
                  <div class="slide__head">| Design+Lifestyle | Smart Living |</div>
                  <h2 class="slide__title">3 Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</h2>
                  <p class="slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut dolor in reprehenderit in quia...</p>
                </div>
              </div>
              <img src="@/assets/img/gallery-2-1.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import SliderMain from '@/components/SliderMain.vue'
import { mapActions } from 'vuex'

export default {
  name: 'SectionGallery',
  components: {
    SliderMain
  },
  data () {
    return {
      selectedCartType: ''
    }
  },
  methods: {
    ...mapActions(['addChart']),
    insertCode () {
      if (this.selectedCartType) {
        const options = JSON.parse(JSON.stringify(
          {
            id: this.getId(),
            name: 'pie',
            options: {
              chart: {
                type: this.selectedCartType
              },
              series: [{
                data: [50, 6, 9]
              }]
            }

          }
        ))
        this.addChart(options)
      } else {
        return false
      }
    },
    getId () {
      const id = `f${(+new Date()).toString(16)}`
      return id
    }
  }
}
</script>
