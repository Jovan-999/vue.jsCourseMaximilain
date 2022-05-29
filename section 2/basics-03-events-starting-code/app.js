const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('Submitted');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(number) {
      this.counter = this.counter + number;
    },
    remove(number) {
      this.counter = this.counter - number;
    },
  },
});

app.mount('#events');
