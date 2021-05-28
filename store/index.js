export const state = () => ({
  counter: 0,
  menu: [
    {
      id: 1,
      title: 'Hamburger',
      image: 'hamburger.jpg',
      price: 3.5,
    },
    {
      id: 2,
      title: 'Hot-Dog',
      image: 'hotdog.jpg',
      price: 2.2,
    },
    {
      id: 5,
      title: 'Pizza bites with pumpkin',
      price: 195.11,
      image: 'meal_1.jpg',
    },
    {
      id: 3,
      title: 'Nutella Buttercream Cupcakes',
      price: 54.11,
      image: 'meal_2.jpg',
    },
    {
      id: 4,
      title: 'Easy Pork Chops',
      price: 228.86,
      image: 'meal_4.jpg',
    },
    {
      id: 10,
      title: 'Black Bean Brownies',
      price: 52.8,
      image: 'meal_10.jpg',
    },
    {
      id: 14,
      title: 'Beans Hawaiian',
      price: 161.29,
      image: 'meal_14.jpg',
    },
    {
      id: 17,
      title: 'Bacon-Wrapped Meatloaf',
      price: 226.62,
      image: 'meal_17.jpg',
    },
    {
      id: 20,
      title: 'Chocolate Chip Pancakes',
      price: 46.49,
      image: 'meal_20.jpg',
    },
    {
      id: 23,
      title: 'Slow Cooker Lamb Curry',
      price: 354.96,
      image: 'meal_23.jpg',
    },
    {
      id: 26,
      title: 'Chicken Pot Pie',
      price: 476.29,
      image: 'meal_26.jpg',
    },
    {
      id: 32,
      title: 'Baked Tofu Cheesecake',
      price: 62.08,
      image: 'meal_32.jpg',
    },
    {
      id: 33,
      title: 'Dolsot Bibimbap',
      price: 765.82,
      image: 'meal_33.jpg',
    },
    {
      id: 34,
      title: 'Balsamic-Honey Chicken',
      price: 110.64,
      image: 'meal_34.jpg',
    },
    {
      id: 36,
      title: 'Strawberry and Nutella Cobbler',
      price: 178.02,
      image: 'meal_36.jpg',
    },
    {
      id: 41,
      title: 'Parmesan chicken nuggets',
      price: 240.74,
      image: 'meal_41.jpg',
    },
    {
      id: 61,
      title: 'Simple Skillet Lasagna',
      price: 245.66,
      image: 'meal_61.jpg',
    },
    {
      id: 67,
      title: 'Best Ever Bolognese Sauce',
      price: 367.48,
      image: 'meal_67.jpg',
    },
    {
      id: 73,
      title: 'Hot Artichoke Crab Dip',
      price: 247.02,
      image: 'meal_73.jpg',
    },
    {
      id: 75,
      title: 'Pan-Fried Basa Fillets',
      price: 1455.14,
      image: 'meal_75.jpg',
    },
    {
      id: 78,
      title: 'Broccolini Quinoa Pilaf',
      price: 414.24,
      image: 'meal_78.jpg',
    },
    {
      id: 90,
      title: 'Chicken Porridge',
      price: 217.55,
      image: 'meal_90.jpg',
    },
    {
      id: 91,
      title: 'Slow Cooker Chicken Taco Soup',
      price: 141.43,
      image: 'meal_91.jpg',
    },
    {
      id: 95,
      title: 'Cheddar Polenta',
      price: 277.22,
      image: 'meal_95.jpg',
    },
    {
      id: 98,
      title: 'Poppy Seed Pastries',
      price: 52.89,
      image: 'meal_98.jpg',
    },
  ],
  ordersCounter: [
    { id: 1, orders: 7 },
    { id: 2, orders: 2 },
  ],
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  addOrderToHistory(state, orderId, orderAmount = 1) {
    let hasOrder = false
    state.ordersCounter.forEach((orderCount) => {
      if (orderCount.id === orderId) {
        orderCount.orders += orderAmount
        hasOrder = true
      }
    })
    if (!hasOrder)
      state.ordersCounter.push({ id: orderId, orders: orderAmount })
  },
}
