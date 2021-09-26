<template>
  <div>
    <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <div v-for="(todo, index) in todos" :key="todo.id">
      <div>
        <div v-if="!todo.editing" @dblclick="editTodo(todo)">
          {{ todo.title }}
        </div>
          <input v-else type="text" v-model="todo.title">
    </div>
        <div class="remove-item" @click="removeTodo(index)">supprimer</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TodoList',
  data () {
    return {
      newTodo: '',
      idForTodo: 3,
      todos: []
    };
  },
       mounted(){
     axios.get('http://localhost:3000/')
     .then((response) =>{
      console.log(response.data);
      this.todos = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
     },
    methods: {

      addTodo() {
        if(this.newTodo.trim().length == 0){
          return
        }

        this.todos.push({
          id: this.idForTodo,
          title: this.newTodo,
          completed: false,
        })

        this.newTodo = ''
        this.idForTodo++
      },
      editTodo(todo){
        alert('double clicked')
        todo.editing = true
      },
      removeTodo(index) {
        this.todos.splice(index, 1)
      }
    }
}
</script>

<style>
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  @:hover {
    color: black;
  }
}
</style>
