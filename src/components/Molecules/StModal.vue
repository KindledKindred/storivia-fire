<template lang="pug" :ref="st_dialog">
	v-app
		v-dialog(@close="closeModal" v-model="show_modal")
			v-card(justify-center)
				slot
</template>

<script>
// ref: https://qiita.com/superyusuke/items/9eaad853422937de2391
export default {
  data() {
    return {
      show_modal: false
    };
  },

  methods: {
    openModal() {
      this.show_modal = true;
    },
    closeModal() {
      this.show_modal = false;
    }
  }
};
</script>

