<template>
    <div class="container-fluid" style="height: auto;display: flex;flex-direction: column;gap: 15rem;">
      <div class="navBar">
          <NavBar ></NavBar>
      </div>
        <div class="jump-btn" style="z-index: 3000;">
          <JumpButton></JumpButton>
        </div>
      <div class="search-bar" style="position: absolute;top: 60px;width: 100%; height: auto;">
        <SearchHeader></SearchHeader>
      </div>
      <div class="search-result d-flex align-items-center justify-content-center" style="height: auto;flex-direction: column;;">
        <div class="container-fluid " style="margin-top: 10rem; margin-bottom: 10rem;">
          <SearResults></SearResults>
        </div>
        <div v-if="results.length" class=" container-fli">
          <div class="container results " style="padding-top: 6rem; margin-top: -400px;"  :style="{ 'min-height': results.length * 70 + 'px' }">
              <div class="links" v-for="module  in results" :key="module.name">
                  <div class="link shadow my-4">
                    <i class='bx bxs-file'></i>
                    <a :href="module.link">{{ module.name }}</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
      
        <FooterView ></FooterView> 
  
    </div>

</template>

<script>
import NavBar from '../components/Nav.vue'
import FooterView from '../components/Footer.vue'
import SearchHeader from '../components/SearchHeader.vue'
import JumpButton from '../components/JumpButton.vue'
import { mapState } from 'vuex'

   
export default {
  name: 'SeachPage',
  data(){
    return{
      // initialize the result to an empty array 
    }
  },
  components: {
    NavBar,
    FooterView,
    SearchHeader,
    JumpButton
  },
  computed:{
        ...mapState(['results','searchKey'])
    }
}
</script>


<style scoped>
.container-fluid{
  background-color: #f0f0f0;
}
@media(max-width: 1000px){
    JumpButton{
      display: none;
    }
}
.link{
  width: 1000px;
  padding: 20px 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  border-radius: 8px;
}

i{
  color: #1493ee;
  font-size: 40px;
}
a{
    text-decoration: none;
    font-family: 'poppins';
    font-weight: bold;
    font-size: 20px;
    color: #0c0a55;
}

.header{
  background-image: url(../assets/images/header-search.png);
  background-size: cover;
  background-position: center;

}
</style>