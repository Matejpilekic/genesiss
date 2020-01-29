import Vue from 'vue'
import Router from 'vue-router'
import InputFile from './components/InputFile'
import InputData from './views/InputData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: InputFile
    },
    {
      path: '/data/',
      name: 'form_data',
      component: InputData,
      props: (route) => ({ id: route.query.id }, { name: route.query.name }, { extension: route.query.extension })
    }
  ]
})