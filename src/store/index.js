import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Skinny Star", price: 30 },
      { name: "Green Shells", price: 40 },
      { name: "Red Shells", price: 50 }
    ]
  },

  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        };
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit("reducePrice", payload);
      }, 2000);
    }
  },
  modules: {}
});

// In my own understanding
// State => is to store data
// Getters => is to get the data and or to compute the data.
// Mutations => is to edeting the data or change the data
// Actions => is to commit the mutation
