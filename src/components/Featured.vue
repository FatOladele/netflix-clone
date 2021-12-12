<template>
  <div class="featured">
    <div v-if="type" class="category">
      <span>{{type}}</span>
      <select name="genre" id="genre" v-model="genreSelect">
        <option value="">Genre</option>
        <option value="adventure">Adventure</option>
        <option value="comedy">Comedy</option>
        <option value="crime">Crime</option>
        <option value="fantasy">Fantasy</option>
        <option value="historical">Historical</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="thriller">Thriller</option>
        <option value="western">Western</option>
        <option value="animation">Animation</option>
        <option value="drama">Drama</option>
        <option value="documentary">Documentary</option>
      </select>
    </div>
    <img
      src="https://www.looper.com/img/gallery/the-matrix-4-will-reportedly-start-something-big/intro-1576775790.jpg"
      alt=""
    />
    <div class="info">
      <img
        src="https://www.pngarts.com/files/9/Matrix-Logo-Transparent-Image.png"
        alt=""
      />
      <span class="desc">Lorem ipsum dolor sit amet.</span>
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
export default {
  props: ['type', 'genre', 'info'],
  data() {
    return {
      genreSelect: ''
    }
  },
  watch: {
    genreSelect(val) {
      if(val) {
        alert(val)
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
