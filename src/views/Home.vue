<template>
    <div>
        <div class="row mx-auto">
        <div v-for="(item,index) in items" :key="index">
        <MediaItems :item="item" :index="index"/>
        </div>
        </div>
    </div>
</template>
<script>
import MediaItems from '../components/MediaItems'
import { mapGetters } from "vuex";

export default {
   
    name: 'Home',
    components: {
        MediaItems
    }
    ,methods: {
    }, computed:{
        ...mapGetters({
            items: "allData"
        })
        
    }
}
</script>