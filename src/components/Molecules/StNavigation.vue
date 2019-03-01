<template lang="pug">
	v-toolbar(fixed dark color="secondary")
		v-toolbar-title.mr-3.headline.text-uppercase
			router-link(to="/") STORIVIA
		v-toolbar-items
			span
			v-btn(flat @click="$emit('trans', 'StActionBoard')") Action
			v-btn(flat @click="$emit('trans', 'StCharacterBoard')") Character
			v-btn(flat @click="$emit('trans', 'StWorldBoard')") WORLD
		v-spacer
		v-toolbar-items
			v-btn(icon @click="$emit('trans', 'StQandABoard')")
				v-icon(dark) question_answer
			v-btn(icon @click="$emit('trans', 'StNoteBoard')")
				v-icon(dark) description
</template>

<script>
export default {
	name: "StNavigation",

	props: ["currentBoard"]
};
</script>

<style lang="stylus" scoped>
a {
	color: white;
	text-decoration: none;
}
</style>

