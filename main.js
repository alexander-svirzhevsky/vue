const app = Vue.createApp({
  template: "#app",
  data() {
    return {
      title: "hello world",
      subTtile: "this is subTtile",
    };
  },
  watch: {
    title(newVal, prevVal) {
      this.subTtile = this.reverseSubTitle();
    },
  },
  methods: {
    handleClick(value) {
      this.title === value;
    },
    reverseSubTitle() {
      return this.subTtile.split("").reverse().join("");
    },
  },
});

app.mount("#root");
