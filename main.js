const container = {
  template: "#container",
  emits: ["titleChanged"],
  methods: {
    handleClick() {
      this.$emit("titleChanged", "new title", 1234);
    },
  },
};

const app = Vue.createApp({
  template: "#app",
  components: {
    container,
  },
  data() {
    return {
      title: "hello vue",
    };
  },
  methods: {
    handler(newTitle, randomInt) {
      this.title = newTitle;
      console.log(randomInt);
    },
  },
});

app.mount("#root");
