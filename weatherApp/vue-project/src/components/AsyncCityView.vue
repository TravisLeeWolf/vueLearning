<template>
  <div class="flex flex-col flex-1 items-center">
    <!-- Banner -->
    <div
      class="text-white p-4 bg-weather-secondary w-full text-center"
      v-if="route.query.preview"
    >
      <p>
        You are currently previewing this city, click the
        <i class="fa-solid fa-circle-info"></i> icon to start tracking this
        city.
      </p>
    </div>
    <!-- Weather overview -->
    <div class="flex flex-col items-center text-white py-12">
      <h1 class="text-4xl mb-2">{{ weatherData.current.name }}</h1>
      <!-- Date and time can be added later -->
      <p class="text-8xl mb-8">
        {{ Math.round(weatherData.current.main.temp) }}&deg;
      </p>
      <p>
        Feels like {{ Math.round(weatherData.current.main.feels_like) }}&deg;
      </p>
      <p class="capitalize">{{ weatherData.current.weather[0].description }}</p>
      <img
        class="w-[150px] h-auto"
        :src="`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`"
      />
    </div>
    <hr class="border-white border-opacity-10 border w-full" />
    <!-- 5 day forecast here in future -->
    <div class="max-w-screen-md w-full py-12">
      <div class="mx-8 text-white">
        <h2 class="mb-4 capitalize">3 hourly forecast</h2>
        <div class="flex gap-10 overflow-x-scroll no-scrollbar">
          <div
            class="flex flex-col gap-4 items-center"
            v-for="forecast in weatherData.forecast.list"
            :key="forecast.dt"
          >
            <p class="whitespace-nowrap text-md">
              {{
                new Date(forecast.dt_txt).toLocaleTimeString(["en-us"], {
                  hour: "numeric",
                })
              }}
            </p>
            <img
              class="w-auto h-[50px] object-cover"
              :src="`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`"
            />
            <p class="text-xl">{{ Math.round(forecast.main.temp) }}&deg;</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Delete viewed city -->
    <div
      class="flex items-center gap-2 py-12 text-white text-2xl cursor-pointer duration-150 hover:text-red-500"
      @click="removeCity"
    >
      <i class="fa-solid fa-trash"></i>
      <p>Remove City</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const openWeatherAPIKey = "ed0073346132c4aded858fb3dc950dd3";
const route = useRoute();
const getWeatherData = async () => {
  try {
    const weatherDataCurrent = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${route.query.lat}&lon=${route.query.lng}&units=metric&appid=${openWeatherAPIKey}`
    );
    const weatherDataForecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${route.query.lat}&lon=${route.query.lng}&units=metric&appid=${openWeatherAPIKey}`
    );

    // Flicker Delay
    await new Promise((res) => setTimeout(res, 500));

    return {
      current: weatherDataCurrent.data,
      forecast: weatherDataForecast.data,
    };
  } catch (err) {
    console.log(err);
  }
};
const weatherData = await getWeatherData();

const router = useRouter();
const removeCity = () => {
  const cities = JSON.parse(localStorage.getItem("savedCities"));
  const updatedCities = cities.filter((city) => city.id !== route.query.id);
  localStorage.setItem("savedCities", JSON.stringify(updatedCities));
  router.push({ name: "home" });
};
</script>
