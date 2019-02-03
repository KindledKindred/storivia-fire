<template lang="pug">
	v-toolbar
		v-toolbar-title.headline.text-uppercase
			span STORIVIA
		v-toolbar-items
			span
			v-btn(flat @click="$emit('trans', 'StActionBoard')") Action
			v-btn(flat @click="$emit('trans', 'StCharacterBoard')") Character
			v-btn(flat @click="$emit('trans', 'StWorldBoard')") World
			
			v-spacer
			v-btn(flat @click="$emit('trans', 'StQandABoard')") Q & A
</template>

<script>
export default {
  name: "StNavigation",

  props: ["currentBoard"]
};
</script>
