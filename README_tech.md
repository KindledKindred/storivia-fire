# Storivia へようこそ

Storivia はプロット作成支援を目的としたシステムで
Vue と Firebase を用いて制作されています．

２種類の README はそれぞれ以下について記載しています．

1. 使用技術の基本的仕様
1. システム仕様

１つ目はかなり初歩的な内容についてのみ述べています．
目次を見てすでに習熟していると思われたなら `README.md` へどうぞ．

## 目次

1. [VScode](##VScode)
1. [npm](##npm)
1. [Pug](##Pug)
1. [Stylus](##Stylus)
1. [ES6](##ES6)
1. [Vue](##Vue)
1. [Vue-Router](##Vue-Router)
1. [Vuetify](##Vuetify)
1. [Firebase](##Firebase)
1. [PWA](##PWA)

## VScode

執筆時点では Vue の補完が VScode でしか効かないことや
将来対応されるであろう Vue + Typescript も VScode だけなので
特に強いこだわりがなければ VScode を使用してください．

デフォルトで Emmet（試しに Sample.html を作って"!"を打ち込んでみてください）などがありますが
加えて以下の拡張機能があると便利でしょう．

- Bracket Pari Colorizer：()や{}を組ごとに色分け
- EvilInspactor：全角空白をハイライト
- Firebase：Firestore の Syntax ハイライト機能
- indent-rainbow：インデントで色分け．初期だと煩すぎるので後述のセットを参照
- language-stylus：Stylus の Snipet
- Prettier：コード整形，要 UserSetting
- Vetur：Vue 関連

### indent-rainbow

UserSetting にこれを追加してください．

```json
  "indentRainbow.colors": [
    "rgba( 35, 35, 35, .8)",
    "rgba( 55, 55, 55, .8)",
    "rgba( 75, 75, 75, .8)",
    "rgba( 55, 55, 55, .8)"
  ]
```

## npm

ライブラリ管理システムです．
ターミナルから以下のコードを打ち込めばとりあえず大丈夫です．

- `npm i` package.json にある開発環境をインストールします．
- `npm i -D [package-name]` 対象パッケージを開発環境にインストールします．
- `npm i npm` npm をアップデートします．

## Pug

Pug は HTML を書きやすくしたテンプレートエンジンです．
以下のコードを見てください．

```pug
#header Header
.contents-wrapper
  .content
    article
      .article-title Title
      .article-content
        img.thumnail(href="sample-url" alt="thumnail")
        p Lorem ipsum
#footer Footer
```

```html
<div id="header">Header</div>
<div class="contents-wrapper">
  <div class="content">
    <article>
      <div class="article-title">Title</div>
      <div class="article-content">
        <img class="thumnail" href="sample-url" alt="thumnail" />
        <p>Lorem ipsum</p>
      </div>
    </article>
  </div>
</div>
<div id="footer">Footer</div>
```

`<div></div>`に id やクラスが存在する場合はそれぞれ`#id-name`，`.class-name`と書けます．
インデントで入れ子構造を表現するため閉じタグは不要です．

なお変数，for 文，if 文，分割表現も書けますが後述する Vue で扱うため
併用環境で pug としてこれらを用いるのは禁止します．

## Stylus

CSS をいい感じに書くやつ．

Sass と Less の長所を取り入れた CSS プリプロセッサです．
後述の Vuetify によりほとんど Stylus を書くことはありませんが
もし必要であればこの言語を使用してください．

```styl
@import '@/stylus/_extend'

.content
  padding 2wh 2ww
  background-color _white
  &-title
    font-size 1.4rem
    border 1px solid _indigo
  &-btn
    @extend .btn
    &:hover
      transition all .3s
      opacity .8
```

## ES6

[Qiita のこの記事](https://qiita.com/soarflat/items/b251caf9cb59b72beb9b)を読めばいいと思います（丸投げ）

補足すると，`const`は C++ほど厳密ではなく
配列やオブジェクトであれば要素やプロパティを追加できます．

アロー関数は後述する Vue と相性が悪い部分があるので注意してください．

#### クラス構文とコンポーネント

今回はコンポーネント志向でコーディングしましたが
拡張する際にクラス構文を用いても構いません．

ただしこれは Angular 等の経験者が同じように Vue を使うためのものであり，
一から学ぶのであれば情報量が多いコンポーネント志向を推奨します．

またあなたが Vue の学習用ではなく，システムの拡張のために
この README を読んでいる場合，あなたの次にコードを読む人のために
コンポーネント志向でのコーディングに統一しておくべきでしょう．

## Vue

拡張子`.vue`のファイルは単一ファイルコンポーネントと呼びます．
１つ１つがアプリを構築する部品であり，これを組み合わせて完成させます.

[公式ドキュメント](https://jp.vuejs.org/)が非常に便利なので
とりあえず開きっぱなしにして随時検索すればいいと思います．

### SPA (Single Page Application)

Vue で制作されたアプリは 1 つのページのみで構成されます．
そのため画面遷移が非常に高速であるという利点と
初期ローディング時間が遅いという欠点を持ちます．

#### SSR と Nuxt.js

読まなくてもいいですがもし実装しようとしている方がいれば．

SSR は上記のローディング時間を解決するための手法であり
Nuxt.js がデフォルトで提供しているモードでもあります．
ただし実装コストが嵩み，Fierbase-spark でのホスティングは不可となり
今回のシステムは初期ロードが遅くないのもあって不採用としました．

もし特別な理由があって Nuxt.js を採用したい場合は
`mode: 'spa'`と設定すれば非 SSR 化します．
ただし vue-cli が相当便利なので非 SSR であればそれで十分でしょう．

### 単一ファイルコンポーネント

html, css, js がまとまって１つのファイルに存在します．
また css は例のように scoped をつけることで名前空間を汚染しなくなります．

```pug
article
  //- '{{}}'はリアクティブなテキスト
  p {{ message }}
  //- '@'は'v-on'の省略記法ですが'@click'で覚えてしまえばいいです．
  button(@click="openModal")

  //- 他のコンポーネントをコール
  SampleModal
    slot(name="header") Hello Vue!
    //- 'v-model'は双方向バインディング，今回はmessageをリアルタイムに更新．
    input(v-model="message" placeholder="input message...")
```

```js
import SampleModal from '@/components/Molecules/SampleModal'

export default {
    name: 'SampleHome',

    data () { // アロー関数はthisをundefinedに束縛するので使用不可
      return {
        message: 'default message',
        showModal: false
      }
    },

    components: {
        SampleModal
    }

    methods () {
        openModal: () => {
            showModal = true
        }
    }
}

/*** SampleModal.vue
/* export default {
/*     name: 'SampleModal'
/*     props: ['showModal'] // 親からデータを受け取ります
/***
}
```

```pug
<template lang="stylus scoped">
</template>
```

上記のサンプルで実際のコードを大雑把に読めるようになると思います．
概ね読めれば書けるように練習するのも楽になるはずです．

## Vue-Router

ルーティング設定を行うライブラリ．
`route.js`を見てくだされば概ね理解できると思います．

`<router-link to="">`で URL 遷移．
`<router-view>`で現在の URL のコンポーネントを表示．

History モードはホームルートの#除去をするものだと思ってください．
`$router`は Router 全てを，`$route`は現在のルートを指しますが
ココらへんを使う人は公式 API 見てください．

## Vuex

データ管理ライブラリ．
「データの一元管理」という設計思想を持ちます．
慣れないうちは「VuexCycle」の画像を開きながら設計してください．

## Vuetify

CSS を書かずにデザインができるライブラリ．
[公式ページ](https://vuetifyjs.com/ja/)のドキュメントを見つつ
「Vuetify Accordion」とかでググるのが早いです．
Bootstrap 等の CSS フレームワークを触った方ならすぐ慣れると思いますが，
Grid が 12 を超えてもラップしないと改行されないなどの違いもあります．

Bootstrap や Foundation との違いは，Vue との親和性はもちろん
`v-`のカスタムタグによる名前空間の衝突防止，
非常に美しいマテリアルデザインが挙げられます．
デザインの詳細は[このブログ記事](http://fladdict.net/blog/2015/05/material-design.html)でざっくり把握した後
興味があれば[マテリアルデザイン公式ページ](https://material.io/)も見るといいでしょう．

## Firebase

Google が提供する BaaS(Background as a Service)．
今回 Firestore を使用していませんが，ざっくり紹介しておきます．

### Firestore

No-SQL のリアルタイムデータベース．
読み込み処理が重いので正規化などの RDB 知識は忘れて
コレクションを複製しようがビューファーストで設計してください．
クエリは貧弱ですが，上記の志向ならあまり問題にならないでしょう．

`export const db = firebaseApp.firestore()`でデータベースを宣言したとして
`db.ref("path")`でコレクション（テーブル）やドキュメント（カラム）にアクセス．

| クエリ        | 処理 |
| ------------- | ---- |
| `.get(data)`  | 取得 |
| `.set(data)`  | 更新 |
| `.push(data)` | 追加 |

リスナーは

| クエリ                            | 処理     |
| --------------------------------- | -------- |
| `.on(data, function(snapshot){})` | アタッチ |
| `.off(_data)`                     | デタッチ |

- off の引数省略時は全リスナーを削除
- snapshot：イベント発火時のデータベース情報
- `.once` 1 度のみ実行される非同期なイベント

### Hosting

Web に公開します．

`firebase deploy`で`/dist`内のものが公開されますが
テスト用プロジェクトを新たに用意してもいいかもしれません．
その時は hosting のデフォルトフォルダが`/public`になっているので注意してください．

## PWA

Progressive Web Apps.
ネイティブアプリのような振る舞いをする Web アプリのこと．

基本的にコードをいじることはないと思いますが
働きをざっくりと説明しておきます．
