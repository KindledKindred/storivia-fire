<template lang="pug">
v-card.pa-4.mt-4
	v-layout(row wrap)
		v-flex(xs4 md6)
			slot(name="world_name")
		v-flex(xs2 md2)
			slot(name="world_light")
		v-flex(xs2 md2)
			slot(name="world_sound")
		StDeleteButton(xs2 md1)
		v-btn(xs2 icon @click="show=!show")
			v-icon {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
		
		v-flex(xs12)
			v-card-text(v-show="show")
				slot(name="world_note")
</template>

<script>
import StDeleteButton from "@/components/Atoms/StDeleteButton";

export default {
  name: "StWorldPanel",

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