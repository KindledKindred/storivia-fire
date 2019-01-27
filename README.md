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

Firestore 側で動的なデータを，Vuex 側で静的なデータを管理します．

### Firestore

```
User
├ Plots
│     ├ Actions
│     │      ├ function31 (:str)
│     │      ├ characterRef (:ref)
│     │      ├ worldRef (:ref)
│     │      ├ line_note (:text)
│     │      └ note (:text)
│     ├ Characters
│     │      ├ name (:str)
│     │      ├ role (:str)
│     │      ├ age (:str) // not number
│     │      ├ sex (:str)
│     │      └ note (:text)
│     └ Worlds
│            ├ name (:str)
│            ├ light (:num)
│            ├ sound (:num)
│            └ note (:text)
├ mail
└ userName
```

age は「不詳」「三十代」などを許容するため str 型にしています．

もしも全ユーザーのプロットを取得したい場合，`Users/{user}/Plots/{plot}`を取得することになり，料金が高くなりがちです．その場合は`Plots`に作者情報を持たせつつ，`Users`と同じ階層に`Plots`をもう一つ作ることで解決できるでしょう．

### Vuex

- Roles：キャラクターの 7 つの役割
- Function31s：プロップの 31 の機能
- Feedbacks：フィードバック

これらを Firestore に置いていないのは容量と通信量の節約のためです．
たとえば Firestore に Roles を置いて Character の role で ref してしまうと通信量が増えます．
firestore の料金体系上，Vuex におけるものは Vuex に置くことにしました．

#### Vuex による一元管理

「信頼できる唯一の情報源」というポリシーに従って Firestore への動作にも Vuex を噛ませる方法があり，こちらのほうが一般的です．（[Qiita よりコード例](https://qiita.com/rubytomato@github/items/78087a2c69389f642760)）

今回は単純なアプリケーションなのでコンポーネントから直接クエリを叩いています．

そもそも Firestore を使用しない，という方法もあるかもしれません．
全データがユーザーごとに独立しているので，LocalStorage を利用するならばそれでも構いません．今回はデバイス間でのデータの保持を目的に Firestore を利用しました．

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

## Tips
