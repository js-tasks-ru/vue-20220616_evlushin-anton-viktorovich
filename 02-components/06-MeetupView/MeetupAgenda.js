import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import UiAlert from './UiAlert.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
    UiAlert,
  },

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },

  template: `
    <ul class="agenda">
      <li v-for="agendaItem in agenda" class="agenda__item">
        <meetup-agenda-item :agenda-item="agendaItem"></meetup-agenda-item>
      </li>
    </ul>
  `,
});
