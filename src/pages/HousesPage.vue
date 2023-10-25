<template>
  <div class="container-fluid">
    <section class="row">
      <div v-for="home in houses" :key="home.id" class="col-4">
        <HouseCardComponent :house="home" />
      </div>
    </section>
  </div>
</template>


<script>
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import Pop from "../utils/Pop";
import HouseCardComponent from "../components/HouseCardComponent.vue";
export default {
  setup() {
    async function getHouses() {
      try {
        await housesService.getHouses();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      housesService.clearData()
      getHouses();
    });
    return {
      houses: computed(() => AppState.houses)
    };
  },
  components: { HouseCardComponent }
};
</script>


<style lang="scss" scoped></style>