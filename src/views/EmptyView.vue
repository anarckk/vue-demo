<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue'

const tabsArr = ref([
  {path: '/default', name: "默认"}, 
  {path: '/test', name: "test"},
]);

const active = ref(0);
const router = useRouter()

function _change () {
  console.log('fuck', active.value);
  var link = tabsArr.value[active.value].path;
  console.log(link);
  router.push(link);
}
onBeforeMount(() => {
  const fullpath: string = router.currentRoute.value.fullPath;
  for (let i = 0; i < tabsArr.value.length; i++) {
    if (fullpath.startsWith(tabsArr.value[i].path)) {
      active.value = i;
      break;
    }
  }
})
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
        <var-tab v-for="item in tabsArr">{{ item.name }}</var-tab>
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
  /* height: 240px; */
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
