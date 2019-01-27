<template lang="pug">
	//- 2 rows
	v-layout(row wrap)
		v-flex(xs4 md6)
			slot(name="wolrld_name")
		v-flex(xs2 md2)
			slot(name="world_light")
		v-flex(xs2 md2)
			slot(name="world_spund")
		v-flex(xs2 md1)
			StEditButton
		v-flex(xs2 md1)
			StDeleteButton

		v-flex(xs12 md12)
			slot(name="line_note")
</template>

<script>
import StEditButton from "@/components/Atoms/StEditButton";
import StEditDelete from "@/components/Atoms/StDeleteButton";

export default {
  name: "StCharacterPanel"
};
</script>