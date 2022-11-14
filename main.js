const container = {
  template: "#container",
  data() {
    return {
      list: ["one", "two", "three"],
    };
  },
};

const child = {
  template: "#child",
  props: ["title"],
};

const app = Vue.createApp({
  template: "#app",
  components: {
    container,
    child,
  },
});

app.mount("#root");
