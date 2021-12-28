<template>
<div class="font-body">
  <router-view/>
</div>
</template>

<script>
export default {
}
</script>
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
.link:hover,
.link.router-link-active,
.link.router-link-exact-active {
  border-bottom: 2px solid white;
  cursor: pointer;
}
// .material-icons.md-dark { color: rgba(0, 0, 0); }
</style>
