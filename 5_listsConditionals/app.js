const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            userInput: "",
            listIsShown: true,
        };
    },
    computed: {
        buttonCaption() {
            return this.listIsShown ? "Hide List" : "Show List";
        },
    },
    methods: {
        addToList() {
            this.tasks.push(this.userInput);
        },
        toggleList() {
            this.listIsShown = !this.listIsShown;
        },
    },
});

app.mount("#assignment");