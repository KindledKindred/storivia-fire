<template lang="pug">
	v-container(grid-list-lg)
		v-card.pa-3
			v-form(ref="form")
				v-textarea(
					:value="note"
					@change="v => note = v"
					label="メモ"
				)
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "StNoteBoard",

  computed: {
    ...mapState(["note"])
  }
};
</script>
