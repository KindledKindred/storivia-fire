<template lang="pug">
	v-container(fluid grid-list-lg)
		//- panelを役割順に表示
		StCharacterPanel(
			v-for='(character, index) in this.getCharactersSortByRoleId'
			:key="character.id"
		)
			template(slot="character_name") {{ character.name }}
			template(slot="character_role") {{ getRoleNameById(character.role_id) }}
			template(slot="character_age") {{ character.age }}
			template(slot="character_sex") {{ character.sex }}
			template(slot="character_note") {{ character.note }}
			template(slot="delete")
				v-btn(icon @click="deletePanel(index)")
					v-icon delete
		v-footer(fixed)
			v-layout.mb-5.pb-5.pr-5
				v-spacer
				v-btn(outline large fab color="primary" @click="refToModalOpen")
					v-icon edit

		//- パネル追加フォーム
		StModal(ref="modal")
			v-form.pa-4(
			ref="form"
			)
				v-text-field(
					:value="name"
					@change="v => name = v"
					label="名前"
				)
				v-select(
					v-model="role_id"
					:items="roles"
					item-value="id"
					item-text="name"
					label="役割"
				)
				v-text-field(
					:value="age"
					@change="v => age = v"
					label="年齢"
				)
				v-text-field(
					:value="sex"
					@change="v => sex = v"
					label="性別"
				)
				v-textarea(
					:value="note"
					@change="v => note = v"
					label="メモ"
				)
				v-btn(
					@click="ADD_CHARACTER({name, role_id, age, sex, note})"
				) 追加
</template>

<script>
import StCharacterPanel from "@/components/Molecules/StCharacterPanel";
import StModal from "@/components/Molecules/StModal";
import * as types from "@/store/mutation-types";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
	name: "StCharacterBoard",

	components: {
		StCharacterPanel,
		StModal
	},

	data() {
		return {
			key: "",

			name: "",
			role_id: "",
			age: "",
			sex: "",
			note: ""
		};
	},

	methods: {
		...mapActions([types.ADD_CHARACTER, types.DELETE_CHARACTER]),

		deletePanel: function(index) {
			if (confirm("削除しますか？")) {
				this.DELETE_CHARACTER(index);
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
		...mapState(["characters", "roles", "nextCharacterId"]),
		...mapGetters([
			"getCharacterById",
			"getRoleById",

			"getCharacterNameById",
			"getRoleNameById"
		]),
		// _.sortByはlodashライブラリによる破壊的昇順ソート
		getCharactersSortByRoleId() {
			return _.sortBy(this.characters, ["role_id"]);
		}
	}
};
</script>
