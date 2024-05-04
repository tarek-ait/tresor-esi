<template>
        <nav class="fixed-top justify-between bg-light nav-bar align-items-center shadow" style="justify-content: space-between;gap: 2rem;">
            <div v-show="!mobile" class="nav-menu">
                <router-link to="/">
                    <div class="img">
                        <img src="../assets/images/TresorEsi.webp"  class="logo">
                    </div>
                </router-link>
                <div class="years d-flex align-items-center flex-1">
                    <div class="year   " style="width: fixed;" @mouseleave="hideCP1()">  <!-- i think that the links and the link title should not be at the same div so we don't have them moving while hovering-->
                        <div class="link-title" style="width: fixed;">
                            <h5 style="transition: all 0.2s ease; margin-top: 10px;"  @mouseover="toggleCP1()"  >1CP</h5>
                        </div>
                        <div class="1CP year-links shadow" v-if="CP1"  >
                            <a class="p-1 " >Semester 1</a>
                            <a class="p-1 "  style="border: none;">Semester 2</a>
                        </div>
                    </div>
                    <div class="year"  style="width: fixed;"  @mouseleave="hideCP2()">
                        <div class="link-title" style="width: fixed;" >
                            <h5 style="transition: all 0.2s ease; margin-top: 10px;"  @mouseover="toggleCP2()">2CP</h5>
                        </div>
                        <div class="2CP year-links shadow" v-if="CP2" >
                            <a class="p-1 " >Semester 1</a>
                            <a class="p-1 " >Concours</a>
                            <a class="p-1 " style="border: none;">Semester 2</a>
                        </div>
                    </div>
                    <div class="year" style="width: fixed;" @mouseleave="hideCS1()">
                        <div class="link-title" style="width: fixed;">
                            <h5 style="transition: all 0.2s ease; margin-top: 10px;"  @mouseover="toggleCS1()" >1CS</h5>
                        </div>
                        <div class="1CS year-links shadow" v-if="CS1" >
                            <a class="p-1 " >Semester 1</a>
                            <a class="p-1 "  style="border: none;">Semester 2</a>
                        </div>
                    </div>
                    <div class="year" style="width: fixed;"  @mouseleave="hideCS2()">
                        <div class="link-title" style="width: fixed;">
                            <h5 style="transition: all 0.2s ease; margin-top: 10px;"  @mouseover="toggleCS2()" >2CS</h5>
                        </div>
                        <div class="2CS year-links shadow text-center" v-if="CS2">
                            <a class="p-1 " >SIL</a>
                            <a class="p-1 " >SIQ</a>
                            <a class="p-1 " >SIT</a>
                            <a class="p-1 " >SID</a>
                            <a class="p-1 "  style="border: none;">Modules Optionnels</a>
                        </div>
                    </div>
                    <div class="year" style="width: fixed;"  @mouseleave="hideCS3()">
                        <div class="link-title" style="width: fixed;">
                            <h5 style="transition: all 0.2s ease; margin-top: 10px;"  @mouseover="toggleCS3()">3CS</h5>
                        </div>
                        <div class="3CS year-links shadow" v-if="CS3" >
                            <a class="p-1 " >Master</a>
                            <a class="p-1 "  style="border: none;">Doctorat</a>
                        </div>
                    </div>
                </div>
                <router-link to="/Search">
                        <div class="d-flex form-control gap-2 align-items-center justify-content-center me-2" style="border-radius: 10px; box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2); border: 1px solid  #d3d3d3; width:230px;" role="search">
                            <i class='bx bx-search' style="color: #0275d8; font-size: 20px;"></i>
                            <div class="text-center" style="border: none; outline: none; width: 150px; font-family: 'poppins'; font-weight: 500; opacity: 40%; background-color: transparent;">Recherche</div>
                        </div>
                </router-link>
                <button class="btn px-5 " id="btn-contribuer" style="border-radius: 10px; background-color: #14193e;color: white;">Contribuer</button>  
            </div>

                <div v-show="mobile">
                    <router-link to="/">
                        <div class="img">
                            <img src="../assets/images/TresorEsi.webp" style="width: 135px;" class="tresorEsi">
                        </div>
                    </router-link>
                </div>
                <div v-if="mobile" @click="toggleMobileNav" class="nav-mobike">
                    <i class='bx bx-menu' style="font-size: 40px;color: #14193e;font-weight:500;order: 2;"></i>
                </div>
        

            <transition name="mobile-nav">
                <div class="container-fluid mobile-nav" v-show="mobileNav" style="background-color: white;position: absolute; width: 100%;left: 0;right: 0;padding: 2rem;border-radius: 1rem  1rem 1rem  1rem;">
                    <div class="header"  style="display: flex; align-items: center; justify-content: space-between;">
                        <i class='bx bxl-tux'  @click="toggleMobileNav" style="font-size: 30px;color: #14193e;font-weight:500;order: 2;"></i>
                        <div class="logo">
                            <img src="../assets/images/TresorEsi.webp"  style="width: 150px;order: 1;">
                        </div>
                    </div>
                    <div class="mobile-years">
                        <ul style="text-align:center; color: #14193e;font-weight: 600; margin-top: 3rem;display: flex;align-items: center;flex-direction: column;gap: 2rem;list-style: none;font-size: 20px;">
                            <li>Accueil</li>
                            <li>1CP</li>
                            <li>2CP</li>
                            <li>1CS</li>
                            <li>2CS</li>
                            <li>3cs</li>
                            <li>
                                <a class="btn btn-primary" style="padding-inline-start: 8px 15px; color: white;font-weight: 600;background-color: #0275d8;" href="#">Contribuer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </nav>
    <router-view></router-view>
