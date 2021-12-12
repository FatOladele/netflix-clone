<template>
<div class="font-body">
  <router-view/>
</div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

:root {
  --main-color: #0b0b0b
}
#app {
  background-color: var(--main-color);
  width: 100%;
  overflow-x: hidden;
}
// .material-icons.md-dark { color: rgba(0, 0, 0); }
</style>
