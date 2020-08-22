<template>
  <div v-on:click="openPlayer">
    <div class="music-card">
      <div class="image">
        <img
          :src="item.album.images[0].url"
          @error="$event.target.src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'"
        />
      </div>
      <div class="info">
        <h2 class="title">{{item.album.name}}</h2>
        <div class="artist">{{item.artists[0].name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaItems",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      pic: "",
    };
  },
  methods: {
    openPlayer() {
      this.$router.push({name: 'Player'})
    },
  },
};
</script>
