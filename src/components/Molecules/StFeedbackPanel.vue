<template lang="pug">
  //- congrat
  //- caution
  //- cheer
  v-card
    v-card-title
      slot(name="icon")
      slot(name="message")
</template>

<script>
export default {
  name: "StFeedbackPanel"
};
</script>
