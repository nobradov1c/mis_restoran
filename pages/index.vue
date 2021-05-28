<template>
  <div class="page spaced">
    <h1 class="title has-text-white">Welcome to Restoran</h1>

    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Your order</p>
      </header>
      <div class="card-content">
        <div class="content">
          <ul class="mb-4">
            <li
              v-for="order in orders"
              :key="order.item.id"
              class="order-item mb-4"
            >
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <figure class="image is-128x128 food-image">
                      <img
                        :src="
                          require(`~/assets/images/food/${order.item.image}`)
                        "
                      />
                    </figure>
                  </div>
                  <div class="level-item">
                    <p class="ml-2 is-size-4">{{ order.item.title }}</p>
                  </div>
                </div>

                <div class="level-right">
                  <div class="level-item counter">
                    <button
                      class="button"
                      @click="
                        () => {
                          order.count--
                          if (order.count < 1) removeOrder(order.item.id)
                        }
                      "
                    >
                      -
                    </button>
                    <p class="has-text-centered">{{ order.count }}</p>
                    <button class="button" @click="order.count++">+</button>
                  </div>
                  <div class="level-item">
                    <p class="price has-text-right">
                      {{
                        Math.round(order.item.price * order.count * 100) / 100
                      }}$
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div class="is-flex is-justify-content-flex-end my-4">
            <button class="button is-info" @click="menuModalActive = true">
              Add item
            </button>
          </div>

          <hr class="has-background-info" />

          <div class="is-flex is-justify-content-flex-end my-4">
            <p class="is-flex">
              Total:
              <span class="price has-text-right ml-3">{{ totalPrice }}$</span>
            </p>
          </div>
        </div>
      </div>

      <MenuModal
        :is-active="menuModalActive"
        @modalMessage="
          (id) => {
            addOrder(id)
            menuModalActive = false
          }
        "
      />

      <footer class="card-footer is-flex is-justify-content-flex-end py-4">
        <a class="button is-info is-size-5 mr-5" @click="submitOrder">Save</a>
      </footer>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.order-item
  .food-image
    width: 128px
    height: 100px
    overflow: hidden
    img
      height: 100%
      width: 100%
      object-fit: cover
      transform: scale(1.2)
  .counter p
    width: 30px
.price
  width: 60px
</style>

<script>
import { mapMutations } from 'vuex'

const name = 'HomePage'

const components = {}

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
  ordersCounter() {
    return this.$store.state.ordersCounter
  },

  menu() {
    return this.$store.state.menu
  },

  totalPrice() {
    let total = 0
    this.orders.forEach((element) => {
      total += element.item.price * element.count
    })

    return Math.round(total * 100) / 100
  },
}

function mounted() {
  console.log('hello')
}

const methods = {
  ...mapMutations({
    addOrderToHistory: 'addOrderToHistory',
  }),

  removeOrder(id) {
    this.orders = this.orders.filter((order) => order.item.id !== id)
  },

  addOrder(id) {
    if (this.orders.find((order) => order.item.id === id)) {
      console.log('Item already exists!')
      return
    }
    const itemToAdd = this.menu.find((item) => item.id === id)
    if (itemToAdd) {
      this.orders.push({ item: itemToAdd, count: 1 })
    }
  },

  submitOrder() {
    this.orders.forEach((order) => {
      this.addOrderToHistory(order.item.id, order.count)
    })
  },
}

export default { name, components, data, computed, mounted, methods }
</script>
