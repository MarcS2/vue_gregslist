<template>
  <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
    <section class="row bg-light border border-dark shadow-dark rounded m-2">
      <div class="col-7 p-0 ">
        <img class="img-fluid rounded-start" :src="house.imgUrl" alt="house img">
      </div>
      <div class="col-5">
        <h1>{{ house.creator.name }}</h1>
      </div>
    </section>
  </router-link>
</template>

<script>
import { House } from "../models/House";

export default {
  props: {
    house: { type: House }
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
img {
  height: 25vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>