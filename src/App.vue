<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Todos</h1>
    <ul>
      <li v-for="todo of todos" :key="todo.id">{{todo.name}}</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',
  data() {
    return {
      todos: []
    };
  },
    mounted() {
    axios.get('http://localhost:3000/')
      .then((response) =>{
      console.log(response.data);
      this.todos = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
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
