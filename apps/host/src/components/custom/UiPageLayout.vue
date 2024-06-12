<script setup lang="ts">
withDefaults(defineProps<{ overflowHidden?: boolean }>(), { overflowHidden: false });
</script>

<template>
    <div class="flex flex-col page-layout" :class="{ 'overflow-hidden': overflowHidden }">
        <slot name="header" />
        <div class="page-layout-main">
            <div class="page-layout-left">
                <slot name="left" />
            </div>
            <div class="page-layout-body">
                <slot />
            </div>
            <div class="page-layout-right">
                <slot name="right" />
            </div>
        </div>
        <slot name="footer" />
    </div>
</template>

<style scoped>
.page-layout {
    height: 100%;
    max-width: 100%;
    flex: 1 1 auto;
}
.page-layout-main {
    overflow: hidden;
    align-items: stretch;
    flex: 1 1 auto;
    max-width: 100%;
    display: flex;
}
.page-layout-body {
    display: flex;
    flex: 1;
    max-width: 100%;
    max-height: 100%;
    align-items: stretch;
}
.page-layout-left,
.page-layout-right {
    max-height: 100%;
    position: relative;
}
</style>
