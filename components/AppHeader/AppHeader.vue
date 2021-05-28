<template>
  <header
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
    @click="hamburgerActive = false"
  >
    <div class="navbar-brand">
      <NuxtLink to="/" class="navbar-item">
        <LogoSvg class="logo mr-1" />
        <span class="is-size-4">MIS Restoran</span>
      </NuxtLink>

      <a
        role="button"
        class="navbar-burger burger"
        :class="{ 'is-active': hamburgerActive === true }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click.stop="hamburgerActive = !hamburgerActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <nav
      class="navbar-menu p-0"
      :class="{ 'is-active': hamburgerActive === true }"
    >
      <div class="navbar-end">
        <NuxtLink to="/" class="navbar-item">Home</NuxtLink>
        <NuxtLink to="/reservation" class="navbar-item">Reservation</NuxtLink>
        <NuxtLink to="/analytics" class="navbar-item">Analytics</NuxtLink>
      </div>

      <div class="hamburger-cover is-hidden-desktop"></div>
    </nav>
  </header>
</template>

<script>
import LogoSvg from '~/assets/images/icons/penguin.svg?inline'

const name = 'AppHeader'

const components = { LogoSvg }

function data() {
  return {
    hamburgerActive: false,
  }
}

export default { name, components, data }
</script>

<style lang="sass">
.logo
  height: 30px

.navbar-brand .navbar-item:hover,
.navbar-brand .navbar-item:active
  color: #4a4a4a

nav .nuxt-link-exact-active
  pointer-events: none
  color: #3298dc !important
  background: #1C1D25 !important

.hamburger-cover
  background-color: rgba(240, 240, 240, 0.5)
  width: 100%
  height: 100vh
  position: absolute
</style>
