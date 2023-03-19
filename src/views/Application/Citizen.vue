<template>
  <!--Vatandaş başvurusu için component-->
  <div class="row">
    <div class="d-flex align-items-start">
      <p class="dashboard-title">Vatandaş Başvurusu</p>
    </div>
    <input
      type="text"
      class="form-input formArea"
      id="fname"
      name="fname"
      v-model="tcNo"
    /><br />
    <input
      type="text"
      class="form-input formArea"
      id="fname"
      name="fname"
      v-model="name"
    /><br />
    <input
      type="text"
      class="form-input formArea"
      id="fname"
      name="fname"
      v-model="surname"
    /><br />
    <input
      type="text"
      class="form-input formArea"
      id="fname"
      name="fname"
      v-model="birthDate"
    /><br />
    <div class="d-flex align-items-center">
      <span class="material-icons me-2" style="width: 20px; height: 20px">
        radio_button_checked
      </span>
      <a href="/" style="font-size: 12px; font-weight: 600px; color: #9da8c3; white-space: nowrap;"
        >Kişisel verilerin korunması hakkında</a
      >
    </div>
    <button class="btn btn-success border-0 mt-5" style="background: #41cb83" @click="apply">
      Başvuru Yap
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const tcNo = ref("59443576864");
    const name = ref("Mahsun");
    const surname = ref("Budak");
    const birthDate = ref("01.02.1990");

    function apply(this){
      this.$emit("applied")
    }

    return { tcNo, name, surname, birthDate, apply };
  },
});
</script>

<style scoped>
.dashboard-title {
  font-weight: 800;
  font-size: 18px;

  color: #4f4f4f;
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
