<template>
  <div class="container d-flex align-items-center flex-column">
    <div class="d-flex align-items-center flex-column mt-5">
      <p class="dashboard-title mb-0">Deprem Bağışı</p>
      <p class="dashboard-sub-title">Lorem ipsum sit down</p>
    </div>
    <!--If application done from citizen component make unvisible div-->
    <div v-if="!isApplied" class="w-100 mt-5 d-flex flex-column justify-content-center align-items-center">
      <select class="form-select w-25 formArea" v-model="applicationType">
        <option value="" disabled selected>Başvuru Tipini Seçiniz.</option>
        <option value="vatandas">Vatandaş</option>
      </select>
      <hr style="width: 30%;"/>
      <!--Call componnet according to the selected application type-->
      <Citizen class="w-25" v-if="applicationType == 'vatandas'" @applied="applicationDone" />
    </div>
    <!--Call component after the informations filled and application completed-->
    <ApplicationDetails v-if="isApplied"/>
  </div>
</template>
<script lang="ts">
import Citizen from "./Application/Citizen.vue";
import { defineComponent, ref } from "vue";
import ApplicationDetails from './Application/ApplicationDetails.vue';
export default defineComponent({
  components: {
    Citizen,
    ApplicationDetails,
  },
  setup() {
    const applicationType = ref("");
    const isApplied = ref<Boolean>(false);

    //If 'Başvuru Yap' button is clicked
    function applicationDone(){
      isApplied.value = true;
      console.log(isApplied)
    }

    return { applicationType, applicationDone, isApplied };
  },
});
</script>

<style scoped>
.dashboard-title {
  font-weight: 800;
  font-size: 24px;
  color: #4f4f4f;
}
.dashboard-sub-title {
  font-weight: 600;
  font-size: 16px;
  color: #9da8c3;
}
.formArea {
  margin-bottom: 16px;
  border: #9da8c2 solid 2px;
  color: #9da8c2;
  border-radius: 10px;
  padding: 8px;
  padding-left: 24px;
}
</style>
