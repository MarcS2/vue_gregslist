<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <h1>House Details</h1>
      </div>
    </section>
    <section class="row">
      <div class="col-12 img-col">
        <img :src="activeHouse.imgUrl" alt="house image">
      </div>
      <div class="col-12">
        <h1>{{ activeHouse }}</h1>
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from "vue";
import { housesService } from "../services/HousesService";
import Pop from "../utils/Pop";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
export default {
  setup() {
    const route = useRoute()

    async function getHouseById() {
      try {
        const houseId = route.params.houseId;
        await housesService.getHouseById(houseId);
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      housesService.clearData()
      getHouseById()
    })
    return {
      activeHouse: computed(() => AppState.activeHouse)
    }
  }
};
</script>


<style lang="scss" scoped>
img {
  height: 25%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.img-col {
  min-height: 10vh;
}
</style>