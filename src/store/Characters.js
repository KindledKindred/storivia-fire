import db from '@/plugins/firebase'
import {
	cpus
} from 'os';

const charactersRef = db.collection('users/${uid}/characters')

export default {
	namespaced: true,
	unsubscribe: null,

	state() {
		return {
			data: []
		}
	},

	mutations: {
		init(state, payload) {
			state.data = payload
		},
		add(state, payload) {
			state.data.push(payload)
		},
		set(state, payload) {
			const index = state.data.findIndex(character => character.id === payload.id)
			if (index !== -1) {
				state.data[index] = payload
			}
		},
		remove(state, payload) {
			const index = state.data.findIndex(character => character.id === payload.id)
			if (index !== -1) {
				state.data.splice(index, 1)
			}
		}
	},

	getters: {
		data(state) {
			return state.data
		}
	},

	actions: {
		clear({
			commit
		}) {
			commit('init', [])
		},
		// リスナーの起動
		startListener({
			commit
		}) {
			if (this.unsubscribe) {
				this.unsubscribe()
				this.unsubscribe = null
			}
			// firestoreからデータを検索
			this.unsubscribe = charactersRef.orderBy('')
		}
	}
}