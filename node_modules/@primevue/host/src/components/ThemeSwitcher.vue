<script lang="ts" setup>
import Configurator from "./Configurator.vue";
import { ref } from "vue";

const iconClass = ref("pi-moon");

const onThemeToggler = () => {
  const root = document.getElementById("app");

  root?.classList.toggle("dark");
  iconClass.value = iconClass.value === "pi-moon" ? "pi-sun" : "pi-moon";
};

const setSystemTheme = () => {
  const root = document.getElementById("html");
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    root?.classList.toggle("dark");
    iconClass.value = iconClass.value === "pi-moon" ? "pi-sun" : "pi-moon";
  }
};
setSystemTheme();
</script>
<template>
  <div class="relative">
    <Button
      class="inline-flex border-1 w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
      type="button"
      @click="onThemeToggler"
    >
      <i :class="`dark:text-white pi ${iconClass}`"></i>
    </Button>
    <Button
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
      class="inline-flex border-1 w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
      type="button"
    >
      <i class="pi pi-palette dark:text-white"></i>
    </Button>
    <Configurator />
  </div>
</template>

<style scoped>
.box {
  background-color: var(--green-500);
  color: #ffffff;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  font-weight: bold;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

@keyframes my-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes my-fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.my-fadein {
  animation: my-fadein 150ms linear;
}

.my-fadeout {
  animation: my-fadeout 150ms linear;
}
</style>
