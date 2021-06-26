const vm = Vue.createApp({
  data() {
    return {
      total: 0,
      products: [
        { id: 1, name: "Camel 190g", prixLux: 22.6, prixFr: 75, quantity:0, subtotal:0 },
        { id: 2, name: "Camel 10x30g", prixLux: 41.5, prixFr: 105, quantity:0, subtotal:0 },
        { id: 3, name: "Fleur du Pays 10x50g", prixLux: 57.5, prixFr: 180, quantity:0, subtotal:0 },
        { id: 4, name: "Fleur du Pays 200g", prixLux: 23, prixFr: 70, quantity:0, subtotal:0 },
        { id: 5, name: "Interval 200g", prixLux: 25, prixFr: 70, quantity:0, subtotal:0 },
        { id: 6, name: "Lucky Strike 10x50g", prixLux: 69, prixFr: 140, quantity:0, subtotal:0 },
        { id: 7, name: "Lucky Strike 150g", prixLux: 16.2, prixFr: 57.5, quantity:0, subtotal:0 },
        { id: 8, name: "Winston 8x30g", prixLux: 52.4, prixFr: 85, quantity:0, subtotal:0 },
        { id: 9, name: "Winston 170g", prixLux: 19.6, prixFr: 60, quantity:0, subtotal:0 },
        { id: 10, name: "Winston TUBE 150g", prixLux: 16.5, prixFr: 57.5, quantity:0, subtotal:0 }
      ],
    }
  },
  methods: {
    test() {
      console.log('hello world!');
    },
  },
}).mount('#app');