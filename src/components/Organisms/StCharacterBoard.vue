<template lang="pug">
	v-card
		StCharacterPanel(v-for='')
			template(slot="character_name")
			template(slot="character_role")
			template(slot="character_age")
			template(slot="character_sex")
			template(slot="character_line_note")
		StModal
			v-form(
    	ref="form"
    	v-model="valid"
    	lazy-validation
  		)
    		v-text-field(
    	  	v-model="name"
      		label="名前"
				)
				v-select(
      		v-model="role"
      		:items="roles"
      		label="役割"
				)
				v-text-field(
    	  	v-model="age"
      		label="年齢"
				)
				v-text-field(
    	  	v-model="sex"
      		label="性別"
				)
				v-text-field(
    	  	v-model="note"
      		label="メモ"
				)
    		v-btn(
      		:disabled="!valid"
      		@click="addCharacter"
				) 追加
</template>

<script>
import StCharacterPanel from "@/components/Molecules/StCharacterPanel";
import db from "@/plugins/firebase";

export default {
  name: "StCharacterBoard",

  data() {
    return {
      database: null,
      charactersRef: null,

      valid: true,
      name: "",
      role: "",
      age: "",
      sex: "",
      note: "",

      roles: [
        "1. 主人公",
        "2. 敵対者",
        "3. 贈与者",
        "4. 助手",
        "5. 被害者",
        "6. 派遣者",
        "7. 偽主人公"
      ],

      characters: []
    };
  },

  created() {
    db.collection('users/${uid}/characters').get()
    .then((querySnapshot) => {
      this.loading = false
      querySnapshot.forEach((doc) => {
        let data = {
          'id': doc.id,
          'name': doc.data().name,
          'role': doc.data().role,
          'age': doc.data().age,
          'sex': doc.data().sex,
          'note': doc.data().note
        }
        this.characters.push(data)
      })
    })
  },

  methods: {
    addCharacter() {
      db.collection('users/${uid}/characters').push({
        name: this.name,
        role: this.role,
        age: this.age,
        sex: this.sex,
        line_note: this.note
      });
    },
    updateCharacter: function(character, key) {
      let updates = {};
      updates["/characters/" + key] = character;
      db.ref().update(updates);
    },
    deleteCharacter: function(key) {
      db
        .ref('users/${uid}/characters')
        .child(key)
        .remove();
    }
  }
};
</script>
