const app = Vue.createApp({
  template: "#app",
  data() {
    return {
      title: "hello world",
      subTtile: "this is subTtile",
      array: ["John", "Alex", "Henry"],
      obj: {
        key: "value Key 1",
        key2: "value Key 2",
      },
      arrOfObj: [
        { name: "Billy", sallary: 1000 },
        { name: "Alex", sallary: 4000 },
        { name: "Ivan", sallary: 200 },
        { name: "Oleg", sallary: 100 },
      ],
    };
  },
  methods: {
    reverseSubTitle() {
      return this.subTtile.split("").reverse().join("");
    },
  },
  computed: {
    filteredBySallary() {
      return this.arrOfObj.filter((item) => item.sallary >= 1000);
    },
  },
});

app.mount("#root");
