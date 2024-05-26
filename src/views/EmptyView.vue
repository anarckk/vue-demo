<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";

const active = ref(0);
</script>

<template>
  <div class="empty-view">
    <div class="var-tabs-warp">
      <var-tabs
        class="tabs-example-vertical"
        elevation
        layout-direction="vertical"
        v-model:active="active"
      >
        <var-tab>default{{ active }}</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项3</var-tab>
      </var-tabs>
    </div>

    <div class="card-wrap">
      <div class="card var-elevation--4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.empty-view {
  display: block;
  height: 100%;
}
.var-tabs-warp {
  width: 160px;
  height: 100%;
  position: fixed;
}
.tabs-example-vertical {
  height: 240px;
}
.card-wrap {
  padding: 20px;
  margin-left: 160px;
  min-height: 100%;
}
.card {
  overflow: hidden;
  min-height: 100px;
}
</style>
