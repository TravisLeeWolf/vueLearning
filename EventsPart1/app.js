const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    increaseBy(num) {
      this.counter = this.counter + num;
    },
    decreaseBy(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
