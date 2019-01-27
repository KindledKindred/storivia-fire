import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#7A7C73',
    secondary: '#1B221C',
    accent: '#7A6C5B',
    info: '#E6C9A8'
    // error: '',
    // warning: '',
    // success: ''
  }
});
