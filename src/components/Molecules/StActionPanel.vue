<template lang="pug">
//- Laptop    : 2 rows
//- SmartPhone: 4 rows
v-card.mt-4.pa-4
	v-layout(row wrap)
		//- 機能
		v-flex(xs5)
			slot(name="function31_name")
		//- キャラクター
		v-flex(xs5)
			slot(name="character_name")
		//- 削除
		slot(xs2 name="delete")
		
		//- 場面
		v-flex(xs8)
			slot(name="world_name")
		v-flex(xs2)
			v-icon.gray--text.darken4 wb_incandescent
			slot(name="world_light")
		v-flex(xs2)
			v-icon.gray--text.darken4 volume_up
			slot(name="world_sound")

		//- 要約
		v-flex(xs10)
			v-card-text
				slot(name="action_abstract")
		v-btn(xs2 icon @click="show=!show")
			v-icon {{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
		
		v-flex(xs12)
			v-card-text(v-show="show")
				slot(name="action_note")
</template>

<script>
export default {
	name: "StActionPanel",

	data() {
		return {
			show: false
		};
	}
};
</script>
