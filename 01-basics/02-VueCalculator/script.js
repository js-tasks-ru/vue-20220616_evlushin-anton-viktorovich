import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      operator: '',
      x: 0,
      y: 0,
    };
  },

  computed: {
    z() {
      switch (this.operator) {
        case 'sum':
          return this.x + this.y;
        case 'subtract':
          return  this.x - this.y;
        case 'multiply':
          return this.x * this.y;
        case 'divide':
          return this.x / this.y;
        default:
          return 0;
      }
    },
  }
}).mount('#app');

// Создайте Vue приложение
