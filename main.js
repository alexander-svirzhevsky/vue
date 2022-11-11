const app = Vue.createApp({
  template: "#app",
  data() {
    return {
      title: "hello world",
      htmlElement: "<a href='loftschool.com'>loftschool</a>",
    };
  },
  computed: {
    reverseTitle() {
      return this.title.split("").reverse().join("");
    },
  },
  methods: {
    handleClick(value) {
      this.title = value;
    },
  },
});

app.mount("#root");
