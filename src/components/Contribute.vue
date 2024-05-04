<template>
    <div class="container-fluid my-4">
        <div class="contribute p-5">
            <div class="text d-flex flex-column align-items-center justify-content-center">
                <h5>Ajouter votre contribution à</h5>
                <span style="color: #1493ee">Tresor ESI</span>
            </div>
            <div class="cont">
                <div class="line"></div>
                <a class="btn btn-primary" href="#">Contribuer</a>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ContributeView'
}
</script>

<style scoped>

.contribute{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-color: white;
    margin: 0;
    text-align: center;
}

.container-fluid{
    padding: 0;
    margin: 0;
}

.cont{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
h5{
    font-weight: bold;
    font-size: 25px;
    color: #0c0a55;
}

span{
    font-weight: bold;
    font-size: 25px;
}
hr{
    height: 4px;
    color: #1493ee;
}

a{
    color: white;
    font-weight: 600;
    padding: 10px 18px;
    font-size: 20px;
    background-color: #1493ee;
    border-radius: 8px;
    border: none;
}

.line{
    height: 2px;
    border-top: 3px solid #1493ee;
    width: 600px;
}
</style>