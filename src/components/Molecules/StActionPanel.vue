<template lang="pug">
	//- Laptop    : 2 rows
	//- SmartPhone: 4 rows
	v-layout(row wrap)
		//- 機能
		v-flex(xs8 md3)
			slot(name="function31_name")

		//- 編集・削除 ※スマートフォンでのみ表示
		v-flex(xs2 hidden-sm-and-up)
			StEditButton
		v-flex(xs2 hidden-sm-and-up)
			StDeleteButton
		
		//- キャラクター
		v-flex(xs6 md6)
			slot(name="character_name")
		
		//- 編集・削除 ※パソコンでのみ表示
		v-flex(md1 hidden-xs-and-down)
			StEditButton
		v-flex(md1 hidden-xs-and-down)
			StDeleteButton
		
		//- 場面
		v-flex(xs6 md3)
			slot(name="world_name")
		v-flex(xs3 md2)
			slot(name="world_light")
		v-flex(xs3 md2)
			slot(name="world_sound")

		//- 要約
		v-flex(xs12 md5)
			slot(name="action_abstract")
		
		v-flex(xs12 md12)
			slot(name="action_note")
</template>

<script>
import StEditButton from "@/components/Atoms/StEditButton";
import StDeleteButton from "@/components/Atoms/StDeleteButton";

export default {
  name: "StActionPanel",

  components: {
    StEditButton,
    StDeleteButton
  }
};
</script>
