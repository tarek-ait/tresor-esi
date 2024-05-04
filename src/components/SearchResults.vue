<template>
  <div class="container-fluid " style="margin: 16rem 0;">
    <h1 v-if="!searchKey" class="mx-auto" style="font-weight: bold;color: black;font-size: 33px; text-align: center ; width:1000px;line-height: 1.5;margin-top: 5rem;">Tapez et regardez le résultat de votre recherche apparaître ici !</h1>
        <h1 v-if="!results.length && searchKey" class=" mx-auto" style="font-weight: bold;color: black;font-size: 33px; text-align: center ; width:1000px;line-height: 1.5;">Nous avons cherché et cherché, mais rien n'a été trouvé :(</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'SearchResults',
    computed:{
      ...mapState(['results','searchKey'])
    }
  }
</script>

<style>



</style>