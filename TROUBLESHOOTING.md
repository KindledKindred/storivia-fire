## Vuetify

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

`v-spacer`は items の中の要素として認識されません．

### v-textarea で Vuex にデータを投げられない

## Node Error

### UnhandledPromiseRejectionWarning

エラーの上部で pug について言及されていれば，pug のインデントをタブとスペースで混ぜている可能性があります．
VScode 左下の「Spaces: 2」等を「タブによるインデント」に変換することで解決します．

### Module build faild. Unexpected token

`と'を間違えているかもしれません．
このタイプミスは補完が効かないうえ似ているので見落としがちです．
「まさか」と思うミスですが Windows ユーザーがたまに Mac を使うと発生しました．
