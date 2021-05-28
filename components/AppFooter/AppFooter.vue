<template>
  <footer class="has-background-white px-3 py-2">
    <div class="level is-mobile">
      <div class="level-left">
        <div class="level-item">
          <p>Restoran &copy; {{ year }}</p>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          <p>Novi Sad</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import GithubSvg from '~/assets/images/icons/github.svg?inline'
import LinkedinSvg from '~/assets/images/icons/linkedin.svg?inline'

const name = 'AppFooter'

const components = {
  GithubSvg,
  LinkedinSvg,
}

function data() {
  return {
    year: new Date().getFullYear(),
  }
}
export default { name, components, data }
</script>

<style lang="sass">
footer svg
  height: 30px
  width: auto
</style>
