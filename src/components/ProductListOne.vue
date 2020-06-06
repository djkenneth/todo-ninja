<template>
  <div id="product-list-one">
    <h1>Product List One</h1>
    <ul>
      <li v-for="product in products" :key="product.name">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
    <v-btn @click="reducePrice(5)">Reduce Price</v-btn>
  </div>
</template>

<script>
export default {
  // props: {
  //   products: Object
  // },
  data: () => ({
    //
  }),

  computed: {
    // Get the data from the state
    products() {
      return this.$store.state.products;
    },

    // Get the data from the getters thats compute the data
    // current data / 2
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  },

  methods: {
    reducePrice(amount) {
      // this.$store.state.products.forEach(product => {
      //   product.price -= 1;
      // });
      // this.$store.commit("reducePrice");
      this.$store.dispatch("reducePrice", amount);
    }
  }
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>
