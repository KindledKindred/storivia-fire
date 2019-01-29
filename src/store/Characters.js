import db from '@/plugins/firebase'

const charactersRef = db.collection('users/${uid}/characters')

export default {
  namespaced: true,
  unsubscribe: null,

  state () {
    return {
      data:[]
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
			if(index !== -1) {
				state.data[index] = payload
			}
		},
		remove()
	}
}