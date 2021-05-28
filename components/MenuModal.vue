<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click.self="$emit('modalMessage')"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">Choose a meal</p>
        </header>
        <div class="card-content is-justify-content-space-between">
          <div
            v-for="meal in menu"
            :key="meal.id"
            class="meal mb-3"
            @click="$emit('modalMessage', meal.id)"
          >
            <figure class="image is-128x128 food-image">
              <img :src="require(`~/assets/images/food/${meal.image}`)" />
            </figure>
            <div class="meal-cover">
              <p class="has-text-centered has-text-white has-text-weight-bold">
                {{ meal.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('modalMessage')"
    ></button>
  </div>
</template>

<script>
const name = 'MenuModal'

const props = ['isActive']

function data() {
  return {
    menuModalActive: false,
    orders: [
      {
        item: {
          id: 1,
          title: 'Hamburger',
          image: 'hamburger.jpg',
          price: 3.5,
        },
        count: 1,
      },
    ],
  }
}

const computed = {
  menu() {
    return this.$store.state.menu
  },
}

function mounted() {
  console.log('helou')
  console.log('active: ', this.isActive)
}

export default { name, props, data, computed, mounted }
</script>

<style lang="sass" scoped>
.card
  max-height: 80vh
  overflow-y: hidden
  padding-bottom: 32px
.card-content
  max-height: 60vh
  display: flex
  flex-wrap: wrap
  margin: auto
  overflow-y: auto
  overflow-x: hidden
.meal
  position: relative
  cursor: pointer
  width: 128px
  height: 100px
  .food-image
    width: 100%
    height: 100%
    overflow: hidden
    img
      height: 100%
      width: 100%
      object-fit: cover
      transform: scale(1.2)
  &:hover
    .meal-cover
      display: flex
  .meal-cover
    display: none
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%
    background: rgba(0, 0, 0, .5)
    align-items: center
    justify-content: center
    p
      max-width: 100%
      margin: 0 15%
</style>
