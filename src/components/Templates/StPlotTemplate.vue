<template lang="pug">
	v-app
		StNavigation(:currentBoard="currentBoard" @trans="transBoard")
		v-layout(row wrap)
			v-flex(sm8)
				component(:is="currentBoard")
			v-flex(sm4)
				StNoteBoard
				StFeedbackBoard
</template>

<script>
import StNavigation from "@/components/Molecules/StNavigation";
import StActionBoard from "@/components/Organisms/StActionBoard";
import StCharacterBoard from "@/components/Organisms/StCharacterBoard";
import StWorldBoard from "@/components/Organisms/StWorldBoard";
import StNoteBoard from "@/components/Organisms/StNoteBoard";
import StFeedbackBoard from "@/components/Organisms/StFeedbackBoard";

export default {
	name: "StPlotTemplate",

	components: {
		StNavigation,
		StActionBoard,
		StCharacterBoard,
		StWorldBoard,
		StNoteBoard,
		StFeedbackBoard
	},

	data() {
		return {
			currentBoard: "StActionBoard"
		};
	},

	methods: {
		transBoard: function(board) {
			this.currentBoard = board;
		}
	}
};
</script>
