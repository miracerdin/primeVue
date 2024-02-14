<script setup lang="ts">
// import { SelectModel } from "@/types";
import { ref } from "vue";
import { sayHello } from "@primevue/common";
// import { usePrimeVue } from "primevue/config";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";

// const PrimeVue = usePrimeVue();
// const headerItems = ref<SelectModel[]>([
//   { value: "home", text: "Home", selected: false },
//   { value: "about", text: "About", selected: false },
//   { value: "contact", text: "Contact", selected: false },
// ]);

const checked = ref(false);

// const activeChanged = (type: SelectModel) => {
//   headerItems.value = headerItems.value.map((e) => {
//     const isSelected = e.value === type.value;
//     return { ...e, selected: isSelected };
//   });
// };

// const changeTheme = () => {
//   return PrimeVue.changeTheme(
//     "md-dark-indigo",
//     "md-light-indigo",
//     "theme-link",
//     () => {}
//   );
// };
sayHello();
</script>

<template>
    <nav>
        <span> Logo </span>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>

        <InputSwitch v-model="checked" />

        <ThemeSwitcher />
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    display: flex;
    justify-content: center;
}
ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
}
li {
    cursor: pointer;
}
</style>
