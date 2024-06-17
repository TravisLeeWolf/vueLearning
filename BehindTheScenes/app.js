const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$ref.userText.value;
    },
    unmountApp() {
      app.unmount();
    }
  },
  beforeCreate() {
    console.log('beforeCreate()')
  },
  created() {
    console.log('created()')
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted()')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  },
  beforeUnmount() {
    console.log('beforeUnmount()')
  },
  unmounted() {
    console.log('unmounted()')
  }
});

app.mount('#app');

// How JavaScript can be reactive using proxy
const data = {
  message: 'Hello!',
  longMessage: 'Hello world!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + " World!"
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello World!';
// console.log(proxy.longMessage);