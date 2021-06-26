const vm = Vue.createApp({
  data() {
    return {
      total: 0,
      products: [
        { id: 1, name: "Camel 190g", prixLux: 22.6, prixFr: 100, quantity:0 },
        { id: 2, name: "Camel 10x30g", prixLux: 41.5, prixFr: 140, quantity:0 },
        { id: 3, name: "Fleur du Pays 10x50g", prixLux: 57.5, prixFr: 240, quantity:0 },
        { id: 4, name: "Fleur du Pays 200g", prixLux: 23, prixFr: 100, quantity:0 },
        { id: 5, name: "Interval 200g", prixLux: 25, prixFr: 100, quantity:0 },
        { id: 6, name: "Lucky Strike 10x50g", prixLux: 69, prixFr: 190, quantity:0 },
        { id: 7, name: "Lucky Strike 150g", prixLux: 16.2, prixFr: 69, quantity:0 },
        { id: 8, name: "Winston 8x30g", prixLux: 52.4, prixFr: 112, quantity:0 },
        { id: 9, name: "Winston 170g", prixLux: 19.6, prixFr: 80, quantity:0 },
        { id: 10, name: "Winston TUBE 150g", prixLux: 16.5, prixFr: 70, quantity:0 }
      ],
    }
  },
  methods: {
    test() {
      console.log('hello world!');
    }
  }
}).mount('#app');