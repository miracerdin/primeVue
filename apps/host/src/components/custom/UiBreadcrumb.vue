<script setup lang="ts">
import { ref } from "vue";
import { MenuItem } from "primevue/menuitem";

const home = ref<MenuItem>({
    label: "Home",
    route: "/",
});
const items = ref<MenuItem[]>([{ label: "Test", route: "/about" }]);
</script>

<template>
    <Breadcrumb
        :home="home"
        :model="items"
        :pt="{ root: { style: 'background: var(--card-bg)' } }"
        class="my-3"
    >
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a :href="href" v-bind="props.action" @click="navigate">
                    <span :class="[item.icon, 'text-color']" />
                    <span class="text-primary font-semibold">{{ item.label }}</span>
                </a>
            </router-link>
        </template>
    </Breadcrumb>
</template>
