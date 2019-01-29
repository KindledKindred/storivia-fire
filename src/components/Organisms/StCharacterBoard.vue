<template lang="pug">
	v-card
		//- TODO: v-ifやv-showでnoteの表示を切り替えるデータを子コンポーネントへpropする
		StCharacterPanel(v-for='character in this.getCharacterSortByRoleId' :character_id="character.id")
			template(slot="character_name") {{ character.name }}
			template(slot="character_role") {{ getRoleNameById(character.role_id) }}
			template(slot="character_age") {{ character.age }}
			template(slot="character_sex") {{ character.sex }}
			template(slot="character_note") {{ character.note }}
		StModal
			v-form(
    	ref="form"
  		)
    		v-text-field(
    	  	v-model="name"
      		label="名前"
				)
				v-select(
      		v-model="role_id"
      		label="役割"
				)
					option(
						v-for="role in roles"
						:key="role.id"
					) {{ role.name }}
				v-text-field(
    	  	v-model="age"
      		label="年齢"
				)
				v-text-field(
    	  	v-model="sex"
      		label="性別"
				)
				v-text-field(
    	  	v-model="note"
      		label="メモ"
				)
    		v-btn(
      		@click="ADD_CHARACTER({name, role_id, age, sex, app, note})"
				) 追加
</template>

<script>
import StCharacterPanel from "@/components/Molecules/StCharacterPanel";
import StModal from '@/components/Molecules/StModal'
import * as types from `@/store/mutation-types`
import { mapState, mapGetters, mapActions } from `vuex`

export default {
  name: "StCharacterBoard",
  
  components: {
    StCharacterPanel,
    StModal
  },

	methods: {
    ...mapActions([types.ADD_CHARACTER])
  },

  computed: {
    ...mapState(["characters", "roles", "nextCharacterId"]),
    ...mapGetters([
      "getCharacterById",
      "getRoleById",

      "getCharacterNameById",
      "getRoleNameById",
    ]),
    // _.sortByはlodashライブラリによる破壊的昇順ソート
    getCharactersSortByRoleId() {
      return _.sortBy(this.characters, ["role_id"])
    }
  }
};
</script>
