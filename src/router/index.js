import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import Json from '@/components/Json'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/Json',
      name: 'Json',
      component: Json
    },
  ]
})
