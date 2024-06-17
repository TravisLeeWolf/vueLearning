const app = Vue.createApp({
    data() {
        return {
            myName: "Bob",
            myAge: 64,
            randomImage: "https://picsum.photos/500/250",
        }
    },
    methods: {
        randomNumber() {
            return Math.ceil(Math.random() * 10);
        }
    }
});

app.mount("#assignment");