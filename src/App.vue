<template lang="pug">
  v-app
    v-toolbar.app
      v-toolbar-title.headline.text-uppercase
        span Storivia
      v-spacer
      v-btn(flat target="_blank")
        span Logout
    
    v-content
      router-view
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>
