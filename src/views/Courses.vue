<template>
      <div class="container-fluid " style="gap: 3rem; z-index: 1000;">
        <div style="z-index: 10000;box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);position: relative;">
          <NavBar />
        </div>
        <div class="header my-5"  style="z-index: 1;">
          <welcomeView></welcomeView>
        </div>
        <div class="module" style="z-index: 2;">
          <ModulesVue></ModulesVue>
        </div>
        <div class="contribute my-5">
          <ContributeView></ContributeView>
        </div>
        <div class="" style="height: 25px;"></div>
        <div class="footer" style="margin-top: 2rem;">
          <FooterView ></FooterView> 
        </div>
      </div>
</template>

<script>
import NavBar from '../components/Nav.vue'
import FooterView from '../components/Footer.vue' 
import ContributeView from '../components/Contribute.vue'
import WelcomeView from '../components/Welcome.vue'
import ModulesVue from '../components/Modules.vue'
import { mapState } from 'vuex';


export default {
  name: 'CoursesPage',
  components: {
      NavBar,
      FooterView,
      ContributeView,
      WelcomeView,
      ModulesVue
  },
  computed:{
        ...mapState(['results','searchKey'])
    }
}
</script>



<style scoped>

*{
  height: auto;
  background-color: #f0f0f0;
}
.header{
  height: 100vh;
}

.contribute{
  margin-bottom: 7rem;
}
.footer{
  width: 100%; /* Push the footer to the bottom */
  text-align: center; /* Center the text */
  padding: 0; 
}
</style>