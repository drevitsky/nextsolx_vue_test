<template>
  <div class="home">
    <HeaderMenu />
    <main>
      <SectionGallery />
      <SectionCarts />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMenu from '@/components/HeaderMenu.vue'
import SectionGallery from '@/components/SectionGallery.vue'
import SectionCarts from '@/components/SectionCarts.vue'

export default {
  name: 'Home',
  components: {
    HeaderMenu,
    SectionGallery,
    SectionCarts
  }
}
</script>
