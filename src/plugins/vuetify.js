import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.indigo.darken1,
    secondary: colors.deepPurple.darken4,
    accent: colors.indigo.accent1,
    info: colors.deepPurple.accent1
    // error: '',
    // warning: '',
    // success: ''
  }
});
