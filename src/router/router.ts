
import Index from '../components/HelloWorld.vue'
import About from '../pages/about/index.vue'
import tt from '../pages/tt/tt.vue'
import layout from '../layout/layout.vue'
import menu1 from '../pages/menu1/index.vue'
import menu2 from '../pages/menu2/index.vue'

const routes = [
  { path: '/', component: Index },
  {
    path: '/about', component: About, children: [
      { path: '/tt', component: tt }
    ]
  },
  {
    path: '/index', component: layout
  },
  {
    path: '/menu1', component: layout, children: [
      {
        path: '/menu1', component: menu1
      }
    ]
  },
  {
    path: '/menu2', component: layout, children: [
      {
        path: '/menu2', component: menu2
      }
    ]
  }
]

export {
  routes
}