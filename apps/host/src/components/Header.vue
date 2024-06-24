<script setup lang="ts">
import { ref, watch } from "vue";
import { sayHello } from "@primevue/common";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
import SignIn from "../components/SignIn.vue";
import Register from "../components/Register.vue";
import { useToast } from "primevue/usetoast";
import { userModule } from "../store";

const toast = useToast();

const currentUser = ref(userModule().currentUser);

watch(
    () => userModule().currentUser,
    (newVal) => {
        currentUser.value = newVal;
    },
    { immediate: true },
);

const showSuccess = () => {
    console.log("success");
    toast.add({
        severity: "success",
        summary: "Giriş Başarılı",
        detail: "Giriş Başarılı",
        life: 3000,
    });
};
sayHello();
</script>

<template>
    <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem" class="h-20">
        <template #start>
            <div class="flex align-items-center gap-2">
                <svg
                    width="35"
                    height="40"
                    viewBox="0 0 35 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="..." fill="var(--text-color)" />
                    <path d="..." fill="var(--surface-card)" />
                </svg>
                <div id="nav">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
        </template>

        <template #end>
            <div class="flex align-items-center gap-2">
                <sign-in @onShowToast="showSuccess" />
                <Toast />
                <Register v-if="!currentUser" />
                <ThemeSwitcher />
            </div>
        </template>
    </Toolbar>
</template>

<style scoped>
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
