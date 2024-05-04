<template>
    <div class="container px-4">
        <div class="container px-3" style="margin-top: 4rem; padding: 2rem;">
            <div class="title mx-auto text-center" style="width: fit-content;">
                <h1 class="text-center mx-auto text-center" style="color: #14193e;position: relative ; font-weight: bold; font-size: 50px;z-index: 2;">1CP</h1>
                <div class="background" style="background-color: #acd8fd;height: 40px;position: relative;bottom: 40px;z-index: 1;"></div>
            </div>
            <div class="row gap-5 " style="padding: 0;">
                <div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[0][0]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding:0 2rem;margin-top: 2rem; display: flex;flex-direction: column;margin-top: auto;align-items: center;justify-content: center;">
                        <div id="hide-line" style="border-top: 2px solid #1493ee; " class="d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1  style=" color: #3098f3; font-weight: bold;font-size: 22px;">SEMESTER 1</h1>
                        </div>
                    </div>
                </div>
                    <div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                        <div class="container-fluid" v-for="module in years[0][1]" :key="module.name" >
                            <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                                <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                                <a :href="module.link" class="my-3">{{ module.name }}</a>
                            </div>
                        </div>
                        <div class="semester-btn" style="padding:0 2rem;margin-top: 2rem; display: flex;flex-direction: column;margin-top: auto;align-items: center;justify-content: center;">
                            <div id="hide-line" style="border-top: 2px solid #1493ee; " class="d-flex bottom p-3 align-items-center justify-content-center">  
                                <h1  style=" color: #3098f3; font-weight: bold;font-size: 22px;">SEMESTER 2</h1>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="container " style="margin-top: 4rem; padding: 2rem;">
            <div class="title mx-auto text-center" style="width: fit-content;">
                <h1 class="text-center mx-auto text-center" style="color: #14193e;position: relative ; font-weight: bold; font-size: 50px;z-index: 2;">2CP</h1>
                <div class="background" style="background-color: #acd8fd;height: 40px;position: relative;bottom: 40px;z-index: 1;"></div>
            </div>
            <div class="row gap-5 " style="padding: 0;">
                <div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[1][0]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding:0 2rem;margin-top: 2rem; display: flex;flex-direction: column;margin-top: auto;align-items: center;justify-content: center;">
                        <div id="hide-line" style="border-top: 2px solid #1493ee; " class="d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1  style=" color: #3098f3; font-weight: bold;font-size: 22px;">SEMESTER 1</h1>
                        </div>
                    </div>
                </div><div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[1][1]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding:0 2rem;margin-top: 2rem; display: flex;flex-direction: column;margin-top: auto;align-items: center;justify-content: center;">
                        <div id="hide-line" style="border-top: 2px solid #1493ee; " class="d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1  style=" color: #3098f3; font-weight: bold;font-size: 22px;">SEMESTER 2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container " style="margin-top: 4rem; padding: 2rem;">
            <div class="title mx-auto text-center" style="width: fit-content;">
                <h1 class="text-center mx-auto text-center" style="color: #14193e;position: relative ; font-weight: bold; font-size: 50px;z-index: 2;">2CP - AUTRES</h1>
                <div class="background" style="background-color: #acd8fd;height: 40px;position: relative;bottom: 40px;z-index: 1;"></div>
            </div>
            <div class="row gap-5 " style="padding: 0;">
                <div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[1][2]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding:0 2rem;margin-top: 2rem; display: flex;flex-direction: column;margin-top: auto;align-items: center;justify-content: center;">
                        <div id="hide-line" style="border-top: 2px solid #1493ee; " class="d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1  style=" color: #3098f3; font-weight: bold;font-size: 22px;">CONCOURS</h1>
                        </div>
                    </div>
                </div>
                <div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[1][3]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding:0 2rem;margin-top: 2rem; display: flex;flex-direction: column;margin-top: auto;align-items: center;justify-content: center;">
                        <div id="hide-line" style="border-top: 2px solid #1493ee; " class="d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1  style=" color: #3098f3; font-weight: bold;font-size: 22px;">RÉSUMÉS</h1>
                        </div>
                    </div>
                </div>
                <div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[1][4]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding:0 2rem;margin-top: 2rem; display: flex;flex-direction: column;margin-top: auto; align-items: center;justify-content: space-around;">
                        <div id="hide-line" style="border-top: 2px solid #1493ee; " class="d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1  style=" color: #3098f3; font-weight: bold;font-size: 22px;">ESI SBA</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container " style="margin-top: 4rem; padding: 2rem;">
            <div class="title mx-auto text-center" style="width: fit-content;">
                <h1 class="text-center mx-auto text-center" style="color: #14193e;position: relative ; font-weight: bold; font-size: 50px;z-index: 2;">1CS</h1>
                <div class="background" style="background-color: #acd8fd;height: 40px;position: relative;bottom: 40px;z-index: 1;"></div>
            </div>
            <div class="row gap-5 " style="padding: 0;">
                <div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[2][0]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding:0 2rem;margin-top: 2rem; display: flex;flex-direction: column;margin-top: auto;align-items: center;justify-content: center;">
                        <div id="hide-line" style="border-top: 2px solid #1493ee; " class="d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1  style=" color: #3098f3; font-weight: bold;font-size: 22px;">SEMESTER 1</h1>
                        </div>
                    </div>
                </div><div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[2][1]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding: 0 2rem; margin-top: 2rem; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div  style="border-top: 2px solid #1493ee;" class=" hide-line d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1 style="color: #3098f3; font-weight: bold; font-size: 22px;">SEMESTER 2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container " style="margin-top: 4rem; padding: 2rem;">
            <div class="title mx-auto text-center" style="width: fit-content;">
                <h1 class="text-center mx-auto text-center" style="color: #14193e;position: relative ; font-weight: bold; font-size: 50px;z-index: 2;">2CS</h1>
                <div class="background" style="background-color: #acd8fd;height: 40px;position: relative;bottom: 40px;z-index: 1;"></div>
            </div>
            <div class="spicialite mx-auto text-center d-flex aling-items-center justify-content-center gap-5" style="width: fit-content;margin-bottom: 3rem;">
                <button class="btn-move" style="border: none;"  >
                    <i :class="{'bx bxs-left-arrow' :true , 'not-active' : x === 0}" @click="decreaseX(x)" style="border: none;color: #14193e; font-weight: 700; font-size: 40px;z-index: 2;"></i>
                </button>
                <div class="title mx-auto text-center d-flex aling-items-center justify-content-center gap-4" style="width: fit-content;">
                    <h1 :class="{'text-center mx-auto text-center' : true , 'active' : x === 0}" style="color: #14193e;position: relative ; font-weight: 700; font-size: 40px;z-index: 2;">SID</h1>
                    <h1 :class="{'text-center mx-auto text-center' : true , 'active' : x === 1}" style="color: #14193e;position: relative ; font-weight: 700; font-size: 40px;z-index: 2;">SIL</h1>
                    <h1 :class="{'text-center mx-auto text-center' : true , 'active' : x === 2}" style="color: #14193e;position: relative ; font-weight: 700; font-size: 40px;z-index: 2;">SIQ</h1>
                    <h1 :class="{'text-center mx-auto text-center' : true , 'active' : x === 3}" style="color: #14193e;position: relative ; font-weight: 700; font-size: 40px;z-index: 2;">SIT</h1>
                </div>
                <button class="btn-move" style="border: none;" >
                    <i :class="{'bx bxs-right-arrow' :true , 'not-active' : x === 3}" @click="increaseX(x)" style="border: none;color: #14193e; font-weight: 700; font-size: 40px;z-index: 2;"></i>
                </button>
            </div>
            <div class="row gap-5 " style="padding: 0;">
                <div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[3][x][1]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding:0 2rem;margin-top: 2rem; display: flex;flex-direction: column;margin-top: auto;align-items: center;justify-content: center;">
                        <div id="hide-line" style="border-top: 2px solid #1493ee; " class="d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1  style=" color: #3098f3; font-weight: bold;font-size: 22px;">SEMESTER 1</h1>
                        </div>
                    </div>
                </div>
                <div class="col semester shadow " style="padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid" v-for="module in years[3][x][1]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                    <div class="semester-btn" style="padding: 0 2rem; margin-top: 2rem; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div  style="border-top: 2px solid #1493ee;" class=" hide-line d-flex bottom p-3 align-items-center justify-content-center">  
                            <h1 style="color: #3098f3; font-weight: bold; font-size: 22px;">SEMESTER 2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container " style="margin-top: 4rem; padding: 2rem;">
            <div class="title mx-auto text-center" style="width: fit-content;">
                <h1 class="text-center mx-auto text-center" style="color: #14193e;position: relative ; font-weight: bold; font-size: 50px;z-index: 2;">2CS - Modules Optionnels</h1>
                <div class="background" style="background-color: #acd8fd;height: 40px;position: relative;bottom: 40px;z-index: 1;"></div>
            </div>
            <div class="row shadow" style="background-color: white; padding: 0;border-radius: 1rem;">
                <div class="col semester  py-5" style="border-radius: 1rem; padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid"  v-for="module in years[3][4][0]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                </div>
                <div class="col semester py-5" style="border-radius: 1rem; padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid "  v-for="module in years[3][4][1]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container " style="margin-top: 4rem; padding: 2rem;">
            <div class="title mx-auto text-center" style="width: fit-content;">
                <h1 class="text-center mx-auto text-center" style="color: #14193e;position: relative ; font-weight: bold; font-size: 50px;z-index: 2;">3CS - Master</h1>
                <div class="background" style="background-color: #acd8fd;height: 40px;position: relative;bottom: 40px;z-index: 1;"></div>
            </div>
            <div class="row shadow" style="background-color: white; padding: 0;border-radius: 1rem;">
                <div class="col semester  py-5" style="border-radius: 1rem; padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid"  v-for="module in years[4][0][0]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                </div>
                <div class="col semester py-5" style="border-radius: 1rem; padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid "  v-for="module in years[4][0][1]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-auto" style="margin-bottom: 6rem; width: 700px; margin-top: 4rem; padding: 2rem;">
            <div class="title mx-auto text-center" style="width: fit-content;">
                <h1 class="text-center mx-auto text-center" style="color: #14193e;position: relative ; font-weight: bold; font-size: 50px;z-index: 2;">Concours Doctorat</h1>
                <div class="background" style="background-color: #acd8fd;height: 40px;position: relative;bottom: 40px;z-index: 1;"></div>
            </div>
            <div class="row shadow mx-auto" style="background-color: white; padding: 0;border-radius: 1rem;">
                <div class="col semester mx-auto   py-5" style="border-radius: 1rem; padding: 0;background-color: white; padding-top: 2rem;">
                    <div class="container-fluid mx-auto"  v-for="module in years[4][1]" :key="module.name" >
                        <div class="module mx-4 py-4 gap-2 d-flex align-items-center  justify-content-start" >
                            <i class='bx bxs-file text-primary' style="font-size: 40px;"></i>
                            <a :href="module.link" class="my-3">{{ module.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="jump-btn" style="z-index: 300000;">
          <JumpButton></JumpButton>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import JumpButton from './JumpButton.vue'
export default {
    name:'ModulesVue',
    data(){
        return{
            x:0
        }
    },
    computed:{
        ...mapState(['years'])
    },
    components:{
        JumpButton
    },
    methods:{
        increaseX(){
            if(this.x >= 3){
                return;
            }else{
                this.x = this.x + 1
            }       
            console.log(this.x)
        },
        decreaseX(){
            if(this.x <= 0){
                return;
            }else{
                this.x = this.x - 1
            }      
            console.log(this.x)
        }
    }
}
</script>

<style scoped>

.module a{
    font-weight: 400;
    font-size: 17px;
    text-decoration: none;
    color: black;
}
@media(max-width: 1000px){
    .jump-btn{
      display: none;
    }
}
.not-active{
    filter: opacity(40%);
}
.active{
    border-bottom: 4px solid #1493ee;
}
.semester{
    background-color: white;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    transition: all 0.3s ease;
}
.modules:hover{
    box-shadow: 0 10px 20px rgba(39, 166, 250, 0.466);
}
.module{
    height: 30px;
    border-radius: 1rem;
    transition: all 0.3S ease;
    padding: 0px;
}
.module:hover{
    background-color: #d4ebff;
}

.module a:hover{
    text-decoration:underline;
}

.semester .bottom{
    flex-direction: column;
    width: 100%;
    transition: background-color 0.5S ease;
    border-radius: 0 0 1rem 1rem;
}

.semester{
    position: relative;
}
.semester-btn{
    transition: all 0.4s ease;
    cursor: pointer;
    position: relative;
    bottom: 0;
}
.container{
    justify-content: space-around;
}
.semester-btn:hover{
    background-color: #d4ebff;
    border-top:none;
}

.semester-btn:hover .hide-line{
    border-top: none;
    border-width: 0;
    border-color: transparent;
}

.semester{
    transition: all 0.6s ease;
}
.semester:hover{
    box-shadow: 0 0 15px #62bdff90 !important;
     .semester-btn{
        background-color: #d4ebff;
    }
}
@media(max-width: 700px){
    .title h1{
        font-size: 30px;
    }
    .btn-move{
        font-size: 30px;
    }
}
</style>