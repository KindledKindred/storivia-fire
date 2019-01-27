<template lang="pug">
	v-layout(row wrap)
		v-btn(@click="googleLogin") LOGIN
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    googleLogin: function() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
};
</script>
