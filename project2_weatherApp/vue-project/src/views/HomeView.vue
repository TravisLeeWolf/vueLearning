<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        placeholder="Search for a city or prefecture"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        v-model="searchQuery"
        @input="getSearchResults"
      />
      <ul
        class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
        v-if="mapboxSearchResults"
      >
        <p v-if="searchError">Sorry, something went wrong, please try again.</p>
        <p v-if="!searchError && mapboxSearchResults.length === 0">No results match your query, try a different term.</p>
        <template v-else>
          <li
            class="py-2 cursor-pointer"
            v-for="searchResult in mapboxSearchResults"
            :key="searchResult.id"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.properties.full_address }}
          </li>
        </template>
      </ul>
    </div>
    <div class="flex flex-col gap-4">
      <Suspense>
        <CityList />
        <template #fallback>
          <CityCardSkeleton />
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import CityList from "../components/CityList.vue";

import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import CityCardSkeleton from "@/components/CityCardSkeleton.vue";

const router = useRouter();
const previewCity = (searchResult) => {
  console.log(searchResult);
  const [city, state] = searchResult.properties.full_address.split(",");
  router.push({
    name: "cityView",
    // Needs a fixing
    params: { state: state.replaceAll(" ", ""), city: city },
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    },
  });
};

const mapboxAPIKey =
  "pk.eyJ1IjoidHJhdmlzLWxlYXJuaW5nIiwiYSI6ImNsdmVucTRuNTBieGIyanMyaHlmdWQ5N3QifQ.K9REjiGeYHRP2jFuey4gMA";
const searchQuery = ref("");
const queryTimeout = ref(null);
const mapboxSearchResults = ref(null);
const searchError = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/search/geocode/v6/forward?q=${searchQuery.value}&types=place&access_token=${mapboxAPIKey}`
        );
        mapboxSearchResults.value = result.data.features;
      } catch {
        searchError.value = true;
      }
      return;
    }
    mapboxSearchResults.value = null;
  }, 1000);
};
</script>
