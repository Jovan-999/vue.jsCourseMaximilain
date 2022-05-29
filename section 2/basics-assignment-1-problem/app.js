const app = Vue.createApp({
  data() {
    return {
      name: 'Jovan',
      age: 20,
      imageUrl:
        'https://imgs.search.brave.com/KMyr5Kvo_UMzlWlFmbMxNYY163yPVhT4HBYh5xF0sGU/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/d013OTNzYTYzeFJp/TGNldzJOcWp3SGFF/NyZwaWQ9QXBp',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
