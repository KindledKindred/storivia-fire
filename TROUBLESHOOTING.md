## Vuetify

### .v-XXX クラスに CSS を適用できない

`<scoped>`を宣言している場合は`v-app`のレンダリング後に適用されるため，.v-XXX クラスは上書きされません．`<scoped>`を宣言していない場合は，グローバル化するものの適用可能です．

### fixed 等 が適用されない

`toolbar`にしかありません．専用クラスを作成するか，vue-sticky などのライブラリを活用してください．

### grid がうまく改行されない

`row`宣言だけでなく，`row wrap`のようにラッピングしてください．

### v-spacer が適用されない

これを

```failed.pug
v-XXX-items
  v-item
  v-item
  v-spacer
  v-item
```

こうしてください

```success.pug
v-XXX-items
  v-item
  v-item
v-spacer
v-XXX-items
  v-item
```

`v-spacer`は items 等の中の要素として認識されません．

## Node Error

### UnhandledPromiseRejectionWarning

エラーの上部で pug について言及されていれば，pug のインデントをタブとスペースで混ぜている可能性があります．
VScode 左下の「Spaces: 2」等を「タブによるインデント」に変換することで解決します．

### Module build faild. Unexpected token

`と'を間違えているかもしれません．
このタイプミスは補完が効かないうえ似ているので見落としがちです．
「まさか」と思うミスですが Windows ユーザーがたまに Mac を使うと発生しました．

unexpected token { のように表示されていれば，括弧が正しい位置で閉じられていないか，
括弧の上側でセミコロンやカンマが抜けている可能性があります．
