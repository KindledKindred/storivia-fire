<template lang="pug">
v-card.mt-4.pa-4
	v-layout(row wrap)
		v-flex(xs6 md6)
			slot(name="world_name")
		v-flex(xs2 md2)
			slot(name="world_light")
		v-flex(xs2 md2)
			slot(name="world_sound")
		slot(xs2 md1 name="delete")
	v-layout.ma-0.pa-0(justify-center)
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