<template lang="pug">
	v-card
		StworldPanel(v-for='world in worlds' :world_id="world.id")
			template(slot="world_name") {{ world.name }}
			template(slot="world_light") {{ world.light }}
			template(slot="world_sound") {{ world.sound }}
      template(slot="world_note") {{ world.note }}
		StModal
			v-form(
    	ref="form"
  		)
    		v-text-field(
    	  	v-model="name"
      		label="名前"
				)
				v-slider(
      		v-model="light"
      		step="5"
          label="光量"
				)
				v-slider(
    	  	v-model="sound"
      		step="5"
          ticks="always"
          label="音量"
				)
				v-text-field(
    	  	v-model="note"
          step="5"
          ticks="always"
      		label="メモ"
				)
    		v-btn(
      		@click="ADD_WORLD({name, light, sound, note})"
				) 追加
</template>

<script>
import StWorldPanel from "@/components/Molecules/StWorldPanel";
import StModal from '@/components/Molecules/StModal'
import * as types from `@/store/mutation-types`
import { mapState, mapActions } from `vuex`

export default {
  name: "StWorldBoard",
  
  components: {
    StWorldPanel,
    StModal
  },

	methods: {
    ...mapActions([types.ADD_WORLD])
  },

  computed: {
    ...mapState(["worlds", "nextWorldId"])
  }
};
</script>
