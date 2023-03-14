<template>
    <div class="page">
    <router-view v-slot="{ Component }">
        <transition class="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
    </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<style>
.fade-enter-from, .fade-leave-to{
    opacity: 0;
}
.fade-enter-active, .fade-leave-active{
    transition: opacity 0.5 ease-out;
}
</style>