import Vue from 'vue';
import Vuex from 'vuex';
import spotifyapi from '../api/spotifyapi'
Vue.use(Vuex)

 const store = new Vuex.Store({
    state:{
        data:{
            tracks:{
                items: []
            }   
        },
    },
    getters : {
        allData: state =>   state.data.tracks.items
        
    },
    mutations: 
    {
        ADD_DATA: (state, data) => {
            state.data = data;
        }
    },
    actions:
    {
        search(context, query)
        {
            spotifyapi.getTracks({query:{ query }}).then(data => {
                context.commit('ADD_DATA',data) }).catch(error => {
                    console.log(error)
                })
           
        }
    },
   
})
export default store
