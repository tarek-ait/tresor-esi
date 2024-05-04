<template>
     <div class="container-fluid shadow">
                <form id="form-control" class=" d-flex form-control gap-2 align-items-center justify-content-start " >
                    <i class='bx bx-search ' style="color: #0275d8;font-size: 30px;opacity: 90%;font-weight: 500;"></i>
                    <input v-model="this.$store.state.searchKey"  placeholder="Recherche par module  . ..ex : ALSDS" aria-label="Search" style="border:none;outline: none;width: 100%; font-weight: 600;font-size: 19px;">
                </form>
            </div>
</template>

<script>
import { mapState , mapMutations } from 'vuex'
export default {
    name:'SearchInput',
    computed:{
        ...mapState(['searchKey']),
    },
    mthods:{
        ...mapMutations(['search'])
    },
    watch:{
        searchKey(){
            this.$store.commit('search')
            if(this.$store.state.searchKey == ''){
                this.$store.state.results = []
            }
        }
    }
}
</script>

<style scoped>

.container-fluid{
    background-color: #f4f4f4;
    border: none;
    padding: 0;
    border-radius: 8px ;
    width:600px;
}
#form-control{
    width: auto; 
    border: none;
    border-radius: 8px;
    padding: 12px 22px;
}
input{
    outline: none;
    border: none;
}
input::placeholder{
    font-family: "poppins";
    font-weight: 550;
    margin-left: 8px;
    font-size: 20px;
    opacity: 30%;
}

@media(max-width: 700px){
    .container-fluid{
        width: 400px;
    }
}
</style>