<script setup lang="ts">
const emit = defineEmits(["toggle-dark-mode"]);
const toggleDarkMode = () => {
  emit("toggle-dark-mode");
};
</script>

<template>
  <button @click="toggleDarkMode">Toggle Dark Mode</button>
</template>

<style scoped></style>
