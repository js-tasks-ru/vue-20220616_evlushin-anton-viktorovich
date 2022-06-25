import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      operator: '',
      x: 0,
      y: 0,
      z: 0,
    };
  },

  watch: {
    x() {
      this.calc();
    },

    y() {
      this.calc();
    },

    operator() {
      this.calc();
    },
  },

  methods: {
    calc() {
      switch (this.operator) {
        case 'sum':
          this.z = this.x + this.y;
          break;
        case 'subtract':
          this.z = this.x - this.y;
          break;
        case 'multiply':
          this.z = this.x * this.y;
          break;
        case 'divide':
          this.z = this.x / this.y;
          break;
        default:
          this.z = 0;
          break;
      }
    },
  },
}).mount('#app');

// Создайте Vue приложение
