<template lang="pug">
	v-layout(row wrap)
		component(xs12 md9 :is='currentBoard')
		v-layout(xs12 md3)
			StNoteBoard
			StFeedbackBoard
</template>

<script>
import StActionBoard from "@/components/Organisms/StActionBoard";
import StCharacterBoard from "@/components/Organisms/StCharacterBoard";
import StWorldBoard from "@/components/Organisms/StWorldBoard";
import StNoteBoard from "@/components/Organisms/StNoteBoard";
import StFeedbackBoard from "@/components/Organisms/StFeedbackBoard";

export default {
  name: "StPlotTemplate",

  data() {
    return {
      currentBoard: "StActionBoard"
    };
  }
};
</script>
