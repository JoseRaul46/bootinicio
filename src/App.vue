<template>
  <div id="app">
    <encabezado></encabezado>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Encabezado from './componentes/encabezado.vue'

export default {
  components:{
    encabezado:Encabezado
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
