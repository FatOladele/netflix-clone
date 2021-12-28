<template>
  <div class="featured">
    <div v-if="type" class="category">
      <span class="type_text">{{type}}</span>
      <select name="genre" id="genre" v-model="genreSelect">
        <option value="">All</option>
        <option v-for="g in genre" :key="g.id" :value="g.id">{{g.name}}</option>
      </select>
    </div>
    <img
      :src="featured && `https://image.tmdb.org/t/p/original${featured.backdrop}`"
      alt=""
    />
    <div class="info">
      <img
        :src="featured && featured.imgTitle"
        alt=""
      />
      <span class="desc">{{featured && featured.desc}}</span>
      <div class="buttons">
        <button class="play">
          <span class="material-icons text-black">play_arrow</span>
          <span>Play</span>

        </button>
        <button class="more">
          <span class="material-icons">info_outlined</span>
          <span>Info</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../utils/api'
export default {
  props: ['type', 'genre'],
  beforeCreate() {
    api.get('/api/movies/featured').then(res => {
      this.featured = res.data
    }).catch(err => {
      console.log(err)
    })
  },
  computed: {
    ...mapGetters('apps', ['getMoviesGenre', 'getSeriesGenre'])
  },
  data() {
    return {
      genreSelect: '',
      featured: null
    }
  },
  watch: {
    genreSelect(val) {
      this.$emit('genre-select', this.genreSelect)
    },
    type(val) {
      this.genreSelect=''
      if(val) {
        api.get(`/api/movies/featured?type=${val}`).then(res => {
          this.featured = res.data
        }).catch(err => {
          console.log(err)
        })
      } else {
        api.get('/api/movies/featured').then(res => {
          this.featured = res.data
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="scss">
@mixin tablet {
  @media (max-width: 768px) {
    @content;
  }
}

@mixin mobile {
  @media (max-width: 480px) {
    @content;
  }
}
.featured {
  height: 76vh;
  position: relative;

  .category {
    position: absolute;
    top: 80px;
    left: 50px;
    font-size: 30px;
    font-weight: 400;
    color: white;
    display: flex;
    align-items: center;
    .type_text{
      text-transform: capitalize;
    }
    select {
      cursor: pointer;
      background-color: var(--main-color);
      border: 1px solid white;
      color: white;
      margin-left: 20px;
      padding: 5px;
      font-size: 20px;
      font-weight: 400;
    }
  }

  #genre{
    z-index: 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info {
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 60px;
    color: white;
    display: flex;
    flex-direction: column;

    img {
      width: 40vw;
      margin-top: 100px;
    }

    .desc {
      margin: 20px 0px;

      @include mobile {
        width: 60vw;
      }
    }

    .buttons {
      display: flex;

      button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 500;
        margin-right: 10px;
        cursor: pointer;

        &.play {
          background-color: white;
          color: var(--main-color);
        }

        &.more {
          background-color: gray;
          color: white;
        }

        span {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
