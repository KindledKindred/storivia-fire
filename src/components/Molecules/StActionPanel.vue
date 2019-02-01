<template lang="pug">
//- Laptop    : 2 rows
//- SmartPhone: 4 rows
v-card(mb-4)
	v-layout(row wrap)
		//- 機能
		v-flex(xs5)
			v-card-text
				slot(name="function31_name")
		//- キャラクター
		v-flex(xs5)
			v-card-text
				slot(name="character_name")
		//- 削除
		v-flex(xs2)
			StDeleteButton
		
		//- 場面
		v-flex(xs8)
			v-card-text
				slot(name="world_name")
		v-flex(xs4)
			v-icon wb_incandescent
			slot(name="world_light")
			v-icon volume_up
			slot(name="world_sound")

		//- 要約
		v-flex(xs10)
			v-card-text
				slot(name="action_abstract")
		v-btn(xs2 icon @click="show=!show")
			v-icon {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
		
		v-flex(xs12)
			v-card-text(v-show="show")
				slot(name="action_note")
</template>

<script>
import StDeleteButton from "@/components/Atoms/StDeleteButton";

export default {
	name: "StActionPanel",

	components: {
		StDeleteButton
	},

	data() {
		return {
			show: false
		};
	}
};
</script>
