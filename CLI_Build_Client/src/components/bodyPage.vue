<template>
  <div class="container-fluid" >
    <div class="row g-2">
      <div class="col-6" v-for="n in 6" :key="(i-1)*n" >
        <div class="p-3 border bg-light" style="background-color :rgba(255,255,255,0.75);color:#000" v-if="idols[(i-1)*6 +n-1]"><body-page-item :key="(i-1)*6+n-1" :data="idols[(i-1)*6 +n-1] "/></div>
      </div>
    </div>
    <div class="row list-btn" style="margin-top: 2rem;">
      <div class="btn-group me-2" role="group" aria-label="First group" >
        <button type="button" class="btn btn-outline-secondary" style="background-color :rgba(255,255,255,0.75);color:#000" v-for="n in (Math.floor(length/6)+1)" :key="n" @click="i=n">{{n}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import bodyPageItem from "./bodyPageItem.vue";
export default {
  data: function () {
    return { i:1 }
  },
  props:{
    idols:Array,
    length:Number
  },
  components: { bodyPageItem },
};
</script>

<style>
</style>