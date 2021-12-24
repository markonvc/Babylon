<template>
  <div class="container">
    <canvas class="canvas" ref="bjsCanvas" />
  </div>
  
</template>

<script>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "./3d/Scene";

export default {
  name: "BabylonScene",
  setup() {
    const bjsCanvas = ref(null);

    onMounted(() => {
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
      }
    });

    return {
      bjsCanvas,
    };
  },
};
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  .canvas {
    flex: 1;
    display: block;
  }
</style>
