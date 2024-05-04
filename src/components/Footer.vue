<template>
        <footer class=" text-center" style="display: flex;align-items: center;flex-direction: column; background-color: #f0f0f0; padding: 0; margin: 0;">
            <div class="text-center  footer container-fluid p-3" style="font-family: 'poppins'; color: white; font-weight: bold;display: flex;align-items: center;background-size: cover;justify-content: center;flex-direction: column;">
                <div class="container-fluid  text-container" style="margin-top: 4rem; display: flex;align-items: center;justify-content: center;flex-direction: column;">
                        <h1 style="margin-top: 5rem; font-weight: bold; font-size: 25px ;" class="text-center">Cet espace est dédié et exclusivement géré par des étudiants</h1>
                </div>
                <div class="p-5 gap-3 row mx-auto align-items-center justify-content-center">
                    <div class="col md-6 ">
                            <img src="../assets/images/esi-logo-opt-384.webp" style="width: 130px;" class="mx-3">
                    </div>
                    <div class="col md-6 ">
                            <div class="container-fluid d-flex align-items-center justify-content-center gap-4">
                                    <img src="../assets/images/cse-logo.png" style="width: 70px; filter: brightness(0) invert(1);">
                                   <div  class="cse " style="flex-direction: column;display: flex; align-items: start;">
                                        <p style="margin-top: 4px; text-align: left; font-size: 24px; font-weight: 600;">
                                          Club
                                          <br>
                                          Scientifique
                                          <br>
                                          de L'ESI
                                        </p>
                                    </div>
                            </div>
                    </div>
                </div>
                <a style="text-decoration: none;font-size: 30px; font-family: 'poppins';font-weight: bold;color: white; cursor: pointer; " href="https://www.instagram.com/milquetoast77/">NOUS CONTACTER</a>
                <h1 style="font-size: 15px;margin-top: 3rem;margin-bottom: 3rem;font-weight: 600;">Made with ❤️ by Tarek Ait Ahmed</h1>
            </div>
        </footer>
</template>



<script>



export default {    
    name:'FooterView',
    data(){
        return {
            imageSource:'../assets/images/images/logo.png'
        }
    }
}
</script>

<style>
.footer{
    margin-top: auto;
    background-image: url('../assets/images/footer.png') ;
    background-size: cover;
}
footer{
    width: 100%;
}
.footer{
    height: 60vh;
    gap:0;
}

.text-container{
    width: 550px;
}
</style>
