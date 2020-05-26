<template>
  <div class="header-menu" :class="{'menu--opened' : isMenuOpen}">
    <header class="header">
      <div class="container">
          <div class="header__wrap">
            <div class="logo__wrap">
              <a class="logo" href="#">
                <img src="@/assets/img/logo.png" alt="Logo">
              </a>
            <div class="logo__text">Inform. Connect. Inspire.</div>
            </div>
            <div class="nav nav__wrap">
              <div class="menu-top__wrap ">
                <ul class="menu-top">
                  <li class="top__item">
                    <a href="#" class="top__link">Über uns</a>
                  </li>
                  <li class="top__item">
                    <a href="#" class="top__link">Redaktion</a>
                  </li>
                </ul>
                <div class="switch__locale">
                  <div class="langchange">
                    <div class="button" id="button-1">
                      <input type="checkbox" class="checkbox">
                      <div class="knobs"></div>
                      <div class="layer"><div>EN</div><div>DE</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="menu-main__wrap" >
                <div class="search__wrap" :class="{'active' : isSearchOpen}">
                  <input
                    class="input"
                    type="text"
                    name="search"
                    placeholder="Search"
                    :class="{'active' : isSearchOpen}">
                  <label id="search" for="search" @click="isSearchOpen = !isSearchOpen">
                    <img class="search__icon" src="@/assets/img/search.svg" alt="search">
                  </label>
                </div>
                <ul class="menu">
                  <li><a href="#">DEsign+lifestyle</a></li>
                  <li><a href="#">trends</a></li>
                  <li><a href="#">infodelight</a></li>
                  <li><a href="#">Smart Living</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <!-- bureger menu html -->
      <span class="menu-tog" @click="isMenuOpen = !isMenuOpen" >
        <span class="menu-tog-item menu-tog-item1"></span>
        <span class="menu-tog-item menu-tog-item2"></span>
        <span class="menu-tog-item menu-tog-item3"></span>
      </span>
      <!-- end burger -->
      </header>
  </div>
</template>
<script>
export default {
  name: 'header-menu',
  data () {
    return {
      isMenuOpen: false,
      isSearchOpen: false
    }
  }
}
</script>
