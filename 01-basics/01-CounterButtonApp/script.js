import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      value: 0,
    };
  },
}).mount('#app');

// Создайте Vue приложение
