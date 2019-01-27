<template lang="pug">
	v-card
		StActionPanel(v-for='')
</template>

<script>
import StActionPanel from "@/components/Molecules/StActionPanel";
import db from "@/plugins/firebase";

export default {
  name: "StActionBoard",

  created() {
    this.database = db;
    this.todosRef = this.db.ref("todos");

    let _this = this;
    this.todosRef.on("value", function(snapshot) {
      _this.todos = snapshot.val(); // データに変化が起きたときに再取得する
    });
  },

  methods: {
    createTodo: function() {
      if (this.newTodoName == "") {
        return;
      }
      this.todosRef.push({
        name: this.newTodoName,
        isComplete: false
      });
      this.newTodoName = "";
    },
    updateIsCompleteTodo: function(todo, key) {
      todo.isComplete = !todo.isComplete;
      var updates = {};
      updates["/todos/" + key] = todo;
      this.database.ref().update(updates);
    },
    deleteTodo: function(key) {
      this.database
        .ref("todos")
        .child(key)
        .remove();
    }
  },

  data() {
    return {
      database: null,
      todosRef: null,
      newTodoName: "",
      showTodoType: "all",
      todos: []
    };
  }
};
</script>
