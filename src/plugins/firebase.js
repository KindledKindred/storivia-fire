import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire);

// if(!firebase.apps.length) {} で括るのはRTDBだけ？
export default firebase.initializeApp({
  apiKey: 'AIzaSyCaA9cyQ8s5BBVSfXzxgui40BaRvFmd8Iw',
  authDomain: 'storivia.firebaseapp.com',
  databaseURL: 'https://storivia.firebaseio.com',
  projectId: 'storivia',
  storageBucket: 'storivia.appspot.com',
  messagingSenderId: '1077566446315'
});
