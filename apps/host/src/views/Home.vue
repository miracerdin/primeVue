<script setup lang="ts">
import { ref } from "vue";

const modelValue = ref(null);
// const myInputStyle = ref({
//   root: 'bg-gray-100 dark:bg-gray-900 p-4 text-gray-900 dark:text-gray-50 rounded-full placeholder:text-gray-500 border border-transparent'
// });
import { useToast } from "primevue/usetoast";

const toast = useToast();

const greet = () => {
    toast.add({
        severity: "success",
        summary: "PrimeTime",
        detail: modelValue.value,
    });
};
</script>

<template>
    <main
        class="flex justify-center border-b border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-0/80"
    >
        <Toast></Toast>
        <span class="">
            <InputText type="text" v-model="modelValue" size="small" placeholder="Small" />
            <label for="username">Username</label>
        </span>
        <div class="w-1.5">
            <Button label="user" rounded @click="greet" icon="pi pi-user" size="large" />
        </div>
    </main>
</template>
