<template>
  <div class="home">
    <!-- Navbar -->
    <nav-bar/>
    <!-- <img
      src="https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg"
      alt=""
    /> -->
    <featured :type="type" :genre="(type==='series')? getSeriesGenre: getMoviesGenre" v-on:genre-select="getMovie($event)"/>
    <list v-for="(j, i) in listData" :key="i" :listTitle="i" :listItems="j">
    </list>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue'
import List from '../components/List.vue'
import Featured from '../components/Featured.vue'
import api from '../utils/api'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  props: ['type', 'genre'],
  components: {
    NavBar,
    Featured,
    List
  },
  created() {
    api.get('/api/genre').then(res => {
      this.setGenre(res.data)
    }).catch(err => {
      console.log(err)
    })
    api.get('/api/movies/randomlist').then(res => {
      this.listData = res.data
    }).catch(err => {
      console.log(err)
    })
  },
  computed: {
    ...mapGetters('apps', ['getMoviesGenre', 'getSeriesGenre'])
  },
  data() {
    return {
      featured: null,
      listData: {}
    }
  },
  methods: {
    ...mapActions('apps', ['setGenre']),
    getMovie(genre){
      if(genre && this.type) {
        this.$router.push(`/${this.type}?genre=${genre}`)
      } else if (this.type) {
        this.$router.push(`/${this.type}`)
      } else {
        this.$router.push(`/`)
      }
    }
  },
  watch: {
    type(val) {
      if (val) {
        if(this.genre) {
          api.get(`/api/movies/randomlist?type=${val}&genre=${this.genre}`).then(res => {
            this.listData = res.data
          }).catch(err => {
            console.log(err)
          })
        } else {
          api.get(`/api/movies/randomlist?type=${val}`).then(res => {
            this.listData = res.data
          }).catch(err => {
            console.log(err)
          })
        }
      } else {
        api.get(`/api/movies/randomlist`).then(res => {
          this.listData = res.data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    genre(val) {
      if (this.type) {
        if(val) {
          api.get(`/api/movies/randomList?type=${this.type}&genre=${val}`).then(res => {
            this.listData = res.data
          }).catch(err => {
            console.log(err)
          })
        } else {
          api.get(`/api/movies/randomList?type=${this.type}`).then(res => {
            console.log(res)
            this.listData = res.data
          }).catch(err => {
            console.log(err)
          })
        }
      } else {
        api.get(`/api/movies/randomList`).then(res => {
          this.listData = res.data
        }).catch(err => {
          console.log(err)
        })
      }
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
