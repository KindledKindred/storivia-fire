<template lang="pug">
	v-app
		StNavigation(:currentBoard="currentBoard" @trans="transBoard")
		v-layout(row wrap)
			v-flex.mt-5(xs12)
				component(:is="currentBoard")
</template>

<script>
import StNavigation from "@/components/Molecules/StNavigation";
import StActionBoard from "@/components/Organisms/StActionBoard";
import StCharacterBoard from "@/components/Organisms/StCharacterBoard";
import StWorldBoard from "@/components/Organisms/StWorldBoard";
import StNoteBoard from "@/components/Organisms/StNoteBoard";
import StQandABoard from "@/components/Organisms/StQandABoard";

export default {
	name: "StPlotTemplate",

	components: {
		StNavigation,
		StActionBoard,
		StCharacterBoard,
		StWorldBoard,
		StNoteBoard,
		StQandABoard
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
