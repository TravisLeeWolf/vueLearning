const app = Vue.createApp({
    data() {
        return {
            goal: 37,
            number: 0,
        };
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.number = 0
                that.goal = Math.ceil(Math.random() * 50)
                console.log("The answer is " + that.goal);
            }, 10000);            
        },
    },
    computed: {
        result() {
            if (this.number === this.goal) {
                return "That's right! The number was " + this.number;
            } else if (this.number < this.goal) {
                return "Not there yet";
            } else {
                return "Too much!";
            }
        },
    },
    methods: {
        add(num) {
            this.number = this.number + num;
        },
    }
});

app.mount("#assignment");