<template>
  <router-link to="/watch">
    <div class="list_item"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img src="../assets/Venom2.jpg" alt="">
      <div v-if="hover">
        <video src="../assets/trailer.mp4" autoplay="true" loop />
        <div class="item_info">
          <div class="icons">
            <span class="material-icons icon">play_arrow</span>
            <span class="material-icons icon">add</span>
            <span class="material-icons icon">thumb_up_off_alt</span>
            <span class="material-icons icon">thumb_down_off_alt</span>
          </div>
          <div class="item_info_top">
            <span>30 Mins</span>
            <span class="limit">PG 13</span>
            <span>1995</span>
          </div>
        </div>
        <div class="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam distinctio consectetur molestiae eligendi libero ipsam assumenda ullam neque accusantium impedit?</div>
        <div class="genre">Comedy</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      trailer: "https://player.vimeo.com/video/547584890?h=821d72d57a&color=ffffff&title=0&byline=0&portrait=0",
      hover: false
    }
  }
}
</script>

<style lang="scss">
.list_item {
  width: 225px;
  height: 120px;
  background-color: var(--main-color);
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    width: 100%;
    height: 140px;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover {
    width: 325px;
    height: 300px;
    position: absolute;
    top: -150px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    border-radius: 5px;

    img {
      height: 140px;
    }

    .item_info {
      display: flex;
      flex-direction: column;
      padding: 5px;

      .icons {
        display: flex;
        margin-bottom: 10px;

        .icon {
          border: 2px solid white;
          padding: 5px;
          border-radius: 50%;
          margin-right: 10px;
          font-size: 16px;
        }
      }
      .item_info_top {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
        color: gray;

        .limit {
          border: 1px solid gray;
          padding: 1px 3px;
          margin: 0 10px;
        }
      }

      .desc {
        font-size: 13px;
        margin-bottom: 10px;
      }

      .genre {
        font-size: 14px;
        color: lightgray;
      }
    }
  }
}
</style>
