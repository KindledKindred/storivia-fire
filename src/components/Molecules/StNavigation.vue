<template lang="pug">
	v-toolbar
		v-toolbar-title.headline.text-uppercase
			span STORIVIA
		v-toolbar-items
			span
			v-btn(flat @click="$emit('trans', 'StActionBoard')") Action
			v-btn(flat @click="$emit('trans', 'StCharacterBoard')") Character
			v-btn(flat @click="$emit('trans', 'StWorldBoard')") World
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
	name: "StNavigation",

	props: ["currentBoard"]
};
</script>
