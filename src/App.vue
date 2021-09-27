<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Barre de Navigation</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Ajouter une carte" aria-label="Ajouter une carte" v-model="newTodo" @keyup.enter="addTodo">
        </form>
      </nav>
      <div v-for="(todo, index) in todos" :key="todo.id" class="card" style="width: 18rem; margin: 16px auto;">
          <div>
            <div v-if="!todo.editing">{{ todo.name }}</div>
            <input v-else type="text" v-model="todo.name">
          </div>
         <a href="#" class="btn btn-primary" @click="removeTodo(index)">Supprimer</a>
    </div>
  </div>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  watch: {
  },
  name: 'App',
  data() {
    return {
      todos: []
    };
  },
    mounted() {
    axios.get('http://localhost:3000/user')
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
          name: this.newTodo,

        })

        this.newTodo = ''
        this.idForTodo++
      },
      removeTodo(index) {
        this.todos.splice(index, 1)
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
