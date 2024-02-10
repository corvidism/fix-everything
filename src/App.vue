<script setup lang="ts">
import FixButton from './components/FixButton.vue'
import AllFixed from './components/AllFixed.vue'
import PageCredits from './components/PageCredits.vue'
import {ref} from 'vue'

const buttonClicked = ref(false);

function setButton(value: boolean) {
  setTimeout(() => {
    buttonClicked.value = value;
  }, 300)
}


</script>

<template>
  <main>
    <FixButton @click="setButton(true)" v-if="!buttonClicked" />
    <AllFixed v-on:tryAgain="setButton(false)" v-else />
  </main>
  <footer>
    <PageCredits />
  </footer>
</template>

<style scoped>
main {
 display: flex;
 justify-content: center;
 flex-grow: 1;
 align-items:center;
}

footer {
  flex: 0 0 auto;
}
</style>
