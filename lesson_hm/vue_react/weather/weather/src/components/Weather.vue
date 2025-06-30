<template>
<div class="container">

    <nav class="nav">
        <div class="time">{{ localtime }}</div>
        <div class="city">切换城市</div>
    </nav>

    <main class="city-info">
        <div class="city-name">{{ weatherData.city }}</div>
        <div class="weather">
            {{ weatherData.weather }}
        </div>
        <h2 class="temp">
            <em>{{weatherData.temperature  }}</em>℃
        </h2>
        <div class="detail">
            <span>风力：{{ weatherData.winPower }}级</span>
            <span>风向：{{ weatherData.windDirection }}级</span>
            <span>空气湿度：{{ weatherData.humidity }}级</span>
        </div> 
    </main>
    
</div>


</template>


<script setup>
import { onMounted, ref } from 'vue'

const localtime =ref();
onMounted(()=>{

    setInterval(() => {
    localtime.value = new Date().toLocaleString()
}, 1000)
})


const weatherData = ref({
    city: '北京',
    weather: '晴',
    temperature: 20,
    winPower: 10,
    windDirection: '南',
    humidity: 50
})

</script>


<style scoped>

.container {
   min-height:100vh;
   background-color: #000;
   opacity: 0.6;
   color: #fff;
}
.nav {
   overflow: auto;
    padding: 10px;
}
.city{
    float: right;
}
.time{
    float: left;
}
</style>