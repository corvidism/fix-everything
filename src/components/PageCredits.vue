<script setup lang="ts">
import settings from '@/settings';
</script>

<template>
    <div class="page-credits">Created by Anna Frankova (<a :href="settings.portfolio.link">{{ settings.portfolio.title }}</a>), {{ settings.yearCreated }}. Inspired by <a href="http://make-everything-ok.com/">The magic button</a>.</div>
</template>

<style scoped>
.page-credits {
    width:100%;
    text-align: right;
    font-size: 0.8rem;
}
</style>