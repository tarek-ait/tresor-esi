<template>
    <header class="text-center" style="display: flex;align-items: center;flex-direction: column; background-color: #f0f0f0; padding: 0; margin: 0;">
        <div class="container">
            <div class="text row">
                        <h1 class="bien text-center" style="width: 970px;line-height: 1.5;">« LE SAVOIR EST LA SEULE RICHESSE QU'ON NE PERD PAS QUAND ON LA PARTAGE AVEC AUTRUI »
                        <br>
                        ADAGE AFRICAIN</h1>
            </div>
            <div class="input-field">
                <SearchInput></SearchInput>
            </div>
            <div class="search-results">
                <SearchResults></SearchResults>
            </div>
        </div>
    </header>
</template>

<script>
import SearchInput from './SearchInput.vue'
import SearchResults from './SearchResults.vue'
import { mapState  } from 'vuex'
export default {
    name:'SearchHeader',
    data(){
        return {
        }
    },components:{
            SearchInput,
            SearchResults
    },
    computed:{
        ...mapState(['searchKey','results']),
    }
}
</script>

<style scoped>

.col img{
    width: 145px;
}

header {
    background-image: url(../assets/images/header-search.png);
    background-size: cover;
    background-position: center;
    height: 50vh;
}

.bien{
    font-size: 24px;
    font-weight: bold;
    color: white;
}

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10rem; 
}

.input-field{
    margin-top: 5rem;
}
</style>