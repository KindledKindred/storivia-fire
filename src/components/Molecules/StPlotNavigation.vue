<template lang="pug">
	v-toolbar
		v-toolbar-title STORIVIA
		v-toolbar-items.hidden-sm-and-down
			v-btn(flat v-if="userLoggedIn" @click="transBoard") Action
			v-btn(flat v-if="userLoggedIn") Character
			v-btn(flat v-if="userLoggedIn") World
			v-spacer
			v-btn(flat  v-if="userLoggedIn" @click="logout") Sign out

<script>
import firebase from '@/plugins/firebase'

export default {
	name: 'StPlotNavigation',

	created() {
		firebase.onAuth()
	},

	computed: {
		user() {
			return this.$store.getters.user
		},
		userLoggedIn() {
			// ログイン時は true
			return this.$store.getters.isSignedIn
		}
	},

	methods: {
		logout() {
			firebase.logout()
		}
	}
}
</script>
