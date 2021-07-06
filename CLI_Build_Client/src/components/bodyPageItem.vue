<template>
  <div class="row">
      <div class="col-4">
          <img :src="'data:image/jpeg;base64,'+data.image" height="190" width="285" >
      </div>
      <div class="col-8">
          <h7 class="row">Name :{{data.name}}</h7>
          <h7 class="row">Born :{{data.born}}</h7>
          <h7 class="row">Blood Type :{{data.bloodType}}</h7>
          <h7 class="row">Breast :{{data.breast}}</h7>
          <h7 class="row">Waist :{{data.waist}}</h7>
          <h7 class="row">Hips :{{data.hips}}</h7>
          <h7 class="row">Height :{{data.height}}</h7>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        data:Object
    }

}
</script>

<style>

</style>