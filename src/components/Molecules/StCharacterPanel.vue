<template lang="pug">
	//- 2 rows
	v-layout(row wrap)
		v-flex(xs4 md4)
			slot(name="character_name")
		v-flex(xs4 md4)
			slot(name="character_role")
		v-flex(xs2 md1)
			StEditButton
		v-flex(xs2 md1)
			StDeleteButton
		
		v-flex(xs3 md2)
			slot(name="character_age")
		v-flex(xs3 md2)
			slot(name="character_sex")
		v-flex(xs6 md8)
			slot(name="character_line_note")
</template>

<script>
import StEditButton from "@/components/Atoms/StEditButton";
import StEditDelete from "@/components/Atoms/StDeleteButton";

export default {
  name: "StCharacterPanel"
};
</script>