このファイルを読まれる方には２種類いらっしゃるかと思います．

- Vue の学習のためソースコードを読まれる方
- プロジェクトを引き継ぎ拡張される方

前者におかれましてはこのファイルのみで構いません．
後者におかれましては，プロジェクトの破綻やビューの統一性の欠損を防ぐため，以下の２ファイルも必ずお読みください．

- CODING_RULES.md
- DESIGN_RULES.md

## 目次

1. [開発環境](##開発環境)
1. [システムの目的](##システムの目的)
1. [データの構造とフロー](##データの構造とフロー)
1. [デザイン](##デザイン)
1. [ディレクトリごとの役割](##ディレクトリごとの役割)
1. [コード解説](##コード解説)
1. [Tips](##Tips)

## 開発環境

システム自体は[このサイト](https://storivia.firebaseapp.com/)にて公開されています．
ただそのままデプロイしても動きません．
理由はホスティングを司る部分がセキュリティの都合で空白になっているためです．

[Firestore 公式](https://firebase.google.com/?hl=ja)へアクセスした後，アカウントとプロジェクトを制作してください．その後「アプリを追加」にて表示されるコードを`@/plugins/firebase/firebase.js`内のコメントを参考にしながらコピペしてください．それによりあなたのプロジェクトとしてこのコードが登録されます．

次に以下のコマンドを打ち込んでいきます．

### 依存モジュールのインストール

`npm i npm | npm i | npm i -g firebase-tools`

### コンパイル

- `npm run build` 製品用にビルドします．`/dist`が生成されます．
- `npm run serve` ローカルサーバーが起動します．Vue 側をウォッチャします．

### デプロイ

- `firebase deploy` デプロイして URL に反映されるようにします．本番用．
- `firebase serve` ローカルサーバーが起動します．firebase 側をウォッチャします．

### その他

`npm i`で概ね揃いますが，いくつか追加で必要なものがあります．

- VueDevtools：Google の開発者ツールを Vue 用に拡張
- VScode：Vue を唯一サポート

## システムの目的

同梱の `Ueyama_poster_jsis_final.pdf` を参考にしてください．

## データの構造とフロー

ユーザー個々のデータしかないため全て Vuex で管理し，Firestore は利用していません．

```
actions
      ├ id (:num)
      ├ function31_id (:str)
      ├ character_id (:ref)
      ├ world_id (:ref)
      ├ abstract (:text)
      └ note (:text)
characters
      ├ id (:num)
      ├ name (:str)
      ├ role (:str)
      ├ age (:str) // not number
      ├ sex (:str)
      └ note (:text)
worlds
      ├ id (:num)
      ├ name (:str)
      ├ light (:num)
      ├ sound (:num)
      └ note (:text)
note
function31s (物語における31の機能)
      ├ id (:num)
      ├ name (:str)
      └ description (:text)
QandAs
      ├ id (:num)
      ├ question (:text)
      └ answer (:text)
feedbacks
      ├ id (:num)
      └ content (:text)
```

character や world のデータを action が受け取ります．
データの追加や削除は参照先では発生せず，常に該当データの親ページでのみ行われます．
たとえば，character の変更は参照先の ACTION ページでは発生せず，
必ず CHARACTER ページでのみ行われます．
ユーザーの意識スペースを ACTION, CHARACTER, WORLD で分離する意図があるため，
この制約は必ず守るようにしてください．

```
mutations
      ├ ADD_XXX (パネルの追加)
      ├ UPDATE_XXX (パネルの編集)
      ├ DELETE_XXX (パネルの削除)
      └ SHOW_FEEDBACK (feedbackの表示)
```

feedbacks はユーザーに対する賞賛や改善点の示唆などを含んだステートです．
SHOW_FEEDBASK は ADD_ACTION 時に function31_id を受け取って，その内容に応じた feedback を返します．
feedback.id と action.function31_id は概ね１：１対応です．

## デザイン

使いやすく目的がはっきりと伝わるものを良いデザインとします．
「Atomic デザイン」や「Material デザイン」に聞き覚えがないならば`README_tech.md`へどうぞ．

### Atomic デザイン

機能ごとの最小の単位で部品を切り分け，その積み重ねで構成するデザイン．
保守性と拡張性の高さ，という開発面でのメリットに加え，
統一されたデザインによって使用者の混乱を防ぎます．

<em>Atoms -> Molecules -> Organisms -> Templates</em>

へとコンポーネントの粒度が大きくなっていきます．

### Material デザイン

Vuetify の採用により従来の CSS フレームワークの持つ開発コストの削減というメリットだけでなく，
ページを実世界の物体（紙の積み重ね）に見立てたデザインで配置を容易に伝えることができます．

### UI デザイン

「ユーザーがタップ可能なコンポーネントの最小サイズは直径 44px」などのルールです．
詳細は`DESIGN_RULES.md`にまとめてあります．

## ディレクトリごとの役割

| ルート直下             |                          |             |                                    |
| ---------------------- | ------------------------ | ----------- | ---------------------------------- |
| .firebase              |                          |             | ホスティング関連                   |
| dist                   |                          |             | 公開用ディレクトリ                 |
| node_modules           |                          |             | 依存モジュール                     |
| public                 |                          |             | ビルド時のディレクトリ             |
|                        | favicon.ico              |             | サイトアイコン                     |
|                        | index.html               |             |                                    |
|                        | manifest.json            |             | PWA 設定                           |
|                        | robots.txt               |             | SEO 対策：クローラーのアクセス制限 |
| src                    |                          |
|                        | assets                   |
|                        | components               |
|                        |                          | Atoms       | 機能上最小限の部品                 |
|                        |                          | Moleclules  | Atoms の組み合わせ                 |
|                        |                          | Organisms   | Molecules の組み合わせ             |
|                        |                          | Templates   | ページのフレーム                   |
|                        | plugins                  |             |
|                        |                          | firebase.js | firebase の設定                    |
|                        |                          | vuetify.js  | vuetify の設定                     |
|                        | views                    |             | /route の表示用                    |
|                        | App.vue                  |             | SPA の土台となるページ             |
|                        | main.js                  |             | メイン処理，他の js ファイルを統合 |
|                        | registerServiceWorker.js |             | オフライン動作                     |
|                        | router.js                |             | ルート制御                         |
|                        | store.js                 |             | Vuex 制御，今回は State のみ       |
| .browserlistrc         |                          |             | CSS のオートプレフィックス         |
| .firebaserc            |                          |             | デプロイ先の設定                   |
| firebase.json          |                          |             | firebase 設定                      |
| firestore.indexes.json |                          |             | Firestore へのデプロイ             |
| package-lock.json      |                          |             |
| package.json           |                          |             | 依存モジュールの管理               |
| postcss.config.js      |                          |             | PostCSS 設定                       |

## コード解説

おおまかな流れは上で説明しましたので，ここでは一部のコードに関する解説を行っていきます．
対象となるコードの性質は以下の通り．いずれもコード中のコメントで述べるには長すぎると判断しました．

- 現在の仕様では最善でなく拡張を見越した実装
- 計算量が多いが現実的に破綻しないと判断した実装
- 一般的な記述ではなく，特定の目的に強く縛られた実装

引き継がれる方へ．
特殊なコードを記述をする場合，「なぜそうしたか」をここに加筆してください．
ここに残しておくことで，数ヶ月後の自身が謎めいたコードの解読に時間を浪費せずに済みます．

1. [Vuetify](##Vuetify)
1. [route](###route)
1. [ACTION](###ACTION)
1. [CHARACTER](###CHARACTER)
1. [WORLD](###WORLD)
1. [FEEDBACK](###FEEDBACK)

### Vuetify

#### StModal.vue

Vuetify のデフォルトモーダルでは開閉データが親コンポーネントに存在するため， 表示だけを担うモーダルが密結合してしまいます．
将来１つの画面で数種のモーダルが存在するときにバグの発生が想定されるので，公式から外した形で疎結合にしています．
StModal のコメントに参考にした Qiita のリンクを載せています．

### route

`/action`などのルートを使わず全て`/`で管理しています．
これにより`StNavigation.vue`，`StNoteBoard.vue`，`StFeedbackBoard.vue`が固定され，
残りの部分（右側カラム）のみが変遷していることをコード上でも示しています．

実際のコード

```StNavigation.vue
<template lang="pug">
  v-btn(flat @click="$emit('trans', 'StActionBoard')") Action
</template>

<script>
  props: ["currentBoard"]
</script>
```

```StPlotTemplate.vue
<template lang="pug">
  StNavigation(:currentBoard="currentBoard" @trans="transBoard")
</template>

<script>
  methods: {
    transBoard: function(board) {
      this.currentBoard = board
    }
  }
</script>
```

上記のように`currentBoard`で表示するコンポーネントを保持しています．

### ACTION

ここでは ACTION だけでなく，CHARACTER や WORLD に共通する処理についても述べます．

#### Board(親)と Panel(子)の機能分離

Board は機能を，Panel は表示を担います．ただし Board は Panel に関連した機能以外とは疎結合になります．具体的には以下です．

- Board は Panel の追加と削除を担います
- Panel は Board から渡されたデータを表示します
- Board は Modal の表示関連のデータを持ちません

#### DeleteButton

当初は Atomic デザインに従って`StDeleteButton`->`StActionPanel`->`StActionBoard`のようにしていました．
この状態から削除しようとすると，`Board`から孫コンポーネントである`Button`にデータを流す必要がありました．
煩雑な書き方になる一方で，Vuex で管理するべきデータでもなかったので，今回は`StDeleteButton`自体を削除しました．
これにより機能は`Board`に集約しましたが，コンポーネントの記述は冗長になりました．
もし拡張時に`StDeleteButton`が必要になるならば実装してください．

#### mutation-types という遺産

今回 mutation-types.js を用いて回りくどい書き方をしています．
これは過去の書き方なので，Vue の学習者やシステムの拡張者は[Qiita の記事](https://qiita.com/yuukive/items/8e3cf08d28c30631a8b6)を参考にしてください．
