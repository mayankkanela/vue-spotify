<template>
   <div>
  <b-navbar size= "lg" type="dark" variant="info" class="shadow flex">
    <b-navbar-brand class="t" >Vue-Music-Search-App</b-navbar-brand>
     
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit="searchTrack">
          <b-form-input size="lg" class="mr-2" placeholder="Search" v-model="searchItem"></b-form-input>
          <b-button size="lg" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>   

</div>

</template>

<script>
export default {
  name: 'NavBar',
  data()
  {
    return{
      searchItem: ""
    }
  },
  methods: {
      searchTrack()
      {
        this.$store.dispatch('search', this.searchItem)       
      }
  }
  
}
</script>

<style scoped>
.t{
    font-size: 1.5em;
}
</style>

