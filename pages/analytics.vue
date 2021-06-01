<template>
  <div class="page spaced has-text-white">
    <h1 class="title has-text-white">Analytics</h1>
    <client-only>
      <component
        :is="apexchart"
        height="500"
        width="800"
        type="bar"
        :options="visitsChartOptions"
        :series="visitsSeries"
        class="mb-3"
      />
      <component
        :is="apexchart"
        class="mt-3"
        height="500"
        width="800"
        type="pie"
        :options="foodChartOptions"
        :series="foodSeries"
      />
    </client-only>
  </div>
</template>

<script>
const name = 'Analytics'
function data() {
  return {
    visitsSeries: [
      {
        name: 'Visits',
        data: [1000, 1150, 1352, 1513, 1691, 1807, 1699, 1710, 2001],
      },
    ],
    visitsChartOptions: {
      chart: {
        height: 350,
        type: 'bar',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
        style: {
          fontWeight: 'bold',
          fontSize: '12px',
          font: '',
        },
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Number of visits by month',
        align: 'middle',
        style: {
          fontSize: '26px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#f3f3f3',
        },
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: 'white',
          },
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
        labels: {
          show: true,
          align: 'right',
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: 'white',
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
        },
      },
    },
  }
}
const computed = {
  foodSeries() {
    return this.orderData.map((o) => o.count)
  },
  foodChartOptions() {
    return {
      title: {
        text: 'Food bought today',
        align: 'middle',
        style: {
          fontSize: '26px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#f3f3f3',
        },
      },
      legend: {
        labels: {
          colors: '#f3f3f3',
        },
      },
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: this.orderData.map((o) => o.name),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    }
  },
  apexchart() {
    return () => {
      if (process.client) {
        return import('vue-apexcharts')
      }
    }
  },
  ordersCounter() {
    return this.$store.state.ordersCounter
  },
  menu() {
    return this.$store.state.menu
  },
  orderData() {
    const orderData = []
    this.ordersCounter.forEach((order) => {
      const filteredMenu = this.menu.filter((item) => {
        return item.id === order.id
      })
      const newOrder = {
        id: order.id,
        name: filteredMenu[0].title,
        count: order.orders,
      }
      orderData.push(newOrder)
    })
    return orderData
  },
}
function mounted() {}

export default {
  name,
  data,
  computed,
  mounted,
}
</script>

<style lang="sass" scoped></style>
