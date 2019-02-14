<template lang="pug">
	v-content
		v-layout(row justify-center).pb-40
			v-card.list-wrapper.mb-40
				v-list
					v-list-group(
						v-for="QandA in QandAs"
						:key="QandA.id"
						no-action
					)
						v-list-tile(slot="activator")
							v-list-tile-content
								v-list-tile-title.body-1 {{ QandA.question }}
						v-layout(justify-center)
							v-flex(xs12)
								.answer.pa-4 {{ QandA.answer }}
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
	name: "StQandABoard",

	computed: {
		...mapState(["QandAs"])
	}
};
</script>

<style lang="stylus" scoped>
.answer {
	max--width: 100%;
}

.list-wrapper {
	width: 80%;
	max-width: 900px;
}
</style>

