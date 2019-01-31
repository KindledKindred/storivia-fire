<template lang="pug">
	v-card
		//- TODO: v-ifやv-showでnoteの表示を切り替えるデータを子コンポーネントへpropする
		StActionPanel(v-for='action in this.getActionsSortByFunction31Id' :action_id="action.id")
			template(slot="fucntion31_name") {{ getFunction31NameById(action.function31_id) }}
			template(slot="character_name") {{ getCharacterNameById(action.character_id) }}
			template(slot="world_name") {{ getWorldNameById(action.world_id) }}
			template(slot="world_light") {{ getWorldLightById(action.world_id) }}
			template(slot="world_sound") {{ getWorldSoundById(action.world_id) }}
			template(slot="action_abstract") {{ action.abstract }}
			template(slot="action_note") {{ action.note }}
		v-btn(@click="refToModalOpen") 追加
		StModal(ref="modal")
			v-form(
				ref="form"
			)
				v-select(
					v-model="function31_id"
					:items="function31s"
					item-value="id"
					item-text="name"
					label="機能"
				)
				v-select(
					v-model="character_id"
					:items="characters"
					item-text="name"
					label="行動者"
				)
				v-select(
					v-model="world_id"
					:items="worlds"
					item-text="name"
					label="場面"
				)
				//- v-model はカスタム要素では使用不可
				v-text-field(
					:value="abstract"
					@change="v => abstract = v"
					label="要約"
				)
				v-text-field(
					:value="note"
					@change="v => note = v"
					label="メモ"
				)
				v-btn(
					@click="ADD_ACTION({function31_id, character_id, world_id, abstract, note}); resetActionModal"
				) 追加
</template>

<script>
import StActionPanel from "@/components/Molecules/StActionPanel";
import StModal from "@/components/Molecules/StModal";
import * as types from "@/store/mutation-types";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "StActionBoard",

  components: {
    StActionPanel,
    StModal
  },

  data() {
    return {
      function31_id: "",
      character_id: "",
      world_id: "",
      abstract: "",
      note: ""
    };
  },

  methods: {
    ...mapActions([types.ADD_ACTION]),

    refToModalOpen() {
      this.$refs.modal.openModal();
    },

    resetActionModal() {
      this.$refs.form.reset();
    }
  },

  computed: {
    ...mapState([
      "actions",
      "characters",
      "worlds",
      "function31s",
      "nextActionId",
      "nextCharacterId",
      "nextWorldId",
      "nextWorldId"
    ]),

    ...mapGetters([
      "getActionById",
      "getCharacterById",
      "getWorldById",
      "getFunction31ById",

      "getCharacterNameById",
      "getWorldNameById",
      "getWorldLightById",
      "getWorldSoundById",
      "getFunction31NameById"
    ]),

    // パネル追加時に機能idでソート
    // _.function は lodash というライブラリのもの
    // sortByは破壊的(配列を上書きする)な昇順ソート処理
    getActionsSortByFunction31Id() {
      return _.sortBy(this.actions, ["function31_id"]);
    }
  }
};
</script>