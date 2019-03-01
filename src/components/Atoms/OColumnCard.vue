<template lang="pug">
  v-card.elevation-0(flat ripple min-height="320" max-height="320")
    v-card-text.text-xs-center
      v-layout(justify-center)
        slot(name="icon")
    v-card-title.py-0.layout.justify-center(primary-title)
      slot(name="title").headline.text-xs-center
    v-card-text
      slot(name="text")
</template>
