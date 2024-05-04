<template>
    <div class="container" style="width: fit-content;">
        <div id="stick" style="width: 1500px;height: max-content;">
            <a id="sticky-btn" style=" text-decoration: none; display: flex;align-items: center;justify-content: center;flex-direction: column;width: fit-content;" href="https://tresor.cse.club/">
                <div class="container" style="width: fit-content;">
                    <img id="first-image" src="../assets/images/cse-logo (1).png" style="width: 50px;filter: brightness(0);">
                </div>
                <h1 class="pop-message" style="display: flex;align-items: center;justify-content: center;flex-direction: column;">"The Future is Here"</h1>
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

a#sticky-btn img{
    filter: brightness(0%);
    transition: all 0.5s;
}

a#sticky-btn h1{
    font-family: 'poppins';
    font-size: 20px;
    font-weight: bold;
    transition: all 0.3s ease;
    opacity: 0%;
    transition: all 0.4s;
}

a#sticky-btn:hover .pop-message{
    margin-bottom: 7rem;
    opacity: 100%;
    transform: scale(1.3);
}

a#sticky-btn {
    position: fixed;
    bottom: 90px;
    margin-bottom: -5rem;
    right: 20px;
    background-color: transparent;
    color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s;
}

#first-image {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    clip-path: none;
    transition: all ease;
  } 

a#sticky-btn:hover #first-image{
    clip-path: none;
    top: 70px;
}


 
</style>