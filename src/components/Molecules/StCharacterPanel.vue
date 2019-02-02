<template lang="pug">
v-card.pa-4.mt-4
	v-layout(row wrap)
		v-flex(xs5)
			slot(name="character_name")
		v-flex(xs5)
			slot(name="character_role")
		StDeleteButton(xs2)
		
		v-flex(xs5)
			slot(name="character_age")
		v-flex(xs5)
			slot(name="character_sex")
		v-btn(xs2 icon @click="show=!show")
			v-icon {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
		
		v-flex(xs12)
			v-card-text(v-show="show")
				slot(name="character_note")
</template>

<script>
import StDeleteButton from "@/components/Atoms/StDeleteButton";

export default {
  name: "StCharacterPanel",

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