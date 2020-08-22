import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Player from '@/views/Player'

Vue.use(Router)

export default new Router(
    {
        routes: [
            {
                path:'/',
                name: 'Home',
                component: Home
            },
            {
                path:'/play',
                name: 'Player',
                component: Player
            }
        ]
    }
)