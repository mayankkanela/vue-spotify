<template>
    <div class="bag">
        <!-- <img src="http://ecx.images-amazon.com/images/I/51XSHShbPiL.jpg"/> -->
        <div class ="row">
            <div class="media-buttons mx-auto">
            <img src= "../assets/play-button.svg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Player'
}
</script>

<style scoped>
.bag {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-size: 100%;
  background-image: url("http://ecx.images-amazon.com/images/I/51XSHShbPiL.jpg");
}
.media-buttons{
    width: 5%;
    height: 5%;
    margin-top: 20em;
    margin-bottom: 20em;
    
}
</style>