</template>

<script>
export default {
    name:'NavBar',
    data(){
      return {
            CP1:false,
            CP2:false,
            CS1:false,
            CS2:false,
            CS3:false,
            mobile: null,
            mobileNav: null,
            windowWidth:null,
        }
    },
    created(){
        window.addEventListener("resize",this.checkScreen)
        this.checkScreen
    },

    methods:{
        checkScreen(){
            this.windowWidth = window.innerWidth
            if(this.windowWidth <= 1045){
                this.mobile = true
            }else{
                this.mobile = false
                this.mobileNav = false
            }
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav
        },
        toggleCP1(){
            this.CP1 = !this.CP1;
        },
        hideCP1(){
            this.CP1 = false;
        },
        toggleCP2(){
            this.CP2 = !this.CP2;
        },
        hideCP2(){
            this.CP2 = false;
        },
        toggleCS1(){
            this.CS1 = !this.CS1;
        },
        hideCS1(){
            this.CS1 = false;
        },
        toggleCS2(){
            this.CS2 = !this.CS2;
        },
        hideCS2(){
            this.CS2 = false;
        },
        toggleCS3(){
            this.CS3 = !this.CS3;
        },
        hideCS3(){
            this.CS3 = false;
        }
    }
}


</script>

<style scoped>

    *{
        transition: all 0.3 ease;
    }
    .nav-bar{
        background-image: url("../assets/images/navbar-bg-opt-1920.webp");
        background-size: cover;
        display: flex;
        align-items: center;
        height: 65px;
        padding: 0 5rem;
    }
    i{
        cursor: pointer;
    }
    .year-links{
        flex: 1;
        position: absolute;
        top: 55px;
        width: 130px;
        background-color: white;
        border: none;
        border-radius: 8px;
        color: #0c0a55;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        padding: 1rem;
        transition: all 0.3s ease ;
    }
    .nav-menu{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    }
     .years{
        display: flex;
        align-items:center;
        justify-content:space-between;
        gap: 2rem;
        margin-left: 8rem;
        /* padding-left: 8rem; */
    }

    .year a{
        border-bottom: 2px solid #0c0a55;
    }
    .logo{
        width: 185px;
        margin: 0;
    }
   
    .year{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        transition: all 0.3s ease;
    }

    .link-title:hover h5{
        border-bottom: 3px solid #1493ee;
    }

    h5{
        color: #0c0a55;
        font-weight: 600;
    }

    a{
        text-decoration: none;
        color:#0c0a55 ;
    }
 
    .mobile-nav{
        position: fixed;
        top: 0;
        z-index: 99;
        max-height: 700px;
        right: 0;
        left: 0;
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: all 0.5s ease;
    }

    .mobile-nav-enter{
        transform: translateY(-700px);
    }

    .mobile-nav-enter-to{
        transform: translateY(0);
    }

    .mobile-nav-leave-to{
        transform: translateY(-700px);
    } 

     @media(max-width: 1300px){
        .nav-bar{
            padding: 10px;
        }
        .years{
            padding-left: 0rem;
            margin-left: 0rem;
        }
    }
    @media(max-width: 1000px){
        .img .logo{
            width: 50px;
        }
    }
</style>



    <!-- <router-link to="/Courses">Courses page</router-link> |
    <router-link to="/Contribution">Contribution page</router-link> -->
        
   
   <!-- color -->
    <!-- -blue-dark: #0c0a55;
    --cream: #f4f4f4;
    --blue: #1493ee;
    --blue-light: #ceeaff; -->
