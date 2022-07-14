import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      default: 'Title',
    },

    image: {
      default: 'https://course-vue.javascript.ru/api/images/2',
    }
  },

  computed: {
    image2(){
      return this.image == null ? 'https://course-vue.javascript.ru/api/images/2' : this.image;
    }
  },

  template: `
    <div class="meetup-cover" :style="{'--bg-url': \`url(\${this.image2})\`}">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
