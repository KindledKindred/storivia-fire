<template lang="pug">
	v-expansion-panel
		v-expansion-panel-content(v-for="(item, i) in 5" :key="i")
			div(slot="header") Item
			v-card
				v-card-text Lorem ipsum
</template>

<script>
// ref: https://vuetifyjs.com/ja/components/expansion-panels

export default {
  name: "StAccordion"
};
</script>

