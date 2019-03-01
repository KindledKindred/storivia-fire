<template lang="pug">
  v-app
    section#top
      v-parallax(
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        )
        v-layout(
          align-center
          column
          justify-center
        )
          h1.display-3 STORIVIA
          span.subheading プロットを，もっと手軽に

          router-link(tag="button" to="/Plot")
            v-btn.ma-4(large ripple) MAKE PLOT

    section
      v-container
        v-layout.my-5(
          column
          wrap
          align-center
        )
          //- title
          // v-flex.my-3(xs12 sm4)
          // .text-xs-center
            h1.headline Technologies
          
          //- columns
          v-flex(xs12)
            v-container(gril-list-xl)
              v-layout(
                row
                wrap
                align-center
              )
                v-flex(xs12 md4)
                  OColumnCard
                    template(slot="icon")
                      v-icon(size="70") edit
                    template(slot="title")
                      h3.font-weight-light EDIT
                    template(slot="text") 物語論に基づき，キャラクターの役割など，重要かつ制限された要素はあらかじめ選択肢で提供されおり，描きたい部分の執筆に専念することができます．
                v-flex(xs12 md4)
                  OColumnCard
                    template(slot="icon")
                      v-icon(size="70") phone_iphone
                    template(slot="title")
                      h3.font-weight-light MOBILE
                    template(slot="text") 執筆系アプリには珍しい，スマホにも最適化されたデザイン．いつでもどこでも思いついた時に執筆でき，作業効率を高めます．
                v-flex(xs12 md4)
                  OColumnCard
                    template(slot="icon")
                      v-icon(size="70") add_to_home_screen
                    template(slot="title")
                      h3.font-weight-light ICON
                    template(slot="text") いちいちブラウザを開くのが面倒．そんなときは，このアプリをホームに追加してみましょう．
                    v-btn ADD HOME
</template>

<script>
import OColumnCard from "@/components/Atoms/OColumnCard";
import VueSticky from "vue-sticky";

export default {
	name: "StHomeTemplate",

	components: {
		OColumnCard
	},

	directives: {
		sticky: VueSticky
	}
};
</script>
