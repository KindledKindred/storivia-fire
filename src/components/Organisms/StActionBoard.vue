<template lang="pug">
	v-card
		//- TODO: v-ifやv-showでnoteの表示を切り替えるデータを子コンポーネントへpropする
		StactionPanel(v-for='action in this.getActionSortByFunction31Id' :action_id="action.id")
			template(slot="fucntion31_name") {{ getFunction31NameById(action.function31_id) }}
			template(slot="character_name") {{ getCharacterNameById(action.character_id) }}
			template(slot="world_name") {{ getWorldNameById(action.world_id) }}
			template(slot="world_light") {{ getWorldLightById(action.world_id) }}
			template(slot="world_sound") {{ getWorldSoundById(action.world_id) }}
			template(slot="action_abstract") {{ action.abstract }}
			template(slot="action_note") {{ action.note }}
		StModal
			v-form(
    	ref="form"
  		)
				v-select(
      		v-model="function31_id"
      		label="機能"
				)
					option(
						v-for="function31 in function31s"
						:key="function31.id"
					) {{ function31.name }}
				v-select(
      		v-model="character_id"
      		label="行動者"
				)
					option(
						v-for="character in characters"
						:key="character.id"
					) {{ character.name }}
				v-select(
      		v-model="world_id"
      		label="場面"
				)
					option(
						v-for="world in worlds"
						:key="world.id"
					) {{ world.name }}
				v-text-field(
    	  	v-model="abstract"
      		label="要約"
				)
				v-text-field(
    	  	v-model="note"
      		label="メモ"
				)
    		v-btn(
      		@click="ADD_ACTION({function31_id, character_id, world_id, abstract, note})"
				) 追加
</template>

<script>
import StActionPanel from "@/components/Molecules/StActionPanel";
import StModal from '@/components/Molecules/StModal'
import * as types from `@/store/mutation-types`
import { mapState, mapGetters, mapActions } from `vuex`

export default {
  name: "StActionBoard",
  
  components: {
    StActionPanel,
    StModal
  },

	data() {},

	methods: {
    ...mapActions([types.ADD_ACTION])
  },

  computed: {
		...mapState([
			'actions',
			'characters',
			'worlds',
			'function31s',
			'nextActionId',
			'nextCharacterId',
			'nextWorldId',
			'nextWorldId',
			]),

		...mapGetters([
			'getActionById',
			'getCharacterById',
			'getWorldById',
			'getFunction31ById',

			'getCharacterNameById',
			'getWorldNameById',
			'getWorldLightById',
			'getWorldSoundById',
			'getFunction31NameById'
		]),

		// パネル追加時に機能idでソート
		// _.function は lodash というライブラリのもの
		// sortByは破壊的(配列を上書きする)な昇順ソート処理
		getActionsSortByFunction31Id () {
			return _.sortBy(this.actions, ['function31_id'])
		}
	}
};
</script>