<template lang="pug">
	v-container(fluid grid-list-lg)
		div(v-sticky="{stickyTop: 60}")
			StFeedbackPanel
				template(slot="function31") {{ getFunction31NameById(function31_id) }}
				template(slot="description") {{ getFunction31DescriptionById(function31_id) }}
		//- panel表示領域：プロップの機能順に表示
		StActionPanel(
			v-for='(action, index) in this.getActionsSortByFunction31Id'
			:key="action.id"
		)
			template(slot="function31_name") {{ getFunction31NameById(action.function31_id) }}
			template(slot="character_name") {{ getCharacterNameById(action.character_id) }}
			template(slot="world_name") {{ getWorldNameById(action.world_id) }}
			template(slot="world_light") {{ getWorldLightById(action.world_id) }}
			template(slot="world_sound") {{ getWorldSoundById(action.world_id) }}
			template(slot="action_abstract") {{ action.abstract }}
			template(slot="action_note") {{ action.note }}
			template(slot="delete")
				v-btn(icon @click="deletePanel(index)")
					v-icon delete
		v-footer(fixed)
			v-layout.mb-5.pb-5.pr-5
				v-spacer
				v-btn(outline large fab color="indigo" @click="refToModalOpen")
					v-icon edit

		//- パネル追加フォーム
		StModal(ref="modal")
			v-form.pa-4(
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
					item-value="id"
					item-text="name"
					label="行動者"
				)
				v-select(
					v-model="world_id"
					:items="worlds"
					item-value="id"
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
				v-layout(justify-center)
					v-btn(
						@click="ADD_ACTION({function31_id, character_id, world_id, abstract, note}); showCongrats; resetActionModal"
					) 追加
</template>

<script>
import StFeedbackPanel from "@/components/Molecules/StFeedbackPanel";
import StActionPanel from "@/components/Molecules/StActionPanel";
import StDeleteButton from "@/components/Atoms/StDeleteButton";
import StModal from "@/components/Molecules/StModal";
import * as types from "@/store/mutation-types";
import { mapState, mapGetters, mapActions } from "vuex";
import VueSticky from "vue-sticky";

export default {
	name: "StActionBoard",

	components: {
		StFeedbackPanel,
		StActionPanel,
		StDeleteButton,
		StModal
	},

	directives: {
		sticky: VueSticky
	},

	data() {
		return {
			show_congrats: false,
			show_encouragement: false,
			current_congrats: {
				icon: "",
				message: ""
			},

			key: "",

			function31_id: "",
			character_id: "",
			world_id: "",
			abstract: "",
			note: ""
		};
	},

	methods: {
		...mapActions([types.ADD_ACTION, types.DELETE_ACTION]),
		...mapGetters(["getCongratsById"]),

		deletePanel: function(index) {
			if (confirm("削除しますか？")) {
				this.DELETE_ACTION(index);
			}
		},

		refToModalOpen() {
			this.$refs.modal.openModal();
		},

		resetCongrats() {
			this.show_congrats = false;
		},

		resetActionModal() {
			console.log("resetActionModal is working");
		},

		showCongrats() {
			this.show_congrats = true;
		},

		showEncouragement() {
			this.show_encouragement = true;
		}
	},

	computed: {
		...mapState([
			"actions",
			"characters",
			"worlds",
			"function31s",
			"congrats",
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
			"getFunction31NameById",
			"getFunction31DescriptionById"
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

<style lang="stylus">
.v-dialog {
	margin-top: 92px !important;
}
</style>

<style lang="stylus" scoped>
.v-dialog {
	margin-top: 92px !important;
}
</style>

