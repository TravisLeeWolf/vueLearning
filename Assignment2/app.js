const app = Vue.createApp({
    data() {
        return {
            firstOutput: "OUTPUT",
            secondOutput: "OUTPUT",
        };
    },
    methods: {
        showAlert() {
            alert("You clicked the alert button!");
        },
        displayFirstOutput(event) {
            this.firstOutput = event.target.value;
        },
        displaySecondOutput(event) {
            this.secondOutput = event.target.value;
        },
    }
});

app.mount("#assignment");