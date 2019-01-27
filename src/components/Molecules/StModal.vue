<template lang="pug" :ref="st_dialog">
	v-app
		v-btn(@click="openModal") Open1
		v-dialog(@close="closeModal" v-model="show_modal" width="500")
			v-card
				slot
</template>

<script>
// TODO: 親側のusage
// ref: https://qiita.com/superyusuke/items/9eaad853422937de2391
export default {
  data() {
    return {
      show_modal: false
    };
  },

  methods: {
    openModal: function() {
      show_modal = true;
    },
    closeModal: function() {
      show_modal = false;
    }
  }
};
</script>

