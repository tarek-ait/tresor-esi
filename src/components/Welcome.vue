<template>
    <header class="text-center" style="display: flex;align-items: center;flex-direction: column; background-color: #f0f0f0; padding: 0; margin: 0;flex-direction: column;justify-content: center;">
        <div class="row d-flex header text-center  gap-5 container-fluid p-3" style=" font-family: 'poppins'; color: white; font-weight: bold;display: flex;align-items: center;background-size: cover;justify-content: center;flex-direction: column;">
            <div class="col md-6" >
                <img src="../assets/images/cse-logo (1).png" class="img-fluid" alt="Responsive image" style="width: 150px;filter: brightness(0) invert(1)">
            </div>
            <div class="col md-6">
                <h1 class="bien">Bienvenue à<span style="font-family: poppins;color: #14193e;"> TRESOR ESI</span></h1>
            </div>
            <div class="search-results" style="position: relative;">
                <div class="input " style="z-index: 100;margin-top: -10px;">
                    <SearchInput></SearchInput>
                </div>
                <div class="sub-result shadow d-flex flex-column py-1 m-0" style="position: absolute;top: 36px;z-index: 3;" v-if="results.length <= 4">
                    <div class="my-3 " v-for="module  in results" :key="module.name">
                        <div class="" style="display: flex;align-items: start;justify-content: start;flex-direction: column;">
                            <a class="text-start mx-4" :href="module.link">{{ truncateModuleName(module.name) }}</a>
                        </div>
                    </div>
                </div>
                <div v-else class="sub-result  shadow d-flex flex-column p-0 m-0" style="position: absolute;top: 35px;z-index: 3;">
                    <div class="py-3" style="display: flex;align-items: start;justify-content: start;flex-direction: column;"> 
                        <a class="py-3 text-start mx-4" :href="results[0].link">{{ truncateModuleName(results[0].name) }}</a>
                        <a class="py-3 text-start mx-4" :href="results[1].link">{{ truncateModuleName(results[1].name) }}</a>
                        <a class="py-3 text-start mx-4" :href="results[2].link">{{ truncateModuleName(results[2].name) }}</a>
                        <a class="py-3 text-start mx-4" :href="results[3].link">{{ truncateModuleName(results[3].name) }}</a>
                        <router-link to="/Search" class="py-4 text-start mx-4" style="">SEE ALL ...</router-link>
                    </div> 
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import SearchInput from './SearchInput.vue'
import { mapState } from 'vuex'
export default {
    name:'WelcomeView',
    data(){
        return {
            nameModules:[]
        }
    },components:{
            SearchInput
    },
    methods:{
        truncateModuleName(name) {
        const maxLength = 46;
        if (name.length > maxLength) {
        return name.slice(0, maxLength) + '...';
        }
        return name;
    }   
    },
    computed:{
        ...mapState(['searchKey','results']), // these for the functions where we return a value ie not for procedures 
       
    }
}
</script>

<style scoped>

.col img{
    width: 145px;
}

header {
    background-image: url(../assets/images/header.png);
    background-size: cover;
    background-position: center;
    height:94vh;
}

.bien{
    font-size: 65px;
    font-weight: bold;
    color: white;
}
.search-results{
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 0;
}
.sub-result{
    border: none;
    border-radius: 0px 0px 8px 8px;
    width: 600px;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    background-color: #f4f4f4;
}

a{
    text-decoration: none;
    font-weight: 520;
    font-size: 20px;
    color: #bcbcbc;
}
a:hover{
    text-decoration: underline;
}
@media(max-width: 1000px){
        .bien{
            font-size: 47px;
        }
        
    }

    
@media(max-width: 700px){
    .sub-result{
        width: 400px;
    }
    .bien{
        font-size: 40px;
    }
}
</style>
