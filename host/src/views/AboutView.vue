<template>
    <div class="AboutView">
        <div style="width: 85%;">
            <TheWelcome />
        </div>
    </div>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<style scoped lang="scss">
.AboutView {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 0 100px;
}
</style>
