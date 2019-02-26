<template lang="pug">
  //- congrat
  //- caution
  //- cheer
  v-card
    v-layout(row wrap)
      v-card-title(xs12)
        v-icon.pr-2 edit
        slot(name="function31")
      v-card-title.mt-0.pt-0.pl-4(xs12)
        slot(name="description")
</template>

<script>
export default {
	name: "StFeedbackPanel"
};
</script>
