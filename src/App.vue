  <template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>


<script>
import "./style.css";
import NavBar from './components/NavBar'
import spotifyapi from './api/spotifyapi'
export default {
  name: "App",
  components: {
    NavBar
  },
  beforeCreate(){
    spotifyapi.authorize()
  }

};
</script>

<style>
</style>
