<template>
  <Navbar />
  <div class="app">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
import "./style.css";
</script>

<style lang="scss">
.app {
  display: flex;
  min-width: 100%;
}
</style>
