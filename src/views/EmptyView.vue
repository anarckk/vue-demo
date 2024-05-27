<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useRouter } from 'vue-router';

const tabsArr = ref(['/default', '/test']);

const active = ref(0);
const router = useRouter()
console.log('router',router.currentRoute.value);

function _change () {
  console.log('fuck', active.value);
}
</script>

<template>
  <div class="empty-view">
    <div class="var-tabs-warp">
      <var-tabs
        class="tabs-example-vertical"
        elevation
        layout-direction="vertical"
        v-model:active="active"
        @change="_change"
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
