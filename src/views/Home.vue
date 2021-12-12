<template>
  <div class="home">
    <!-- Navbar -->
    <nav-bar/>
    <!-- <img
      src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg"
      alt=""
    /> -->
    <featured :type="type" :genre="genre" :key="type"/>
    <list v-for="(j, i) in listdata" :key="i" :listTitle="j.title" :listItem="j.item">
    </list>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue';
import List from '../components/List.vue';
import Featured from '../components/Featured.vue';

export default {
  name: 'Home',
  props: ['type', 'genre', 'list'],
  components: {
    NavBar,
    Featured,
    List
  },
  data() {
    return {
      listdata: [
        {
          title: "Continue Watching",
          items: []
        },
        {
          title: "New",
          items: []
        },
        {
          title: "Top Rated",
          items: []
        }
      ]
    }
  }
};
</script>

<style lang="scss">
  .home{
    background-color: var(--main-color);
    overflow: hidden;
    width: 100%;
    padding-bottom: 20px;
  }
</style>
