<template lang="pug">
	v-container(fluid grid-list-lg)
		StWorldPanel(v-for='world in worlds' :key="world.id")
			template(slot="world_name") {{ world.name }}
			template(slot="world_light") {{ world.light }}
			template(slot="world_sound") {{ world.sound }}
			template(slot="world_note") {{ world.note }}
			template(slot="delete")
				v-btn(icon @click="deletePanel(key)")
					v-icon delete
		v-footer(fixed)
			v-layout.mb-5.pb-5.pr-5
				v-spacer
				v-btn(outline large fab color="indigo" @click="refToModalOpen")
					v-icon edit

		StModal(ref="modal")
			v-card
				v-form.pa-4(
				ref="form"
				)
					v-text-field(
						:value="name"
					@change="v => name = v"
					label="名前"
					)
					v-slider(
						v-model="light"
						:min="1"
						:max="5"
						step="1"
						ticks="always"
						thumb-label="always"
						label="光量"
					)
					v-slider(
						v-model="sound"
						:min="1"
						:max="5"
						step="1"
						ticks="always"
						thumb-label="always"
						label="音量"
					)
					v-text-field(
						:value="note"
						@change="v => note = v"
						label="メモ"
					)
					v-btn(
						@click="ADD_WORLD({name, light, sound, note})"
					) 追加
</template>
<script>
import StWorldPanel from "@/components/Molecules/StWorldPanel";
import StModal from "@/components/Molecules/StModal";
import * as types from "@/store/mutation-types";
import { mapState, mapActions } from "vuex";

export default {
  name: "StWorldBoard",

  components: {
    StWorldPanel,
    StModal
  },

  data() {
    return {
      name: "",
      light: "",
      sound: "",
      note: ""
    };
  },

  methods: {
    ...mapActions([types.ADD_WORLD, types.DELETE_WORLD]),

    deletePanel: function(key) {
      if (confirm("削除しますか？")) {
        this.DELETE_WORLD(key);
      }
    },

    refToModalOpen() {
      this.$refs.modal.openModal();
    },

    resetActionModal() {
      this.$refs.form.reset();
    }
  },

  computed: {
    ...mapState(["worlds", "nextWorldId"])
  }
};
</script>
