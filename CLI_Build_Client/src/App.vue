<template>
  <div class="container" >
      <div class="row" style="background-color:#2d4262">
        <header-page/>
      </div>
      <div class="row">
        <div class="col-3" style="background-color: #363237">
          <nav-bar-select @input="search($event)" />
        </div>
        <div class="col-9" style="background-color: #003333	">
          <body-page :idols="newIdols" :length="length" />
        </div>
      </div>    
  </div>
</template>

<script>
import BodyPage from './components/bodyPage.vue'
import HeaderPage from './components/headerPage.vue'
import NavBarSelect from './components/navBarSelect.vue'
import axios from 'axios'
export default {
  data(){
    return{
      newIdols:[],
      idols:[],
      length:0,
      inp:''
    }
  },
  name: 'App',
  components: {
    NavBarSelect,
    BodyPage,
    HeaderPage
  },
  mounted () {
      axios
        .get('http://minhdz117.duckdns.org:6100/get')
        .then(response => {
            this.idols=response.data
            this.length= this.idols.length
            this.newIdols=this.idols
        })
  },
  methods:{
    search: function(data){
      console.log (Number(this.idols[1].breast.split(' ')[1]))
      this.newIdols = this.idols.filter(element =>(element.name.toLowerCase().indexOf(data.name.toLowerCase()) >=0 | data.name=='') & 
                                                  Number(element.born.split('/')[2]) >= Number(data.born.min) &
                                                  Number(element.born.split('/')[2]) <= Number(data.born.max) &
                                                  Number(element.breast.split(' ')[1]) >= Number(data.breast.min) &
                                                  Number(element.breast.split(' ')[1]) <= Number(data.breast.max) &
                                                  Number(element.waist.split(' ')[1]) >= Number(data.waist.min) &
                                                  Number(element.waist.split(' ')[1]) <= Number(data.waist.max) &
                                                  Number(element.hips.split(' ')[1]) >= Number(data.hips.min) &
                                                  Number(element.hips.split(' ')[1]) <= Number(data.hips.max) &
                                                  Number(element.height.split(' ')[1]) >= Number(data.height.min) &
                                                  Number(element.height.split(' ')[1]) <= Number(data.height.max) 
      )
      this.length=this.newIdols.length
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
