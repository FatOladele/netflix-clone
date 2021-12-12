<template>
  <div class="list">
    <span class="list_title">
      {{listTitle}}
    </span>
    <div class="wrapper">
      <div class=" slider_arrow left" @click.prevent="moveList('left')" :style="{ 'display': (slideNumber <= 0)? 'none' : 'flex'}">
        <span class="material-icons">arrow_back_ios</span>
      </div>
      <div class="containers" ref="listRef">
        <list-item v-for="i in 10" :key="i"></list-item>
      </div>
      <div class=" slider_arrow right" @click.prevent="moveList('right')" :style="{ 'display': (slideNumber > 10)? 'none' : 'flex'}">
        <span class="material-icons">arrow_forward_ios</span>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
export default {
  props: ['listTitle', 'listItems'],
  components: {
    ListItem
  },
  data() {
    return {
      slideNumber: 0
    }
  },
  methods: {
    moveList(direction) {
      let distance = this.$refs.listRef.getBoundingClientRect().x - 50
      if (direction === "left" && this.slideNumber > 0) {
        this.slideNumber -= 1
        this.$refs.listRef.style.transform = `translateX(${230 + distance}px)`
        return
      }
      const clickLimit = window.innerWidth / 230
      if (direction === "right" && this.slideNumber < 10 - clickLimit) {
        this.slideNumber += 1
        this.$refs.listRef.style.transform = `translateX(${-230 + distance}px)`
        return
      }
    }
  }
}
</script>

<style lang="scss">
.list {
  width: 100%;
  margin: 20px 0px;

  .list_title {
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
  }

  .wrapper {
    position: relative;
    .slider_arrow {
      width: 50px;
      height: 100%;
      background-color: rgb(22, 22, 22, 0.5);
      color: white;
      position: absolute;
      z-index: 99;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;
      display: flex;
      align-items: center;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
      }
    }
    .containers {
      margin-left: 50px;
      display: flex;
      margin-top: 10px;
      width: max-content;
      transform: translateX(0px);
      transition: all 1s ease;
    }
  }
}
</style>
