import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire);

// if(!firebase.apps.length) {} で括るのはRTDBだけ？
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCaA9cyQ8s5BBVSfXzxgui40BaRvFmd8Iw',
  authDomain: 'storivia.firebaseapp.com',
  projectId: 'storivia',
  storageBucket: 'storivia.appspot.com',
  messagingSenderId: '1077566446315'
});
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

export const db = firebaseApp.firestore();

export default {
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  },
  logout() {
    firebase.auth().signOut();
  },
  // コンポーネント内で最初のコールされる
  onAuth() {
    // コールされた時の user を返す
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {}; // ログアウト時は {} が保存される
      store.commit('onAuthStateChanged', user);
      store.commit('onUserLoggedInChanged', user.uid ? true : false);
    });
  }
};