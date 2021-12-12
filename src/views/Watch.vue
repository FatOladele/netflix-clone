<template>
  <div class="watch">
    <router-link to="/">
      <div class="back">
        <div>
          <span class="material-icons">arrow_back_outlined</span>
        </div>
        Home
      </div>
    </router-link>
    <video class="video" autoPlay progress controls src="../assets/trailer.mp4" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.watch {
  width: 100%;
  height: 100vh;

  .back {
    display: flex;
    align-items: center;
    position: absolute;
    top: 10px;
    left: 10px;
    color: white;
    cursor: pointer;
    z-index: 2;

    div {
      display: flex;
      width: 50px;
    }
  }

  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
