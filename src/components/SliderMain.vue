<template>
  <div class="slider-main">
    <div class="gallery autoplay items-3">
      <div id="item-1" class="control-operator"></div>
      <div id="item-2" class="control-operator"></div>
      <div id="item-3" class="control-operator"></div>

      <figure class="item">
        <div class="slide__wrap">
          <div class="slide__content">
            <div class="slide__head">| Design+Lifestyle | Smart Living |</div>
            <h2 class="slide__title">1 Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</h2>
            <p class="slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut dolor in reprehenderit in quia...</p>
          </div>
        </div>
        <img src="@/assets/img/gallery-1.jpg" alt="">
      </figure>

      <figure class="item" >
        <div class="slide__wrap">
          <div class="slide__content">
            <div class="slide__head">| Design+Lifestyle | Smart Living |</div>
            <h2 class="slide__title">2 Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</h2>
            <p class="slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut dolor in reprehenderit in quia...</p>
          </div>
        </div>
        <img src="@/assets/img/gallery-3.jpg" alt="">
      </figure>

      <figure class="item">
        <div class="slide__wrap">
          <div class="slide__content">
            <div class="slide__head">| Design+Lifestyle | Smart Living |</div>
            <h2 class="slide__title">3 Was hilft mir, Energie zu sparen und Spaß zu haben, bei mir zu Hause?</h2>
            <p class="slide__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut dolor in reprehenderit in quia...</p>
          </div>
        </div>
        <img src="@/assets/img/gallery-4.jpg" alt="">
      </figure>

      <div class="controls">
        <a href="#item-1" class="control-button"></a>
        <a href="#item-2" class="control-button"></a>
        <a href="#item-3" class="control-button"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SliderMain'
}
</script>
